"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const programSections = [
  {
    title: "Маркетинговий стек",
    items: [
      "Основи маркетингу та воронки продажів",
      "Email-маркетинг та автоматизація розсилок",
      "Лідогенерація та CRM-системи",
      "Аналітика та трекінг конверсій",
      "Автоматизація рекламних кампаній",
    ],
  },
  {
    title: "Технічний стек",
    items: [
      "Zapier та інтеграційні платформи",
      "Make (Integromat) для складних сценаріїв",
      "Airtable та бази даних",
      "Webhooks та API",
      "Google Sheets автоматизація",
    ],
  },
  {
    title: "Вихід на фриланс",
    items: [
      "Створення профілю на Upwork",
      "Пошук перших клієнтів",
      "Комунікація з іноземними замовниками",
      "Ціноутворення та продаж послуг",
      "Масштабування та створення агенції",
    ],
  },
];

export function AutomatorProgram() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Програма навчання
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Все, що потрібно для старту кар&apos;єри автоматизатора
          </p>
        </motion.div>

        {/* Program sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-center">
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.2 + itemIndex * 0.05,
                        }}
                        viewport={{ once: true }}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
