"use client";

import { motion } from "framer-motion";
import { navigateToSection } from "@/lib/scroll";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-orange rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold text-foreground">MASC</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Сучасна освіта для тих, хто прагне здобути актуальні навички та
              будувати успішну кар&apos;єру.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-foreground mb-4">Навігація</h3>
            <ul className="space-y-2">
              {[
                { name: "Курси", href: "#courses" },
                { name: "Про нас", href: "#about" },
                { name: "Відгуки", href: "#reviews" },
                { name: "Контакти", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => navigateToSection(link.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-foreground mb-4">Контакти</h3>
            <div className="space-y-2 text-muted-foreground flex flex-col">
              <a href="mailto:masc.edu.it@gmail.com">
                📧 masc.edu.it@gmail.com
              </a>
              <a href="tel:+380665752066">📱 +380 (66) 575-20-66</a>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t mt-8 pt-8"
        >
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* Copyright and legal info */}
            <div className="flex flex-col space-y-3 text-sm text-muted-foreground max-w-2xl">
              <p className="font-medium">
                © 2025 MASC School. Усі права захищено.
              </p>
              <div className="space-y-1 text-xs leading-relaxed">
                <p>ФОП Ковальчук Ярослава Василівна</p>
                <p>ІПН: 3451315569</p>
                <p>с. Ришавка, вул. Партизанів-Наумівців, 28</p>
                <p>Коростенський район, Житомирська область</p>
              </div>
              <p className="text-xs leading-relaxed">
                Цей сайт працює за договором комерційної концесії (франшизи) з
                правовласником бренду MASC — ФОП Слободянюк М.В.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 lg:ml-6">
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Політика конфіденційності
              </Link>
              <Link
                href="/terms"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Умови використання
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
