import { AccountDeletedEmail, AccountWelcomeEmail } from '@/components';
import type { AccountDeletedEmailProps, AccountWelcomeEmailProps } from '@/components';
import { getTranslations } from '@i18n';
import { renderEmail, type RenderedEmail } from '@inzumer/email';

/** A ready-to-send email: subject, HTML and plain text. */
export type MilimonEmail = RenderedEmail & { subject: string };

export const renderAccountWelcome = async (
  props: AccountWelcomeEmailProps,
): Promise<MilimonEmail> => ({
  subject: getTranslations(props.lang, 'account-welcome').subject,
  ...(await renderEmail(<AccountWelcomeEmail {...props} />)),
});

export const renderAccountDeleted = async (
  props: AccountDeletedEmailProps,
): Promise<MilimonEmail> => ({
  subject: getTranslations(props.lang, 'account-deleted').subject,
  ...(await renderEmail(<AccountDeletedEmail {...props} />)),
});
