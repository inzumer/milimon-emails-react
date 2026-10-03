# AccountDeletedEmail

Sent when someone deletes their account: confirms that no data is left (GDPR). Texts in `src/i18n/account-deleted`.

## Usage

```tsx
import { renderAccountDeleted } from '@inzumer/milimon-emails';

const { subject, html, text } = await renderAccountDeleted({
  lang: 'en',
  siteUrl: 'https://milimon.inzumer.workers.dev',
});
```

## Props

- `lang` — `es` or `en` (the profile language)
- `siteUrl` — the site origin, for links and the logo
