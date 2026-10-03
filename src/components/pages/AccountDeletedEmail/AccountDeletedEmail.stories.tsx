import type { Meta, StoryObj } from '@storybook/react-vite';
import { EmailPreview } from '@inzumer/email';
import { AccountDeletedEmail } from './AccountDeletedEmail';
import readme from './README.md?raw';

/** Staging, so the logo and the links work. */
const siteUrl = 'https://milimon-staging.inzumer.workers.dev';

const meta = {
  title: 'Pages/AccountDeletedEmail',
  component: AccountDeletedEmail,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: readme.replace(/^#[^\n]*\n+/, '') } } },
  args: { lang: 'es', siteUrl },
  render: (args) => (
    <EmailPreview title="AccountDeletedEmail" email={<AccountDeletedEmail {...args} />} />
  ),
} satisfies Meta<typeof AccountDeletedEmail>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Spanish: Story = {};

export const English: Story = { args: { lang: 'en' } };
