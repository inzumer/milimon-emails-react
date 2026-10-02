# @inzumer/milimon-emails

Milimon transactional emails (welcome, account deleted) built on [`@inzumer/email`](https://github.com/inzumer/inzumer-email), in Spanish and English.

## Usage (API)

```ts
import { renderWelcome, resolveLang } from '@inzumer/milimon-emails';

// Always the language of the user's profile; the sign-in page language only when the profile has none.
const lang = resolveLang(user.locale, signInLocale);
const { subject, html, text } = await renderWelcome({ lang, name, siteUrl });
```

`resolveLang` returns the first supported language (`es`, `en`) and falls back to `es`.

## Translations

Same structure as `milimon-frontend-web`: one kebab-case folder per namespace, one file per language.

```
src/i18n/
  common/{es,en}.json            # signature, shared links
  welcome/{es,en}.json
  account-deleted/{es,en}.json
```

Spanish is the source; `en.json` must have exactly the same keys (checked by types and tests). Templates read them with `getTranslations(lang, namespace)` from `@i18n`.

## Scripts

| Command              | What it does                                                                      |
| -------------------- | --------------------------------------------------------------------------------- |
| `pnpm storybook`     | Storybook with every email as sent, in Spanish and English: http://localhost:6006 |
| `pnpm test:coverage` | Vitest with the 90% gate                                                          |
| `pnpm build`         | Bundle to `dist/` with tsup                                                       |
| `pnpm changeset`     | Describe a change for the next release                                            |
