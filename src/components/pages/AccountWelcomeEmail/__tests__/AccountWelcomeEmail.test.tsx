import { describe, expect, it } from 'vitest';
import { renderEmail } from '@inzumer/email';
import { AccountWelcomeEmail } from '../AccountWelcomeEmail';

const SITE = 'https://milimon.inzumer.workers.dev/';

describe('AccountWelcomeEmail', () => {
  it('should greet in Spanish with the logo, the saved data and the calculator link', async () => {
    const { html, text } = await renderEmail(
      <AccountWelcomeEmail lang="es" name="Milagros" siteUrl={SITE} />,
    );

    expect(html).toContain('lang="es"');
    expect(html).toContain('¡Hola, Milagros!');
    expect(html).toContain('href="https://milimon.inzumer.workers.dev/es/calculator"');
    expect(html).toContain('src="https://milimon.inzumer.workers.dev/android-chrome-192x192.png"');
    expect(html).toContain('background-color:#F29A3E');
    expect(text.toLowerCase()).toContain('qué se guarda en tu cuenta');
  });

  it('should greet in English with links in English', async () => {
    const { html } = await renderEmail(<AccountWelcomeEmail lang="en" name="Ada" siteUrl={SITE} />);

    expect(html).toContain('Hi, Ada!');
    expect(html).toContain('/en/account');
  });
});
