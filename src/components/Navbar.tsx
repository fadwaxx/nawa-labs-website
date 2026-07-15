import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

export default function Navbar() {
  const { lang, toggleLang } = useLanguage();
  const t = translations[lang];

  const isArabic = lang === 'ar';

  const navItems = [
    { label: t.navbar.about, href: '#about' },
    { label: t.navbar.services, href: '#services' },
    { label: t.navbar.skills, href: '#skills' },
    { label: t.navbar.projects, href: '#projects' },
    { label: t.navbar.process, href: '#process' },
    { label: t.navbar.contact, href: '#contact' },
  ];

  return (
    <nav className="absolute left-4 right-4 top-4 z-30 sm:left-6 sm:right-6 md:left-8 md:right-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full border border-border/80 bg-surface/85 px-4 py-2.5 shadow-card backdrop-blur-xl sm:px-5 md:px-6">
        {/* اسم الفريق */}
        <a
          href="#home"
          className="shrink-0 text-sm font-semibold tracking-[-0.03em] text-primary transition-colors hover:text-accent sm:text-base md:text-lg"
        >
          Nawa Labs
        </a>

        {/* روابط التنقل */}
        <ul className="hidden items-center gap-4 lg:flex xl:gap-7">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="whitespace-nowrap text-xs text-primary/70 transition-colors hover:text-primary xl:text-sm"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* تغيير اللغة */}
        <button
          type="button"
          onClick={toggleLang}
          className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border-strong bg-background/70 px-3 py-2 text-[10px] font-medium text-primary transition-all hover:border-accent hover:bg-card hover:text-accent sm:px-4 sm:text-xs"
          aria-label={
            isArabic
              ? 'Switch to English'
              : 'التبديل إلى العربية'
          }
        >
          <span aria-hidden="true">
            {isArabic ? '🇺🇸' : '🇸🇦'}
          </span>

          <span>
            {isArabic ? 'English' : 'العربية'}
          </span>
        </button>
      </div>
    </nav>
  );
}