import { Session, CHARACTER_FIELDS, CHARACTER_LABELS } from './generate.js';

const globalContext = SillyTavern.getContext();

export interface ChatMessage {
    role: 'user' | 'assistant';
    content: string;
    timestamp: number;
    fieldsUpdated?: string[];
    isError?: boolean;
}

export interface CharacterData {
    name: string;
    description: string;
    personality: string;
    scenario: string;
    first_mes: string;
    mes_example: string;
    alternate_greetings?: string[];
}

export interface LorebookEntry {
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
}

export interface Lorebook {
    name: string;
    description: string;
    scan_depth: number;
    token_budget: number;
    recursive_scanning: boolean;
    extensions: Record<string, any>;
    entries: any[];
}

const AUTONOMOUS_GENERATION_PROMPT = `You are an expert character creator for roleplay AI. Based on the user's description, create a complete, detailed character card.

{{#if additionalInstructions}}
IMPORTANT RULES & STYLE GUIDELINES (Follow these strictly):
{{additionalInstructions}}
{{/if}}

User's request: {{userPrompt}}

{{#if includeLorebook}}
Also create a lorebook with 5-10 entries covering important aspects of the character's world, including locations, NPCs, historical events, world mechanics, and cultural details.
{{/if}}

Generate a complete character with ALL of the following fields filled in detail:

1. **name** - Character's name (creative and fitting)
2. **description** - Physical appearance and overview (2-3 detailed paragraphs describing their looks, age, build, distinctive features, clothing style, etc.)
3. **personality** - Detailed personality traits, motivations, fears, values, quirks (2-3 paragraphs covering their core traits, how they think, what drives them, their flaws and strengths)
4. **scenario** - The setting and context for interaction (1-2 paragraphs describing where and when the interaction takes place, the relationship with {{user}}, and the current situation)
5. **first_mes** - Opening message from the character (2-4 sentences with action and dialogue that sets the scene and shows personality)
6. **mes_example** - 3-4 example dialogue exchanges showing character's voice and style (use {{user}}: and {{char}}: format, include actions in asterisks)
7. **alternate_greetings** - Array of 3-5 alternative opening messages (each should be a completely different scenario, mood, or context than the first_mes. MUST be a simple array of strings).

IMPORTANT: Do NOT include the primary greeting (first_mes) in the alternate_greetings array. They are separate fields.
  
Example:
"first_mes": "Hello!",
"alternate_greetings": ["Hey there.", "Greetings, traveler.", "What do you want?"]

{{#if includeLorebook}}
8. **lorebook** - Object with entries array, each entry having:
   - keys: array of trigger words (2-5 words)
   - content: detailed information (1-2 paragraphs)
   - comment: entry title/name
   - enabled: true
   - insertion_order: number (0-9)
{{/if}}

CRITICAL: Return ONLY a valid JSON object with these exact field names. No markdown, no explanations, just the JSON.

Example format:
\`\`\`json
{
  "name": "Character Name",
  "description": "Detailed physical description...",
  "personality": "Detailed personality...",
  "scenario": "Setting and context...",
  "first_mes": "Opening message with *actions* and dialogue.",
  "mes_example": "{{user}}: Question?\\n{{char}}: *action* Response.\\n\\n{{user}}: Another question?\\n{{char}}: *action* Another response.",
  "alternate_greetings": [
    "Alternative greeting 1",
    "Alternative greeting 2"
  ]{{#if includeLorebook}},
  "lorebook": {
    "entries": [
      {
        "keys": ["trigger1", "trigger2"],
        "content": "Detailed information...",
        "comment": "Entry Title",
        "enabled": true,
        "insertion_order": 0
      }
    ]
  }{{/if}}
}
\`\`\``;

const CHAT_REFINEMENT_PROMPT = `You are an AI assistant helping to refine a character card. The user wants to make changes to their character.

Current character state:
{{currentCharacterJson}}

{{#if kbContent}}
REFERENCE MATERIALS (Use this information for accuracy):
{{kbContent}}
{{/if}}

{{#if additionalInstructions}}
SPECIAL INSTRUCTIONS & GUIDELINES (Priority: HIGH):
{{additionalInstructions}}
{{/if}}

User's request: {{userMessage}}

Analyze the request and:
1. Determine which fields need to be updated
2. Make the requested changes while maintaining consistency with unchanged fields
3. Respond to the user explaining what you changed

Available fields to update:
- name: Character's name (string)
- description: Physical appearance (string)
- personality: Personality traits (string)
- scenario: Setting/context (string)
- first_mes: First message/greeting (string)
- mes_example: Example dialogue (string)
- alternate_greetings: Alternative opening messages (ARRAY of strings, e.g. ["Greeting 1", "Greeting 2"])

Return a JSON object with:
- "response": Your friendly explanation of what you changed (2-3 sentences)
- "updatedFields": Object with only the fields that changed. 
- "fieldsUpdated": Array of field names that were modified (for UI display)

IMPORTANT: \`alternate_greetings\` is a SEPARATE array. Do NOT put alternative greetings into the \`first_mes\` field. \`first_mes\` is only for the primary greeting. If the user asks for multiple greetings, put the first one in \`first_mes\` and the rest in \`alternate_greetings\`.

Example with alternate greetings:
\`\`\`json
{
  "response": "I've set the primary greeting and added two more unique alternatives in the Alternate Greetings section.",
  "updatedFields": {
    "first_mes": "*Primary greeting content*",
    "alternate_greetings": [
      "*Alternative greeting 1*",
      "*Alternative greeting 2*"
    ]
  },
  "fieldsUpdated": ["first_mes", "alternate_greetings"]
}
\`\`\`

CRITICAL: Return ONLY valid JSON. No markdown code blocks, no explanations outside the JSON.`;


const CLEANER_PROMPT = `You are an expert data cleaner. Your task is to process files scraped from the web and remove all technical noise (navigation, ads, social links, excessive HTML/JSON/Markdown structural overhead).

CLEANING MODE: {{mode}}

{{#if (eq mode "strip")}}
MODE INSTRUCTIONS: 
1. PRESERVE ALL core lore, story, facts, or descriptions.
2. DO NOT summarize or shorten the content. Keep every detail, dialogue, and fact intact.
3. Remove ONLY technical clutter and formatting noise.
{{/if}}

{{#if (eq mode "summary")}}
MODE INSTRUCTIONS: 
1. Extract the core lore and facts.
2. Perform a LIGHT summary: maintain key details and dialogue, but remove repetitive or less important filler text.
3. Ensure the result is readable and concise while still capturing the essence of the lore.
{{/if}}

{{#if (eq mode "heavy_summary")}}
MODE INSTRUCTIONS: 
1. Perform a HEAVY summary. Extract ONLY the most critical facts, lore, and character traits.
2. Be extremely concise. Condense long paragraphs into a few bullet points or short sentences.
3. Remove everything except the absolute essentials needed for world-building or character context.
{{/if}}

GENERAL RULES:
1. Convert everything to clean PLAIN TEXT.
2. Separate each cleaned file with a clear header: [START_FILE: filename] and [END_FILE: filename].

{{#if additionalInstructions}}
SPECIAL USER GUIDELINES (Priority: High):
{{additionalInstructions}}
{{/if}}

Files to process:
{{filesToClean}}

CRITICAL: Return ONLY the cleaned files using the [START_FILE: filename] and [END_FILE: filename] tags. No explanations.`;

export async function cleanFiles({
    files,
    profileId,
    mode = 'strip',
    additionalInstructions,
}: {
    files: { name: string; content: string }[];
    profileId: string;
    mode?: 'strip' | 'summary' | 'heavy_summary';
    additionalInstructions?: string;
}): Promise<{ name: string; content: string }[]> {
    try {
        const Handlebars = await import('handlebars');

        // Register eq helper for mode selection
        if (!Handlebars.helpers['eq']) {
            Handlebars.registerHelper('eq', (a, b) => a === b);
        }

        const template = Handlebars.compile(CLEANER_PROMPT);

        const filesToClean = files.map(f => `--- ORIGINAL FILE: ${f.name} ---\n${f.content}\n--- END ORIGINAL ---`).join('\n\n');
        const fullPrompt = template({ filesToClean, additionalInstructions, mode });

        const response = await globalContext.ConnectionManagerRequestService.sendRequest(
            profileId,
            [{ role: 'user', content: fullPrompt }],
            4096, // High token limit for multiple files
        ) as any;

        if (!response || !response.content) {
            throw new Error('No response from AI');
        }

        const text = response.content.trim();
        const results: { name: string; content: string }[] = [];

        // Match [START_FILE: name] content [END_FILE: name]
        const fileRegex = /\[START_FILE:\s*(.+?)\]([\s\S]*?)\[END_FILE:\s*\1\]/g;
        let match;

        while ((match = fileRegex.exec(text)) !== null) {
            results.push({
                name: match[1].trim(),
                content: match[2].trim()
            });
        }

        if (results.length === 0) {
            // Fallback: if AI didn't use tags correctly but we only sent one file
            if (files.length === 1) {
                return [{ name: files[0].name, content: text }];
            }
            throw new Error('AI failed to return files in the requested format (missing tags).');
        }

        return results;
    } catch (error: any) {
        console.error('Cleaning error:', error);
        throw new Error(`Failed to clean files: ${error.message || String(error)}`);
    }
}

export async function generateFullCharacter(
    prompt: string,
    includeLorebook: boolean,
    profileId: string,
    additionalInstructions?: string,
): Promise<{ character: CharacterData; lorebook?: Lorebook }> {
    try {
        const Handlebars = await import('handlebars');
        const template = Handlebars.compile(AUTONOMOUS_GENERATION_PROMPT);
        const fullPrompt = template({ userPrompt: prompt, includeLorebook, additionalInstructions });

        const response = await globalContext.ConnectionManagerRequestService.sendRequest(
            profileId,
            [{ role: 'user', content: fullPrompt }],
            4096,
        ) as any;

        if (!response || !response.content) {
            throw new Error('No response from AI');
        }

        // Try to extract JSON from response
        let jsonText = response.content.trim();

        // Remove markdown code blocks if present
        const jsonMatch = jsonText.match(/```(?:json)?\s*(\{[\s\S]*\})\s*```/);
        if (jsonMatch) {
            jsonText = jsonMatch[1];
        }

        // Parse the JSON
        const data = JSON.parse(jsonText);

        // Validate required fields
        const requiredFields = ['name', 'description', 'personality', 'scenario', 'first_mes', 'mes_example'];
        for (const field of requiredFields) {
            if (!data[field]) {
                throw new Error(`Missing required field: ${field}`);
            }
        }

        const character: CharacterData = {
            name: data.name,
            description: data.description,
            personality: data.personality,
            scenario: data.scenario,
            first_mes: data.first_mes,
            mes_example: data.mes_example,
            alternate_greetings: data.alternate_greetings || [],
        };

        let lorebook: Lorebook | undefined;
        if (includeLorebook && data.lorebook) {
            lorebook = {
                name: data.lorebook.name || `${character.name} Lorebook`,
                description: data.lorebook.description || '',
                scan_depth: data.lorebook.scan_depth || 4,
                token_budget: data.lorebook.token_budget || 2048,
                recursive_scanning: data.lorebook.recursive_scanning ?? false,
                extensions: data.lorebook.extensions || {},
                entries: data.lorebook.entries || [],
            };
        }

        return { character, lorebook };
    } catch (error: any) {
        console.error('Error generating character:', error);
        throw new Error(`Failed to generate character: ${error.message || String(error)}`);
    }
}

/**
 * Apply generated character data to session
 */
export function applyCharacterToSession(character: CharacterData, session: Session): Session {
    // Deep copy session and its fields to ensure React triggers re-renders
    const newSession = {
        ...session,
        fields: { ...session.fields },
        draftFields: { ...session.draftFields }
    };

    // Update core fields
    CHARACTER_FIELDS.forEach((field) => {
        if (character[field as keyof CharacterData]) {
            newSession.fields[field] = {
                value: String(character[field as keyof CharacterData]),
                prompt: '',
                label: CHARACTER_LABELS[field],
            };
        }
    });

    // Handle alternate greetings
    const greetings = character.alternate_greetings || [];
    // Clear existing alternate greetings
    Object.keys(newSession.fields).forEach((key) => {
        if (key.startsWith('alternate_greetings_')) {
            delete newSession.fields[key];
        }
    });
    // Add new alternate greetings
    greetings.forEach((greeting, index) => {
        const fieldName = `alternate_greetings_${index + 1}`;
        newSession.fields[fieldName] = {
            value: greeting,
            prompt: '',
            label: `Alternate Greeting ${index + 1}`,
        };
    });

    return newSession;
}

/**
 * Send a chat message and get AI response with field updates
 */
export async function sendChatMessage({
    messages,
    session,
    profileId,
    maxResponseToken = 3072, // Increased default
    kbFiles = [],
    additionalInstructions,
}: {
    messages: ChatMessage[];
    session: Session;
    profileId: string;
    maxResponseToken?: number;
    kbFiles?: { name: string; content: string; enabled: boolean }[];
    additionalInstructions?: string;
}): Promise<{ aiMessage: ChatMessage; updatedSession: Session }> {
    try {
        const Handlebars = await import('handlebars');

        // Build KB content
        const activeKbFiles = kbFiles.filter(f => f.enabled);
        let kbContent = '';
        if (activeKbFiles.length > 0) {
            kbContent = activeKbFiles.map(f => `--- FILE: ${f.name} ---\n${f.content}\n--- END FILE ---`).join('\n\n');
        }

        // Build current character JSON
        const currentCharacter: Partial<CharacterData> = {};
        CHARACTER_FIELDS.forEach((field) => {
            if (session.fields[field]?.value) {
                currentCharacter[field as keyof CharacterData] = session.fields[field].value as any;
            }
        });

        // Get alternate greetings
        const altGreetings: string[] = [];
        Object.keys(session.fields)
            .filter((k) => k.startsWith('alternate_greetings_'))
            .sort((a, b) => parseInt(a.split('_')[2]) - parseInt(b.split('_')[2]))
            .forEach((k) => {
                if (session.fields[k].value) {
                    altGreetings.push(session.fields[k].value);
                }
            });
        // Always include alternate_greetings (even if empty) so AI knows about this field
        currentCharacter.alternate_greetings = altGreetings;

        const template = Handlebars.compile(CHAT_REFINEMENT_PROMPT);
        const userMessage = messages[messages.length - 1].content;
        const fullPrompt = template({
            currentCharacterJson: JSON.stringify(currentCharacter, null, 2),
            userMessage,
            kbContent,
            additionalInstructions,
        });

        const response = await globalContext.ConnectionManagerRequestService.sendRequest(
            profileId,
            [{ role: 'user', content: fullPrompt }],
            maxResponseToken,
        ) as any;

        if (!response || !response.content) {
            throw new Error('No response from AI');
        }

        // Try to extract JSON from response
        let jsonText = response.content.trim();

        // More robust JSON extraction
        // 1. Try to find code block (lazy match), optionally with closing backticks
        const codeBlockMatch = jsonText.match(/```(?:json)?\s*(\{[\s\S]*?)(?:```|$)/i);
        if (codeBlockMatch) {
            jsonText = codeBlockMatch[1];
        } else {
            // 2. Fallback: find first { and last }
            const firstBrace = jsonText.indexOf('{');
            const lastBrace = jsonText.lastIndexOf('}');
            if (firstBrace !== -1 && lastBrace !== -1 && lastBrace >= firstBrace) {
                jsonText = jsonText.substring(firstBrace, lastBrace + 1);
            }
        }

        let data;
        try {
            data = JSON.parse(jsonText);
        } catch (e) {
            // JSON parsing failed - graceful fallback
            // Return the raw response as a message without field updates
            console.warn('JSON parse failed, returning raw response as fallback:', e);

            // Try to extract any readable text from the response
            let fallbackMessage = response.content.trim();

            // If it looks like it was trying to be JSON, explain the issue
            if (fallbackMessage.includes('{') || fallbackMessage.includes('```')) {
                fallbackMessage = `⚠️ I tried to process your request but my response was too long and got cut off. Here's what I generated:\n\n${fallbackMessage}\n\n💡 **Tip**: Try increasing "Max Response Tokens" in Generation Options (currently set too low).`;
            }

            const fallbackAiMessage: ChatMessage = {
                role: 'assistant',
                content: fallbackMessage,
                timestamp: Date.now(),
                fieldsUpdated: [],
            };

            // Return original session unchanged
            return { aiMessage: fallbackAiMessage, updatedSession: session };
        }

        // Apply updates to session
        // Deep copy the fields object to ensure React triggers a re-render of components 
        // that depend on the session.fields reference (like useMemo in MainPopup)
        let updatedSession = {
            ...session,
            fields: { ...session.fields },
            draftFields: { ...session.draftFields }
        };

        if (data.updatedFields) {
            Object.keys(data.updatedFields).forEach((field) => {
                if (field === 'alternate_greetings') {
                    // Clear existing alternate greetings from the NEW fields object
                    Object.keys(updatedSession.fields).forEach((key) => {
                        if (key.startsWith('alternate_greetings_')) {
                            delete updatedSession.fields[key];
                        }
                    });
                    // Add new alternate greetings
                    const greetings = data.updatedFields[field];
                    if (Array.isArray(greetings)) {
                        greetings.forEach((greeting, index) => {
                            const fieldName = `alternate_greetings_${index + 1}`;
                            updatedSession.fields[fieldName] = {
                                value: String(greeting),
                                prompt: '',
                                label: `Alternate Greeting ${index + 1}`,
                            };
                        });
                    }
                } else if (CHARACTER_FIELDS.includes(field as any) || updatedSession.draftFields[field]) {
                    // Update core fields or draft fields
                    if (CHARACTER_FIELDS.includes(field as any)) {
                        updatedSession.fields[field] = {
                            value: String(data.updatedFields[field]),
                            prompt: '',
                            label: CHARACTER_LABELS[field as keyof typeof CHARACTER_LABELS],
                        };
                    } else if (updatedSession.draftFields[field]) {
                        updatedSession.draftFields[field] = {
                            ...updatedSession.draftFields[field],
                            value: String(data.updatedFields[field]),
                        };
                    }
                }
            });
        }

        const aiMessage: ChatMessage = {
            role: 'assistant',
            content: data.response || "I've updated the character as requested.",
            timestamp: Date.now(),
            fieldsUpdated: data.fieldsUpdated || [],
        };

        return { aiMessage, updatedSession };
    } catch (error: any) {
        console.error('Error in chat message:', error);
        throw new Error(`Chat error: ${error.message || String(error)}`);
    }
}
