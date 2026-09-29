import { dictionaries } from '@i18n';
import { describe, expect, it } from 'vitest';
import { renderAccountDeleted, renderWelcome, resolveLang } from '../index';

const SITE = 'https://inzumer.github.io/milimon-frontend-web/';

describe('Milimon emails', () => {
  it('should welcome in Spanish with the brand, the saved data and the calculator link', async () => {
    const email = await renderWelcome({ lang: 'es', name: 'Milagros', siteUrl: SITE });
    expect(email.subject).toBe('¡Bienvenida a Milimon!');
    expect(email.html).toContain('lang="es"');
    expect(email.html).toContain('¡Hola, Milagros!');
    expect(email.html).toContain(
      'href="https://inzumer.github.io/milimon-frontend-web/es/calculator"',
    );
    expect(email.html).toContain(
      'src="https://inzumer.github.io/milimon-frontend-web/android-chrome-192x192.png"',
    );
    expect(email.html).toContain('background-color:#F29A3E');
    expect(email.text.toLowerCase()).toContain('qué se guarda en tu cuenta');
  });

  it('should welcome in English', async () => {
    const email = await renderWelcome({ lang: 'en', name: 'Ada', siteUrl: SITE });
    expect(email.subject).toBe('Welcome to Milimon!');
    expect(email.html).toContain('Hi, Ada!');
    expect(email.html).toContain('/en/account');
  });

  it('should confirm a deleted account in both languages', async () => {
    const es = await renderAccountDeleted({ lang: 'es', siteUrl: SITE });
    expect(es.subject).toBe('Tu cuenta de Milimon fue eliminada');
    expect(es.html).toContain('No queda ningún dato tuyo');
    expect(es.html).toContain('href="https://inzumer.github.io/milimon-frontend-web/es"');
    const en = await renderAccountDeleted({ lang: 'en', siteUrl: SITE });
    expect(en.html).toContain('No data of yours is left');
  });

  it('should keep the same keys in Spanish and English in every folder', () => {
    const keys = (value: object): string[] =>
      Object.entries(value).flatMap(([key, child]) =>
        typeof child === 'object' && !Array.isArray(child)
          ? keys(child).map((k) => `${key}.${k}`)
          : [key],
      );
    for (const { es, en } of Object.values(dictionaries)) {
      expect(keys(en)).toEqual(keys(es));
    }
    expect(dictionaries.welcome.en.items).toHaveLength(dictionaries.welcome.es.items.length);
  });

  it('should use the profile language and fall back to Spanish', () => {
    expect(resolveLang('en', 'es')).toBe('en');
    expect(resolveLang(null, 'en')).toBe('en');
    expect(resolveLang(undefined, 'fr')).toBe('es');
    expect(resolveLang()).toBe('es');
  });
});
