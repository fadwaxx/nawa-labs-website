import {
  Mail,
  MessageCircle,
  Github,
  Linkedin,
  Copy,
} from 'lucide-react';

import WordsPullUp from './shared/WordsPullUp';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

export default function Contact() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const email = 'Fadwax0212@outlook.com';
  const phone = '966590545617';

  const githubUrl = 'https://github.com/fadwaxx';
  const githubUsername = '@fadwaxx';

  const linkedinUrl = '';

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);

      alert(
        lang === 'ar'
          ? 'تم نسخ البريد الإلكتروني'
          : 'Email copied',
      );
    } catch {
      alert(
        lang === 'ar'
          ? 'تعذر نسخ البريد الإلكتروني'
          : 'Could not copy the email',
      );
    }
  };

  const emailSubject =
    lang === 'ar'
      ? 'طلب مشروع جديد — Nawa Labs'
      : 'New Project Inquiry — Nawa Labs';

  const emailBody =
    lang === 'ar'
      ? 'مرحبًا فريق Nawa Labs، أود مناقشة فكرة مشروع معكم.'
      : 'Hello Nawa Labs team, I would like to discuss a project with you.';

  return (
    <footer
      id="contact"
      className="bg-background px-4 pb-6 sm:px-6"
    >
      <div className="mx-auto max-w-6xl rounded-2xl border border-border bg-surface px-6 py-16 text-center shadow-soft sm:px-10 sm:py-24 md:rounded-[2rem] md:px-16">
        <span className="text-[10px] uppercase tracking-[0.2em] text-accent sm:text-xs">
          {t.contact.badge}
        </span>

        <h2 className="mt-4 text-3xl leading-[1.05] text-[#7A5A5A] sm:text-5xl md:text-6xl">
          <WordsPullUp text={t.contact.title} />
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-muted sm:text-base">
          {t.contact.description}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* البريد الإلكتروني */}
          <a
            href={`mailto:${email}`}
            className="group rounded-2xl border border-border bg-card p-5 text-start shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:bg-background"
          >
            <Mail className="mb-4 h-5 w-5 text-accent" />

            <h3 className="font-medium text-[#7A5A5A]">
              {t.contact.email}
            </h3>

            <p className="mt-2 break-all text-sm text-muted">
              {email}
            </p>
          </a>

          {/* واتساب */}
          <a
            href={`https://wa.me/${phone}`}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-border bg-card p-5 text-start shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:bg-background"
          >
            <MessageCircle className="mb-4 h-5 w-5 text-accent" />

            <h3 className="font-medium text-[#7A5A5A]">
              {t.contact.whatsapp}
            </h3>

            <p className="mt-2 text-sm text-muted">
              +966 59 054 5617
            </p>
          </a>

          {/* GitHub */}
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-border bg-card p-5 text-start shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:bg-background"
          >
            <Github className="mb-4 h-5 w-5 text-accent" />

            <h3 className="font-medium text-[#7A5A5A]">
              {t.contact.github}
            </h3>

            <p className="mt-2 text-sm text-muted">
              {githubUsername}
            </p>
          </a>

          {/* LinkedIn */}
          {linkedinUrl ? (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-border bg-card p-5 text-start shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:bg-background"
            >
              <Linkedin className="mb-4 h-5 w-5 text-accent" />

              <h3 className="font-medium text-primary">
                {t.contact.linkedin}
              </h3>

              <p className="mt-2 text-sm text-muted">
                Nawa Labs
              </p>
            </a>
          ) : (
            <div className="rounded-2xl border border-border bg-card p-5 text-start shadow-card">
              <Linkedin className="mb-4 h-5 w-5 text-accent" />

              <h3 className="font-medium text-primary">
                {t.contact.linkedin}
              </h3>

              <p className="mt-2 text-sm text-muted">
                {lang === 'ar' ? 'قريبًا' : 'Coming Soon'}
              </p>
            </div>
          )}
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-background px-5 py-3 text-sm text-primary transition-all hover:-translate-y-1 hover:border-accent hover:text-accent sm:text-base"
          >
            <Copy className="h-4 w-4" />
            {t.contact.copy}
          </button>

          <a
            href={`mailto:${email}?subject=${encodeURIComponent(
              emailSubject,
            )}&body=${encodeURIComponent(emailBody)}`}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-white shadow-card transition-all hover:-translate-y-1 hover:bg-accent-hover sm:text-base"
          >
            <Mail className="h-4 w-4" />
            {t.contact.send}
          </a>
        </div>

        <p className="mt-14 text-xs text-muted sm:text-sm">
          {lang === 'ar'
            ? `Nawa Labs — المملكة العربية السعودية © ${new Date().getFullYear()}`
            : `Nawa Labs — Saudi Arabia © ${new Date().getFullYear()}`}
        </p>
      </div>
    </footer>
  );
}