import { useEffect } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
} from 'framer-motion';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  MapPin,
} from 'lucide-react';

import WordsPullUp from './shared/WordsPullUp';
import MagneticButton from './shared/MagneticButton';
import Navbar from './Navbar';

import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const isArabic = lang === 'ar';

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
    mass: 0.4,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
    mass: 0.4,
  });

  useEffect(() => {
    const canUsePointer = window.matchMedia('(pointer: fine)').matches;

    if (!canUsePointer) {
      return;
    }

    const handleMouseMove = (event: MouseEvent) => {
      const offsetX =
        (event.clientX / window.innerWidth - 0.5) * 10;

      const offsetY =
        (event.clientY / window.innerHeight - 0.5) * 8;

      mouseX.set(offsetX);
      mouseY.set(offsetY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <section
      id="home"
      className="min-h-screen bg-background p-3 sm:p-4 md:p-6"
    >
      <div className="relative min-h-[calc(100vh-24px)] overflow-hidden rounded-2xl bg-surface sm:min-h-[calc(100vh-32px)] md:min-h-[calc(100vh-48px)] md:rounded-[2rem]">
        {/* فيديو الخلفية */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover brightness-[0.92] contrast-[0.96] saturate-[0.85]"
        >
          <source
            src="/nawa-team-bg.mp4"
            type="video/mp4"
          />
        </video>

        {/* طبقات الخلفية */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/25 to-background/10" />

        <div className="absolute inset-0 bg-gradient-to-b from-background/5 via-transparent to-background/45" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_20%,rgba(166,118,118,0.18),transparent_32%)]" />

        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay" />

        <Navbar />

        {/* معلومات أعلى الهيرو */}
        <motion.div
          initial={{
            opacity: 0,
            y: -12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.25,
            ease: EASE,
          }}
          className="absolute left-5 right-5 top-20 z-10 flex items-center justify-between gap-4 sm:left-8 sm:right-8 md:left-12 md:right-12"
        >
          <div className="hidden items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-primary/55 sm:flex">
            <MapPin className="h-3.5 w-3.5 text-accent" />

            <span>
              {isArabic
                ? 'نعمل من المملكة العربية السعودية'
                : 'Based in Saudi Arabia'}
            </span>
          </div>

          <div className="ml-auto flex items-center gap-2 rounded-full border border-accent/25 bg-background/65 px-3 py-2 text-[10px] text-primary/80 shadow-card backdrop-blur-md sm:text-xs">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />

              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
            </span>

            <span>
              {isArabic
                ? 'متاحون للمشاريع'
                : 'Available for Projects'}
            </span>
          </div>
        </motion.div>

        {/* المحتوى الرئيسي */}
        <div className="relative z-10 grid min-h-[calc(100vh-24px)] grid-cols-1 items-end gap-10 px-5 pb-10 pt-32 sm:min-h-[calc(100vh-32px)] sm:px-8 md:min-h-[calc(100vh-48px)] md:px-12 md:pb-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* النص */}
          <div className="max-w-xl">
            <motion.span
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.65,
                ease: EASE,
              }}
              className="inline-flex rounded-full border border-primary/20 bg-background/65 px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-primary/75 shadow-card backdrop-blur-md sm:text-xs"
            >
              {t.hero.badge}
            </motion.span>

            <motion.div
              style={{
                x: smoothX,
                y: smoothY,
              }}
              className="mt-6 will-change-transform"
            >
              <h1 className="overflow-visible text-6xl font-semibold leading-[0.88] tracking-[-0.06em] text-primary sm:text-7xl md:text-8xl lg:text-[7.5rem]">
                <WordsPullUp text={t.hero.title} />
              </h1>
            </motion.div>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: EASE,
              }}
              className="mt-7 max-w-lg text-sm leading-7 text-primary/70 sm:text-base sm:leading-8"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.45,
                ease: EASE,
              }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <MagneticButton>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3 text-sm font-medium text-background shadow-card transition-all hover:-translate-y-1 sm:text-base"
                >
                  {t.hero.hire}

                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </MagneticButton>

              <MagneticButton strength={0.14}>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-3 rounded-full border border-primary/25 bg-[#E7D3D3] px-6 py-3 text-sm font-medium text-primary shadow-card backdrop-blur-md transition-all hover:-translate-y-1 hover:border-accent hover:text-accent sm:text-base"
                >
                  {t.hero.projects}

                  <ArrowRight
                    className={`h-4 w-4 ${
                      isArabic ? 'rotate-180' : ''
                    }`}
                  />
                </a>
              </MagneticButton>
            </motion.div>
          </div>

          {/* الجهة اليمنى */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: EASE,
            }}
            className="flex flex-col justify-end lg:items-end"
          >
            <p
              className={`max-w-md text-sm leading-8 text-primary/65 ${
                isArabic ? 'text-right' : 'lg:text-right'
              }`}
            >
              {t.hero.description}
            </p>

            <div className="mt-7 grid w-full grid-cols-1 gap-3 sm:grid-cols-3 lg:max-w-lg">
              <div className="rounded-3xl border border-border bg-background/75 p-5 text-center shadow-card backdrop-blur-md">
                <span className="text-[10px] uppercase tracking-[0.16em] text-muted">
                  {isArabic ? 'الخدمات' : 'Services'}
                </span>

                <strong className="mt-3 block text-sm font-medium text-primary">
                  {isArabic
                    ? 'الويب والأنظمة'
                    : 'Web & Systems'}
                </strong>
              </div>

              <div className="rounded-3xl border border-border bg-background/75 p-5 text-center shadow-card backdrop-blur-md">
                <span className="text-[10px] uppercase tracking-[0.16em] text-muted">
                  {isArabic ? 'المشاريع' : 'Projects'}
                </span>

                <strong className="mt-3 block text-sm font-medium text-primary">
                  {isArabic
                    ? 'منتجات رقمية'
                    : 'Digital Products'}
                </strong>
              </div>

              <div className="rounded-3xl border border-border bg-background/75 p-5 text-center shadow-card backdrop-blur-md">
                <span className="text-[10px] uppercase tracking-[0.16em] text-muted">
                  {isArabic ? 'الفريق' : 'Team'}
                </span>

                <strong className="mt-3 block text-sm font-medium text-primary">
                  {isArabic
                    ? '5 أعضاء'
                    : '5 Members'}
                </strong>
              </div>
            </div>
          </motion.div>

          {/* مؤشر النزول */}
          <motion.a
            href="#projects"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.9,
            }}
            className="mt-2 inline-flex w-fit items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-primary/45 transition-colors hover:text-accent sm:text-xs lg:col-span-2"
          >
            <motion.span
              animate={{
                y: [0, 6, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/20 bg-background/45 backdrop-blur-md"
            >
              <ArrowDown className="h-4 w-4" />
            </motion.span>

            <span>
              {isArabic
                ? 'استكشف المشاريع'
                : 'Explore Projects'}
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}