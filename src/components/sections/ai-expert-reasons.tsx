"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const reasons = [
  {
    icon: "🚀",
    title: "ПРОФЕСІЯ МАЙБУТНЬОГО",
    description:
      "AI-технології стрімко розвиваються. Без збою поєднання навичок роботи зі штучним інтелектом відкриває доступ до високих зарплат і нових посад у сферах, які активно інтегрують ці інструменти.",
  },
  {
    icon: "🌍",
    title: "СВІТОВИЙ ТРЕНД",
    description:
      "Згідно зі звітом Всесвітнього економічного форуму, близько 70% компаній планують наймати спеціалістів для розробки та вдосконалення інструментів ШІ, а 62% — для роботи у співпраці з ШІ.",
  },
  {
    icon: "⭐",
    title: "РЕЙТИНГ НА РИНКУ",
    description:
      "Опановуєш знання, яких ще немає в масовому доступі — отримуєш статус експерта. Більшість компаній довіряють AI-рішенням від профі: роботодавці та інвестори обирають тих, хто вже має досвід і перевірені стратегії.",
  },
];

export function AIExpertReasons() {
  return (
    <section className="py-20 bg-muted/30 bg-texture-grid">
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
            3 КЛЮЧОВІ ПРИЧИНИ
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            СТАТИ AI-ЕКСПЕРТОМ
          </p>
        </motion.div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="text-4xl mb-4"
                  >
                    {reason.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
