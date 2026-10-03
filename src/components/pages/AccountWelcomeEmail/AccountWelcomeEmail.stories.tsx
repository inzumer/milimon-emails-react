import type { Meta, StoryObj } from '@storybook/react-vite';
import { EmailPreview } from '@inzumer/email';
import { AccountWelcomeEmail } from './AccountWelcomeEmail';
import readme from './README.md?raw';

/** Staging, so the logo and the links work. */
const siteUrl = 'https://milimon-staging.inzumer.workers.dev';

const meta = {
  title: 'Pages/AccountWelcomeEmail',
  component: AccountWelcomeEmail,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: readme.replace(/^#[^\n]*\n+/, '') } } },
  args: { lang: 'es', siteUrl, name: 'Milagros' },
  render: (args) => (
    <EmailPreview title="AccountWelcomeEmail" email={<AccountWelcomeEmail {...args} />} />
  ),
} satisfies Meta<typeof AccountWelcomeEmail>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Spanish: Story = {};

export const English: Story = { args: { lang: 'en' } };
