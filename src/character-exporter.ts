import { CharacterData, Lorebook } from './autonomous-generator.js';
import { st_echo } from 'sillytavern-utils-lib/config';

export interface CharacterCardV3 {
    spec: 'chara_card_v3';
    spec_version: '3.0';
    data: {
        name: string;
        description: string;
        personality: string;
        scenario: string;
        first_mes: string;
        mes_example: string;
        creator_notes: string;
        system_prompt: string;
        post_history_instructions: string;
        alternate_greetings: string[];
        character_book?: {
            name?: string;
            description?: string;
            scan_depth?: number;
            token_budget?: number;
            recursive_scanning?: boolean;
            extensions: Record<string, any>;
            entries: Array<{
                keys: string[];
                content: string;
                extensions: Record<string, any>;
                enabled: boolean;
                insertion_order: number;
                case_sensitive?: boolean;
                name?: string;
                priority?: number;
                id?: number;
                comment?: string;
                selective?: boolean;
                secondary_keys?: string[];
                constant?: boolean;
                position?: 'before_char' | 'after_char';
            }>;
        };
        tags: string[];
        creator: string;
        character_version: string;
        extensions: Record<string, any>;
    };
}

/**
 * Convert character data to V3 format
 */
export function convertToCharacterCardV3(
    character: CharacterData,
    lorebook?: Lorebook,
): CharacterCardV3 {
    const card: CharacterCardV3 = {
        spec: 'chara_card_v3',
        spec_version: '3.0',
        data: {
            name: character.name,
            description: character.description,
            personality: character.personality,
            scenario: character.scenario,
            first_mes: character.first_mes,
            mes_example: character.mes_example,
            creator_notes: '',
            system_prompt: '',
            post_history_instructions: '',
            alternate_greetings: character.alternate_greetings || [],
            tags: [],
            creator: 'SillyTavern Character Creator (Autonomous)',
            character_version: '1.0',
            extensions: {},
        },
    };

    // Add lorebook if provided
    if (lorebook && lorebook.entries && lorebook.entries.length > 0) {
        card.data.character_book = {
            name: lorebook.name,
            description: lorebook.description,
            scan_depth: lorebook.scan_depth,
            token_budget: lorebook.token_budget,
            recursive_scanning: lorebook.recursive_scanning,
            extensions: lorebook.extensions || {},
            entries: lorebook.entries.map((entry, index) => ({
                keys: entry.keys || [],
                content: entry.content || '',
                extensions: entry.extensions || {},
                enabled: entry.enabled ?? true,
                insertion_order: entry.insertion_order ?? index,
                case_sensitive: entry.case_sensitive ?? false,
                name: entry.name || entry.comment,
                priority: entry.priority ?? 10,
                id: entry.id ?? index,
                comment: entry.comment || `Entry ${index + 1}`,
                selective: entry.selective ?? false,
                secondary_keys: entry.secondary_keys || [],
                constant: entry.constant ?? false,
                position: entry.position || 'before_char',
            })),
        };
    }

    return card;
}

/**
 * Export character as JSON file
 */
export function exportCharacterAsJSON(
    character: CharacterData,
    lorebook?: Lorebook,
): void {
    try {
        const card = convertToCharacterCardV3(character, lorebook);
        const jsonString = JSON.stringify(card, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = `${character.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_v3.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        st_echo('success', `Character exported as JSON: ${a.download}`);
    } catch (error: any) {
        console.error('Error exporting character:', error);
        st_echo('error', `Failed to export character: ${error.message || String(error)}`);
    }
}

/**
 * Export lorebook as separate JSON file
 */
export function exportLorebookAsJSON(
    lorebook: Lorebook,
    characterName: string,
): void {
    try {
        // SillyTavern World Info format
        const worldInfo = {
            name: lorebook.name || `${characterName} Lorebook`,
            description: lorebook.description || '',
            scanDepth: lorebook.scan_depth || 4,
            tokenBudget: lorebook.token_budget || 2048,
            recursiveScanning: lorebook.recursive_scanning ?? false,
            extensions: lorebook.extensions || {},
            entries: {} as Record<string, any>,
        };

        // Convert entries array to object with numeric keys
        lorebook.entries.forEach((entry, index) => {
            worldInfo.entries[String(index)] = {
                uid: index,
                key: entry.keys || [],
                keysecondary: entry.secondary_keys || [],
                comment: entry.comment || `Entry ${index + 1}`,
                content: entry.content || '',
                constant: entry.constant ?? false,
                selective: entry.selective ?? false,
                insertion_order: entry.insertion_order ?? index,
                enabled: entry.enabled ?? true,
                position: entry.position === 'after_char' ? 1 : 0,
                extensions: entry.extensions || {},
            };
        });

        const jsonString = JSON.stringify(worldInfo, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        const filename = (lorebook.name || characterName).replace(/[^a-z0-9]/gi, '_').toLowerCase();
        a.download = `${filename}_lorebook.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        st_echo('success', `Lorebook exported as JSON: ${a.download}`);
    } catch (error: any) {
        console.error('Error exporting lorebook:', error);
        st_echo('error', `Failed to export lorebook: ${error.message || String(error)}`);
    }
}

/**
 * Create character in SillyTavern and optionally save lorebook
 */
export async function createCharacterWithLorebook(
    character: CharacterData,
    lorebook?: Lorebook,
): Promise<void> {
    try {
        const { createCharacter } = await import('sillytavern-utils-lib');

        // Prepare character data for SillyTavern
        const characterData: any = {
            name: character.name,
            description: character.description,
            personality: character.personality,
            scenario: character.scenario,
            first_mes: character.first_mes,
            mes_example: character.mes_example,
            data: {
                name: character.name,
                description: character.description,
                personality: character.personality,
                scenario: character.scenario,
                first_mes: character.first_mes,
                mes_example: character.mes_example,
                alternate_greetings: character.alternate_greetings || [],
                tags: [],
                avatar: 'none',
            },
            avatar: 'none',
            tags: [],
            spec: 'chara_card_v3',
            spec_version: '3.0',
        };

        // Add lorebook to character data if provided
        if (lorebook && lorebook.entries && lorebook.entries.length > 0) {
            characterData.data.character_book = {
                name: lorebook.name,
                description: lorebook.description,
                scan_depth: lorebook.scan_depth,
                token_budget: lorebook.token_budget,
                recursive_scanning: lorebook.recursive_scanning,
                extensions: lorebook.extensions || {},
                entries: lorebook.entries.map((entry, index) => ({
                    keys: entry.keys || [],
                    content: entry.content || '',
                    extensions: entry.extensions || {},
                    enabled: entry.enabled ?? true,
                    insertion_order: entry.insertion_order ?? index,
                    case_sensitive: entry.case_sensitive ?? false,
                    name: entry.name || entry.comment,
                    priority: entry.priority ?? 10,
                    id: entry.id ?? index,
                    comment: entry.comment || `Entry ${index + 1}`,
                    selective: entry.selective ?? false,
                    secondary_keys: entry.secondary_keys || [],
                    constant: entry.constant ?? false,
                    position: entry.position || 'before_char',
                })),
            };
        }

        await createCharacter(characterData, true);
        st_echo('success', `Character "${character.name}" created successfully!`);
    } catch (error: any) {
        console.error('Error creating character:', error);
        throw new Error(`Failed to create character: ${error.message || String(error)}`);
    }
}
