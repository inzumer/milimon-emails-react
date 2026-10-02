import type { Lang } from '@i18n';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { EmailPreview } from '@inzumer/email';
import { AccountDeletedEmail } from './account-deleted';
import { WelcomeEmail } from './welcome';

/** Staging, so the logo and the links work. */
const siteUrl = 'https://milimon-staging.inzumer.workers.dev';

const meta: Meta = { title: 'Mails' };

export default meta;

const welcome = (lang: Lang): StoryObj => ({
  render: () => (
    <EmailPreview
      title="Bienvenida"
      email={<WelcomeEmail lang={lang} name="Milagros" siteUrl={siteUrl} />}
    />
  ),
});

const accountDeleted = (lang: Lang): StoryObj => ({
  render: () => (
    <EmailPreview
      title="Cuenta borrada"
      email={<AccountDeletedEmail lang={lang} siteUrl={siteUrl} />}
    />
  ),
});

export const BienvenidaEs: StoryObj = welcome('es');
export const BienvenidaEn: StoryObj = welcome('en');
export const CuentaBorradaEs: StoryObj = accountDeleted('es');
export const CuentaBorradaEn: StoryObj = accountDeleted('en');
