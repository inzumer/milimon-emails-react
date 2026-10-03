import { describe, expect, it } from 'vitest';
import { renderEmail } from '@inzumer/email';
import { AccountDeletedEmail } from '../AccountDeletedEmail';

const SITE = 'https://milimon.inzumer.workers.dev/';

describe('AccountDeletedEmail', () => {
  it('should confirm the deletion in both languages with a link home', async () => {
    const es = await renderEmail(<AccountDeletedEmail lang="es" siteUrl={SITE} />);
    const en = await renderEmail(<AccountDeletedEmail lang="en" siteUrl={SITE} />);

    expect(es.html).toContain('No queda ningún dato tuyo');
    expect(es.html).toContain('href="https://milimon.inzumer.workers.dev/es"');
    expect(en.html).toContain('No data of yours is left');
  });
});
