import accountDeletedEn from './account-deleted/en.json';
import accountDeletedEs from './account-deleted/es.json';
import accountWelcomeEn from './account-welcome/en.json';
import accountWelcomeEs from './account-welcome/es.json';
import commonEn from './common/en.json';
import commonEs from './common/es.json';
import type { Lang } from './lang';

/** `src/i18n/<folder>/{es,en}.json`; Spanish is the source and English must match its shape. */
export const dictionaries = {
  'account-deleted': {
    es: accountDeletedEs,
    en: accountDeletedEn satisfies typeof accountDeletedEs,
  },
  'account-welcome': {
    es: accountWelcomeEs,
    en: accountWelcomeEn satisfies typeof accountWelcomeEs,
  },
  common: { es: commonEs, en: commonEn satisfies typeof commonEs },
} as const;

export type Namespace = keyof typeof dictionaries;

export type Translations<N extends Namespace> = (typeof dictionaries)[N]['es'];

export const getTranslations = <N extends Namespace>(lang: Lang, namespace: N): Translations<N> =>
  dictionaries[namespace][lang];
