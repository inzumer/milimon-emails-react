import { getTranslations, type Lang } from '@i18n';
import {
  EmailButton,
  EmailCard,
  EmailFooter,
  EmailHeading,
  EmailLayout,
  EmailText,
} from '@inzumer/email';
import { milimonTheme, siteLinks } from '../brand';

export interface WelcomeEmailProps {
  lang: Lang;
  /** First name, or the whole name when there is no first name. */
  name: string;
  siteUrl: string;
}

/** Sent when an account is created (first sign-in). */
export const WelcomeEmail = ({ lang, name, siteUrl }: WelcomeEmailProps) => {
  const text = getTranslations(lang, 'welcome');
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
          links={[
            { href: links.account, label: text.account },
            { href: links.privacy, label: common.privacy },
          ]}
        />
      }
    >
      <EmailHeading>{text.greeting.replace('{name}', name)}</EmailHeading>
      <EmailText>{text.intro}</EmailText>
      <EmailCard>
        <EmailHeading level={2}>{text.saved}</EmailHeading>
        {text.items.map((item) => (
          <EmailText key={item}>• {item}</EmailText>
        ))}
      </EmailCard>
      <EmailButton href={links.calculator}>{text.cta}</EmailButton>
      <EmailText variant="secondary">{text.more}</EmailText>
      <EmailText>{common.signature}</EmailText>
    </EmailLayout>
  );
};
