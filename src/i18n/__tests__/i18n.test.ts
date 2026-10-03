import { describe, expect, it } from 'vitest';
import { resolveLang } from '../lang';
import { dictionaries } from '../translations';

const keys = (value: object): string[] =>
  Object.entries(value).flatMap(([key, child]) =>
    typeof child === 'object' && !Array.isArray(child)
      ? keys(child).map((k) => `${key}.${k}`)
      : [key],
  );

describe('i18n', () => {
  it('should keep the same keys in Spanish and English in every folder', () => {
    for (const { es, en } of Object.values(dictionaries)) {
      expect(keys(en)).toEqual(keys(es));
    }

    expect(dictionaries['account-welcome'].en.items).toHaveLength(
      dictionaries['account-welcome'].es.items.length,
    );
  });

  it('should use the profile language and fall back to Spanish', () => {
    expect(resolveLang('en', 'es')).toBe('en');
    expect(resolveLang(null, 'en')).toBe('en');
    expect(resolveLang(undefined, 'fr')).toBe('es');
    expect(resolveLang()).toBe('es');
  });
});
