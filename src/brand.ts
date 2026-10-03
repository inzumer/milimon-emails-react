import type { Lang } from '@i18n';
import { createEmailTheme } from '@inzumer/email';

/** Milimon's colors: cream background, chocolate text and the orange brand color. */
export const milimonTheme = createEmailTheme({
  colors: {
    background: '#FDF7F1',
    surface: '#FFFFFF',
    text: '#2F201B',
    textSecondary: '#5B4A42',
    border: '#EADFD6',
    link: '#9A4F24',
    primary: '#F29A3E',
    primaryText: '#2F201B',
  },
  fonts: { heading: 'Georgia, "Times New Roman", serif' },
  radius: '12px',
});

/** Site links in the email's language; `siteUrl` without the trailing slash. */
export const siteLinks = (siteUrl: string, lang: Lang) => {
  const base = siteUrl.replace(/\/+$/, '');

  return {
    home: `${base}/${lang}`,
    calculator: `${base}/${lang}/calculator`,
    blog: `${base}/${lang}/blog`,
    account: `${base}/${lang}/account`,
    privacy: `${base}/${lang}/privacy`,
    logo: `${base}/android-chrome-192x192.png`,
  };
};
