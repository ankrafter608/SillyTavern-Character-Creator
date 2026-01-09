# План модификации Character Creator - Автономный генератор

## Цель
Создать полностью автономный генератор персонажей и лорбуков, где пользователь вводит один промпт и получает готовый JSON файл.

## Основные изменения

### 1. Новый режим "Autonomous Mode" (Автономный режим)
- Добавить переключатель между "Manual Mode" (текущий) и "Autonomous Mode" (новый)
- В автономном режиме:
  - Одно поле для ввода промпта описания персонажа
  - Кнопка "Generate Full Character" - генерирует ВСЕ поля сразу
  - Кнопка "Generate with Lorebook" - генерирует персонажа + лорбук

### 2. Чат-интерфейс для уточнений
- Добавить чат-панель справа от полей персонажа
- AI отвечает в чате, объясняя что сделал
- AI автоматически обновляет поля персонажа на основе диалога
- История чата сохраняется в сессии

### 3. Генерация полного персонажа одним запросом
- Создать новый промпт-шаблон для генерации всех полей сразу
- AI должен вернуть JSON со всеми полями:
  ```json
  {
    "name": "...",
    "description": "...",
    "personality": "...",
    "scenario": "...",
    "first_mes": "...",
    "mes_example": "...",
    "alternate_greetings": ["...", "..."]
  }
  ```

### 4. Генерация лорбука
- Добавить опцию генерации World Info вместе с персонажем
- Формат лорбука:
  ```json
  {
    "entries": {
      "0": {
        "key": ["trigger1", "trigger2"],
        "content": "...",
        "comment": "Entry title",
        "enabled": true,
        "position": 0
      }
    }
  }
  ```

### 5. Экспорт в правильный формат SillyTavern
- Character Card V3 format
- Встроенный лорбук в character JSON
- Экспорт в PNG с метаданными (chara format)

## Структура файлов для модификации

### Новые файлы:
1. `src/components/AutonomousMode.tsx` - Компонент автономного режима
2. `src/components/ChatInterface.tsx` - Чат-интерфейс
3. `src/autonomous-generator.ts` - Логика автономной генерации
4. `src/lorebook-generator.ts` - Генератор лорбуков
5. `src/character-exporter.ts` - Экспорт в правильный формат

### Модифицируемые файлы:
1. `src/components/MainPopup.tsx` - Добавить переключатель режимов
2. `src/constants.ts` - Добавить промпты для автономной генерации
3. `src/generate.ts` - Расширить для генерации всех полей сразу

## Промпты для автономной генерации

### Промпт для генерации полного персонажа:
```
You are an expert character creator for roleplay AI. Based on the user's description, create a complete character card with ALL fields filled in.

User's request: {{userPrompt}}

Generate a complete character with the following fields:
1. name - Character's name
2. description - Physical appearance and overview (2-3 paragraphs)
3. personality - Detailed personality traits, motivations, fears (2-3 paragraphs)
4. scenario - The setting and context for interaction
5. first_mes - Opening message from the character
6. mes_example - 3-4 example dialogue exchanges showing character's voice
7. alternate_greetings - 2-3 alternative opening messages

Return ONLY a valid JSON object with these fields. No explanations.
```

### Промпт для генерации лорбука:
```
Based on the character and world, create a lorebook with 5-10 entries covering:
- Important locations
- Key NPCs
- Historical events
- World mechanics
- Cultural details

Each entry should have:
- key: array of trigger words
- content: detailed information (1-2 paragraphs)
- comment: entry title
```

## Этапы реализации

1. ✅ Изучить текущую структуру расширения
2. ⬜ Создать компонент AutonomousMode
3. ⬜ Создать ChatInterface
4. ⬜ Реализовать autonomous-generator.ts
5. ⬜ Реализовать lorebook-generator.ts
6. ⬜ Реализовать character-exporter.ts
7. ⬜ Интегрировать в MainPopup
8. ⬜ Тестирование
9. ⬜ Документация

## Формат Character Card V3

```typescript
interface CharacterCardV3 {
  spec: "chara_card_v3";
  spec_version: "3.0";
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
        position?: "before_char" | "after_char";
      }>;
    };
    tags: string[];
    creator: string;
    character_version: string;
    extensions: Record<string, any>;
  };
}
```
