# SillyTavern Character Creator (Enhanced Fork)

> ⚠️ **This is a fork** of the original [SillyTavern-Character-Creator](https://github.com/bmen25124/SillyTavern-Character-Creator) by [bmen25124](https://github.com/bmen25124).

## What's New in This Fork

### ✨ Unified Interface
- **Two-column layout**: Character fields on the left, AI Chat Assistant on the right
- **Real-time AI collaboration**: Chat with AI to refine your character while editing
- **No more mode switching**: Manual and Autonomous modes merged into one seamless experience

### 🤖 AI Chat Assistant
- Interactive chat interface for character refinement
- Supports all character fields including **alternate greetings**
- Graceful error handling with helpful suggestions
- Works with your existing connection profiles

### 📤 Enhanced Export
- Export Character Card V3 JSON
- Export Lorebook JSON (separate file)
- Create/Update characters directly in SillyTavern

### 🛠️ Technical Improvements
- Better JSON parsing with fallback responses
- Configurable Max Response Tokens
- Improved prompt engineering for accurate field updates

---

## Overview

A [SillyTavern](https://docs.sillytavern.app/) extension that helps you create character cards based on your ST data with LLMs using [connection profiles](https://docs.sillytavern.app/usage/core-concepts/connection-profiles/).

![popup](images/popup.png)

---

![settings](images/settings.png)

---

**If you are using a _Text Completion_ profile, make sure your profile contains API, preset, model, and instruct.**

**If you are using a _Chat Completion_ profile; API, settings, model would be enough.**

---

## Installation

Install via the SillyTavern extension installer:

```txt
https://github.com/YOUR_USERNAME/SillyTavern-Character-Creator
```

To open the CREC popup, click the extension icon:

![icon](images/icon.png)

## Demo Video

**Simple usage**

https://github.com/user-attachments/assets/4ed6fbb3-c2a4-4cdc-8692-406af9094266

**Chat with LLM**

https://github.com/user-attachments/assets/d8db5d82-fa8e-4332-97e6-43f8529b7f60

## FAQ

>Can I use this with my local 8B/12B RP model?

Most likely, yes. If you can't, try changing _Output Format_.

>Can you suggest a model?

Gemini models are cheap, fast, and efficient. I usually use Gemini Flash 2.0. But most models should work fine.

>What is the difference compared to alternatives?

In general, alternatives are just websites. This means you can't feed the AI with your ST character/lorebook data. They mostly use a single model. Their customization is limited.

>What is the difference compared to [chargen](https://chargen.kubes-lab.com/)?

The one thing chargen might be better is it can give better results because it uses [chargen-v2](https://huggingface.co/kubernetes-bad/chargen-v2) model that trained from character cards.  But since CROC is customizable, you can even use _chargen-v2_ on your local.

>What is the difference compared to [pookies](https://pookies.ai/create)?

There are 2 advantages of pookie. 1. You can give a fandom website so it can analyze it. 2. It has detailed fields like _age, gender, running outfit_. Currently, I'm not planning to implement detailed fields because their quality differs from LLM to LLM.

## Credits

- **Original Author**: [bmen25124](https://github.com/bmen25124)
- **Original Repository**: [SillyTavern-Character-Creator](https://github.com/bmen25124/SillyTavern-Character-Creator)
- **Fork Modifications**: Enhanced UI, AI Chat Assistant, improved exports
