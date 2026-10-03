import { describe, expect, it } from 'vitest';
import { renderAccountDeleted, renderAccountWelcome } from '../render';

const SITE = 'https://milimon.inzumer.workers.dev/';

describe('render', () => {
  it('should add the subject in the email language', async () => {
    const welcome = await renderAccountWelcome({ lang: 'es', name: 'Milagros', siteUrl: SITE });
    const deleted = await renderAccountDeleted({ lang: 'es', siteUrl: SITE });

    expect(welcome.subject).toBe('¡Bienvenida a Milimon!');
    expect(welcome.html).toContain('¡Hola, Milagros!');
    expect(welcome.text).not.toContain('<');
    expect(deleted.subject).toBe('Tu cuenta de Milimon fue eliminada');
  });

  it('should translate the subject to English', async () => {
    const welcome = await renderAccountWelcome({ lang: 'en', name: 'Ada', siteUrl: SITE });

    expect(welcome.subject).toBe('Welcome to Milimon!');
  });
});
