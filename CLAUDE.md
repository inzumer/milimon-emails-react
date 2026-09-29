# CLAUDE.md

Milimon transactional email templates (`@inzumer/milimon-emails`), rendered by the API (`milimon-backend-nest`).

- Emails go out in the **language of the user's profile** (`resolveLang(profile.locale, fallback)`), never a hard-coded one.
- Copy lives in `src/i18n/<kebab-folder>/{es,en}.json` like milimon-frontend-web; `es` and `en` have the same keys. No text inside templates.
- Components come from `@inzumer/email`; brand colors and links in `src/brand.ts`.
- Arrow functions, short comments (1–2 lines), test titles start with `should …`, Conventional Commits.
- Examples and wording are our own (never copied from the course material).
