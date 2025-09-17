"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const reasons = [
  {
    icon: "🔥",
    title: "Затребувана професія",
    description:
      "Автоматизація бізнес-процесів - одна з найбільш затребуваних навичок на ринку. Компанії шукають фахівців, які можуть оптимізувати робочі процеси та економити ресурси.",
  },
  {
    icon: "💻",
    title: "Без глибоких знань програмування",
    description:
      "N8N дозволяє створювати складні автоматизації за допомогою візуального інтерфейсу без необхідності писати код, що робить його доступним для широкого кола спеціалістів.",
  },
  {
    icon: "🔗",
    title: "Інтеграція з сотнями сервісів",
    description:
      "N8N має вбудовані інтеграції з більш ніж 200 популярними сервісами та API, що дозволяє створювати комплексні рішення для будь-якого бізнесу.",
  },
  {
    icon: "💰",
    title: "Висока оплата праці",
    description:
      "Спеціалісти з автоматизації процесів отримують конкурентну заробітну плату як на локальному ринку, так і на міжнародних платформах фрілансу.",
  },
  {
    icon: "🌍",
    title: "Відкриті можливості для фрілансу",
    description:
      "Навички роботи з N8N дозволяють брати проекти з автоматизації на фріланс-платформах, де попит на такі послуги постійно зростає.",
  },
  {
    icon: "⚡",
    title: "Альтернатива Make (Integromat)",
    description:
      "N8N є потужною альтернативою платформі Make (раніше Integromat) з відкритим кодом, що дає більше свободи та можливостей для налаштування.",
  },
];

export function N8NReasons() {
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
            ЧОМУ ВАРТО СТАТИ N8N СПЕЦІАЛІСТОМ
          </h2>
        </motion.div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
