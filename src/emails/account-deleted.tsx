import { getTranslations, type Lang } from '@i18n';
import { EmailButton, EmailFooter, EmailHeading, EmailLayout, EmailText } from '@inzumer/email';
import { milimonTheme, siteLinks } from '../brand';

export interface AccountDeletedEmailProps {
  lang: Lang;
  siteUrl: string;
}

/** Sent when someone deletes their account: confirms the data is gone (GDPR). */
export const AccountDeletedEmail = ({ lang, siteUrl }: AccountDeletedEmailProps) => {
  const text = getTranslations(lang, 'account-deleted');
  const common = getTranslations(lang, 'common');
  const links = siteLinks(siteUrl, lang);
  return (
    <EmailLayout
      lang={lang}
      preview={text.preview}
      brand={{ name: 'Milimon', logoUrl: links.logo }}
      theme={milimonTheme}
      footer={
        <EmailFooter
          reason={text.reason}
          links={[{ href: links.privacy, label: common.privacy }]}
        />
      }
    >
      <EmailHeading>{text.title}</EmailHeading>
      <EmailText>{text.body}</EmailText>
      <EmailText variant="secondary">{text.back}</EmailText>
      <EmailButton href={links.home}>{text.cta}</EmailButton>
      <EmailText>{common.signature}</EmailText>
    </EmailLayout>
  );
};

/** Sample data for `pnpm preview`. */
AccountDeletedEmail.PreviewProps = {
  lang: 'es',
  siteUrl: 'https://inzumer.github.io/milimon-frontend-web',
} satisfies AccountDeletedEmailProps;

export default AccountDeletedEmail;
