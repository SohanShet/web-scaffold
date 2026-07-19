---
name: outsource-codegen
description: Generates a tight outsource prompt for code chunks that should be built by an external AI platform (e.g. Claude.ai) instead of inline. Use when a self-contained file is large enough to strain IDE token limits, has a clear input/output contract, and needs minimal codebase context to build. Do not use for small helpers, multi-file logic, or anything tightly coupled to surrounding code.
---

# Outsource Code Generation

When working in a token-limited AI IDE, some code chunks are better generated outside and pasted back in. This skill decides **when** to outsource and **how** to write the prompt for it.

---

## When to Outsource

All 4 conditions must be true. If any fails, generate the code inline instead.

1. **Large output** — Would produce >80–100 lines. Small? Do it inline.
2. **Single file** — Lives entirely in one file. Multi-file = don't outsource.
3. **Clear contract** — Props, args, return shape, or API can be described in a few sentences.
4. **Low codebase context** — External AI doesn't need to read other files to get it right.

If only 3 of 4 are true, lean toward inline.

---

## Frequency Rule

**One outsource prompt per response, maximum.** If multiple chunks qualify, pick the largest one and handle the rest inline or flag for a follow-up. Users paste these manually — don't make them do it multiple times per response.

---

## What to Include in the Prompt

Keep prompts under ~200 words. Include only what's needed to produce the file.

**Always include:**
- What to build (one sentence)
- File path
- Contract — props / args / return / export shape

**Include only when relevant:**
- **Existing building blocks** — only components/utils the outsourced file will actually use. Include relative path and a one-liner if the name isn't self-explanatory.
- **Styling context** — UI files only. Mention: color tokens, border-radius style, spacing feel, component library.
- **Data schema** — data/config files only. Provide shape and ask for dummy data.

**Never include:**
- Full dumps of existing files
- Business logic explanations the AI doesn't need
- Anything unrelated to producing that one file

---

## Prompt Template

```
Build: [one-line description]
File: [relative/path/to/file]

Contract:
[props / args / exports — types or plain English]

Building blocks available:
- [Name] ([path]) — [what it does, if not obvious]

[UI only:]
Theme: [primary color, bg, radius style, component library]

[Data files only:]
Schema: [shape or fields]
→ Populate with realistic dummy data.

Output: file only, no explanation.
```

---

## Examples

### UI Screen

```
Build: Settings screen with profile edit and notification toggles
File: src/screens/SettingsScreen.tsx

Contract:
Props: { user: User, onSave: (updated: User) => void }
User: { name: string, email: string, avatarUrl: string, notificationsEnabled: boolean }

Building blocks available:
- Button (src/components/Button.tsx) — primary CTA, supports variant="outline"
- Avatar (src/components/Avatar.tsx) — circular image with fallback initials
- Toggle (src/components/Toggle.tsx) — controlled boolean toggle

Theme: primary #6C63FF, bg #F9F9F9, rounded-2xl cards, Tailwind CSS

Output: file only, no explanation.
```

### Data / Config File

```
Build: Seed data for onboarding flow
File: src/data/onboardingSteps.ts

Schema:
[{ id: string, title: string, description: string, icon: string, completed: boolean }]

→ 5 realistic onboarding steps. Export as default array.

Output: file only, no explanation.
```

---

## Checklist Before Writing the Prompt

- [ ] All 4 outsource conditions met?
- [ ] Contract clearly defined?
- [ ] Only building blocks the file actually uses are listed?
- [ ] Styling added only for UI? Schema added only for data files?
- [ ] Prompt under ~200 words?
- [ ] Only one outsource prompt in this response?
