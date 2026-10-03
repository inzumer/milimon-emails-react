# AccountWelcomeEmail

Sent when an account is created (first sign-in): greets by name, lists what the account saves and links to the calculator. Texts in `src/i18n/account-welcome`.

## Usage

```tsx
import { renderAccountWelcome } from '@inzumer/milimon-emails';

const { subject, html, text } = await renderAccountWelcome({
  lang: 'es',
  name: 'Milagros',
  siteUrl: 'https://milimon.inzumer.workers.dev',
});
```

## Props

- `lang` — `es` or `en` (the profile language)
- `name` — first name, or the whole name when there is none
- `siteUrl` — the site origin, for links and the logo
