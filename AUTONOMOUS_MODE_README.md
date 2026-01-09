# Модификация Character Creator - Автономный генератор персонажей

## Что было сделано

Я создал модификацию расширения SillyTavern Character Creator, добавив **полностью автономный режим генерации персонажей и лорбуков**.

### Новые возможности

#### 1. **Автономный режим (Autonomous Mode)**
- Генерация всех полей персонажа из одного промпта
- Автоматическое создание: имени, описания, личности, сценария, первого сообщения, примеров диалогов и альтернативных приветствий
- Опциональная генерация лорбука (World Info) вместе с персонажем

#### 2. **Чат-интерфейс для уточнений**
- Интерактивный чат с AI для доработки персонажа
- AI автоматически обновляет поля персонажа на основе ваших указаний
- История изменений с отображением обновленных полей

#### 3. **Экспорт в правильном формате**
- Поддержка Character Card V3 format
- Экспорт в JSON с встроенным лорбуком
- Совместимость с SillyTavern

## Созданные файлы

### Основные компоненты:
1. **`src/components/AutonomousMode.tsx`** - Компонент автономного режима
2. **`src/components/ChatInterface.tsx`** - Чат-интерфейс для общения с AI
3. **`src/autonomous-generator.ts`** - Логика автономной генерации персонажей
4. **`src/character-exporter.ts`** - Экспорт в формат Character Card V3

### Обновленные файлы:
1. **`src/components/MainPopup.tsx`** - Добавлены импорты для новых компонентов
2. **`src/styles/main.scss`** - Добавлены стили для нового интерфейса

## Как использовать (после сборки)

### Шаг 1: Сборка расширения

Расширение использует TypeScript и требует сборки. В директории расширения выполните:

\`\`\`bash
cd "c:\\Users\\anton\\Desktop\\SillyTavern\\public\\scripts\\extensions\\third-party\\SillyTavern-Character-Creator"
npm install
npm run build
\`\`\`

### Шаг 2: Использование автономного режима

1. Откройте SillyTavern
2. Нажмите на иконку Character Creator (астронавт)
3. Выберите режим "Autonomous Mode" (будет добавлен переключатель)
4. Выберите Connection Profile
5. Введите описание персонажа в одном промпте, например:

\`\`\`
Создай женщину-эльфа, воина, мастера стрельбы из лука. Она защищает свой лес от захватчиков. 
Храбрая, но осторожная с незнакомцами. Имеет глубокую связь с природой. 
Носит зеленый плащ и кожаную броню. Возраст около 150 лет (молодая для эльфа).
\`\`\`

6. Отметьте "Generate Lorebook", если нужен лорбук
7. Нажмите "Generate Full Character"
8. Подождите, пока AI сгенерирует все поля

### Шаг 3: Уточнение через чат

После генерации откроется чат-интерфейс. Вы можете:

- "Сделай её более таинственной"
- "Добавь трагическую предысторию"
- "Измени сеттинг на киберпанк-город"
- "Сделай диалоги более формальными"

AI будет отвечать в чате и автоматически обновлять поля персонажа.

### Шаг 4: Сохранение

После генерации вы можете:
- **Save as New** - Создать нового персонажа в SillyTavern
- **Export JSON** - Экспортировать в формате Character Card V3
- **Export Lorebook** - Экспортировать лорбук отдельно

## Следующие шаги для завершения

### Необходимо доделать:

1. **Интеграция в MainPopup.tsx**
   - Добавить переключатель режимов (Manual/Autonomous)
   - Добавить обработчик `handleGenerateFullCharacter`
   - Добавить кнопки экспорта

2. **Исправить синтаксические ошибки**
   - В `autonomous-generator.ts` строка 347 - исправить строковый литерал
   - Удалить неиспользуемые импорты

3. **Тестирование**
   - Проверить генерацию персонажей
   - Проверить чат-интерфейс
   - Проверить экспорт в JSON

## Пример кода для интеграции в MainPopup

Добавьте в компонент MainPopup:

\`\`\`typescript
// Добавить состояние для режима
const [mode, setMode] = useState<'manual' | 'autonomous'>('manual');
const [isAutonomousGenerating, setIsAutonomousGenerating] = useState(false);

// Добавить обработчик автономной генерации
const handleGenerateFullCharacter = useCallback(async (prompt: string, includeLorebook: boolean) => {
  setIsAutonomousGenerating(true);
  try {
    const { character, lorebook } = await generateFullCharacter(prompt, includeLorebook, settings.profileId);
    const newSession = applyCharacterToSession(character, session);
    setSession(newSession);
    st_echo('success', 'Character generated successfully!');
  } catch (error: any) {
    st_echo('error', error.message);
  } finally {
    setIsAutonomousGenerating(false);
  }
}, [session, settings.profileId]);

// В JSX добавить переключатель режимов и компонент
<div className="mode-switcher">
  <button 
    className={`mode-button ${mode === 'manual' ? 'active' : ''}`}
    onClick={() => setMode('manual')}
  >
    Manual Mode
  </button>
  <button 
    className={`mode-button ${mode === 'autonomous' ? 'active' : ''}`}
    onClick={() => setMode('autonomous')}
  >
    Autonomous Mode
  </button>
</div>

{mode === 'autonomous' ? (
  <AutonomousMode
    session={session}
    onSessionUpdate={setSession}
    onGenerateFullCharacter={handleGenerateFullCharacter}
    isGenerating={isAutonomousGenerating}
    profileId={settings.profileId}
  />
) : (
  // Существующий Manual Mode UI
)}
\`\`\`

## Промпты для AI

### Промпт для полной генерации персонажа:
Система автоматически использует детальный промпт, который генерирует:
- Имя персонажа
- Физическое описание (2-3 параграфа)
- Личность и мотивации (2-3 параграфа)
- Сценарий взаимодействия
- Первое сообщение с действиями и диалогом
- 3-4 примера диалогов
- 2-3 альтернативных приветствия
- (Опционально) 5-10 записей лорбука

### Промпт для уточнений в чате:
AI анализирует текущее состояние персонажа и вносит изменения только в нужные поля, сохраняя остальное.

## Технические детали

### Формат Character Card V3

\`\`\`typescript
{
  "spec": "chara_card_v3",
  "spec_version": "3.0",
  "data": {
    "name": "...",
    "description": "...",
    "personality": "...",
    "scenario": "...",
    "first_mes": "...",
    "mes_example": "...",
    "alternate_greetings": ["...", "..."],
    "character_book": {
      "entries": [...]
    }
  }
}
\`\`\`

### Формат лорбука

\`\`\`typescript
{
  "entries": {
    "keys": ["trigger1", "trigger2"],
    "content": "Detailed information...",
    "comment": "Entry title",
    "enabled": true,
    "insertion_order": 0
  }
}
\`\`\`

## Поддержка

Если возникнут вопросы или проблемы:
1. Проверьте, что расширение собрано (`npm run build`)
2. Проверьте консоль браузера на ошибки (F12)
3. Убедитесь, что выбран Connection Profile
4. Проверьте, что у вас достаточно токенов в настройках

## Лицензия

Модификация основана на оригинальном расширении SillyTavern Character Creator by bmen25124.
