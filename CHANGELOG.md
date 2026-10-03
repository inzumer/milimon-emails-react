# @inzumer/milimon-emails

## 0.2.0

### Minor Changes

- 710f967: Breaking (0.x): the welcome email is now `AccountWelcomeEmail` and `renderAccountWelcome` (was `WelcomeEmail` / `renderWelcome`), with its texts in `src/i18n/account-welcome`. Each email lives in `src/components/pages/<Name>` with its story, README and tests.

### Patch Changes

- fbd0816: Uses `@inzumer/email` 0.2.0. The emails are previewed in Storybook (published to GitHub Pages) instead of the React Email dev server.

## 0.1.0

### Minor Changes

- f816ea4: Welcome and account-deleted emails in Spanish and English, with the copy in `src/i18n/<folder>/{es,en}.json` and `resolveLang` to send them in the profile language.
