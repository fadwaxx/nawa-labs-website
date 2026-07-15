import { motion } from 'framer-motion';

import WordsPullUpMultiStyle from './shared/WordsPullUpMultiStyle';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

const EASE = [0.16, 1, 0.3, 1] as const;

export default function About() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const isArabic = lang === 'ar';

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F4F0EA] px-4 py-24 sm:px-6 sm:py-32"
    >
      {/* خلفية الباترن */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.72]"
        style={{
          backgroundImage: "url('/nawa-pattern.jpeg')",
        }}
      />

      {/* طبقة فاتحة فوق الباترن */}
      <div className="pointer-events-none absolute inset-0 bg-[#F7F3EE]/40" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            ease: EASE,
          }}
          className="rounded-[2rem] border border-[#BDAAAA]/50 bg-[#C99FA0]/90 px-6 py-16 text-center shadow-[0_30px_80px_rgba(91,64,64,0.16)] backdrop-blur-[2px] sm:px-10 sm:py-20 md:px-16 md:py-24"
        >
          <span className="text-[10px] uppercase tracking-[0.28em] text-[#5B4444]/65 sm:text-xs">
            {t.about.badge}
          </span>

          <div className="mx-auto mt-6 max-w-4xl">
            <h2
              className={`overflow-visible pb-5 text-3xl font-normal leading-[1.14] text-[#3F3030] sm:text-4xl sm:leading-[1.12] md:text-5xl lg:text-6xl ${
                isArabic ? 'font-sans' : ''
              }`}
            >
              <WordsPullUpMultiStyle
                segments={[
                  {
                    text: t.about.title1,
                    className: 'font-normal',
                  },
                  {
                    text: t.about.title2,
                    className: isArabic
                      ? 'font-normal'
                      : 'font-serif italic',
                  },
                  {
                    text: t.about.title3,
                    className: 'font-normal',
                  },
                ]}
              />
            </h2>
          </div>

          <motion.p
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.7,
              delay: 0.18,
              ease: EASE,
            }}
            className="mx-auto mt-8 max-w-3xl text-xs leading-7 text-[#4F3D3D]/75 sm:text-sm sm:leading-8 md:text-base"
          >
            {t.about.description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}