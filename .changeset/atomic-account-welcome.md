---
'@inzumer/milimon-emails': minor
---

Breaking (0.x): the welcome email is now `AccountWelcomeEmail` and `renderAccountWelcome` (was `WelcomeEmail` / `renderWelcome`), with its texts in `src/i18n/account-welcome`. Each email lives in `src/components/pages/<Name>` with its story, README and tests.
