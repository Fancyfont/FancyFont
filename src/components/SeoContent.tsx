import React, { useState } from 'react';
import { ToolDefinition } from '../types';
import {
  HelpCircle, CheckCircle2, ChevronDown, Sparkles, Globe, Cpu, Smartphone, ShieldCheck
} from 'lucide-react';

interface SeoContentProps {
  tool: ToolDefinition;
}

export const SeoContent: React.FC<SeoContentProps> = ({ tool }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section className="mt-16 pt-12 border-t border-slate-200 dark:border-slate-800 space-y-12">
      {/* Title & Introductory Text */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
          About {tool.name}
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed text-base">
          {tool.metaDescription} Designed for content creators, gamers, social media managers, and designers who want instant, reliable Unicode formatting without software installation.
        </p>
      </div>

      {/* Grid: How To Use & Key Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Step-by-step Guide */}
        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2.5 text-indigo-600 dark:text-indigo-400 font-bold text-lg mb-4">
            <CheckCircle2 className="h-5 w-5" />
            <h3>How to Use {tool.name}</h3>
          </div>
          <ol className="space-y-3">
            {tool.howToUseSteps.map((step, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-950 font-bold text-xs text-indigo-600 dark:text-indigo-400">
                  {idx + 1}
                </span>
                <span className="pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Major Features */}
        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2.5 text-purple-600 dark:text-purple-400 font-bold text-lg mb-4">
            <Sparkles className="h-5 w-5" />
            <h3>Key Advantages & Features</h3>
          </div>
          <ul className="space-y-3">
            {tool.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                <div className="h-1.5 w-1.5 rounded-full bg-purple-500 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Cross-Platform Compatibility Bar */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-900/10 via-purple-900/10 to-pink-900/10 border border-indigo-200/50 dark:border-indigo-800/50 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-1">
          <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Globe className="h-4 w-4 text-indigo-500" />
            100% Cross-Platform & Device Compatible
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Output uses international Unicode standards supported natively across iOS, Android, macOS, Windows, Linux, Instagram, TikTok, Discord, and WhatsApp.
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 flex items-center gap-1.5">
            <Smartphone className="h-3.5 w-3.5 text-indigo-500" /> Mobile
          </span>
          <span className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 flex items-center gap-1.5">
            <Cpu className="h-3.5 w-3.5 text-purple-500" /> Desktop
          </span>
          <span className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" /> Web
          </span>
        </div>
      </div>

      {/* Frequently Asked Questions Accordion */}
      {tool.faqs && tool.faqs.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 font-display">
            <HelpCircle className="h-5 w-5 text-indigo-500" />
            Frequently Asked Questions
          </h3>

          <div className="space-y-3">
            {tool.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 text-slate-900 dark:text-white font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-slate-400 shrink-0 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/80 pt-3 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};
