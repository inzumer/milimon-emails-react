export const LANGS = ['es', 'en'] as const;

export type Lang = (typeof LANGS)[number];

export const DEFAULT_LANG: Lang = 'es';

const isLang = (value: unknown): value is Lang => LANGS.includes(value as Lang);

/** First supported language among the candidates (profile first), else Spanish. */
export const resolveLang = (...candidates: unknown[]): Lang =>
  candidates.find(isLang) ?? DEFAULT_LANG;
