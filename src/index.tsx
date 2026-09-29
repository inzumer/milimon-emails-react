import { getTranslations } from '@i18n';
import { renderEmail, type RenderedEmail } from '@inzumer/email';
import { AccountDeletedEmail, type AccountDeletedEmailProps } from './emails/account-deleted';
import { WelcomeEmail, type WelcomeEmailProps } from './emails/welcome';

export { DEFAULT_LANG, LANGS, resolveLang, type Lang } from '@i18n';
export { AccountDeletedEmail, WelcomeEmail, type AccountDeletedEmailProps, type WelcomeEmailProps };

/** A ready-to-send email: subject, HTML and plain text. */
export type MilimonEmail = RenderedEmail & { subject: string };

export const renderWelcome = async (props: WelcomeEmailProps): Promise<MilimonEmail> => ({
  subject: getTranslations(props.lang, 'welcome').subject,
  ...(await renderEmail(<WelcomeEmail {...props} />)),
});

export const renderAccountDeleted = async (
  props: AccountDeletedEmailProps,
): Promise<MilimonEmail> => ({
  subject: getTranslations(props.lang, 'account-deleted').subject,
  ...(await renderEmail(<AccountDeletedEmail {...props} />)),
});
