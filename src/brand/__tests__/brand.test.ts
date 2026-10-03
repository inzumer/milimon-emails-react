import { describe, expect, it } from 'vitest';
import { milimonTheme, siteLinks } from '../brand';

describe('brand', () => {
  it('should build the site links in the email language, without a double slash', () => {
    const links = siteLinks('https://milimon.inzumer.workers.dev/', 'en');

    expect(links.home).toBe('https://milimon.inzumer.workers.dev/en');
    expect(links.account).toBe('https://milimon.inzumer.workers.dev/en/account');
    expect(links.logo).toBe('https://milimon.inzumer.workers.dev/android-chrome-192x192.png');
  });

  it('should use the Milimon orange as the primary color', () => {
    expect(milimonTheme.colors.primary).toBe('#F29A3E');
  });
});
