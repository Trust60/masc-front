"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: "⚙️",
    title: "ТЕХНІЧНИЙ СТЕК",
    description:
      "Навчишся комбінувати AI-інструменти для створення автоматизацій, побудови ботів, обробки даних і не тільки.",
  },
  {
    icon: "💼",
    title: "БІЗНЕСОВИЙ СТЕК",
    description:
      "Розберешся, як застосовувати AI для оптимізації бізнес-процесів, маркетингу та аналітики.",
  },
  {
    icon: "🌍",
    title: "ВИХІД НА ФРИЛАНС",
    description:
      "Зрозумієш, де і як знаходити постійних замовників на світовому ринку та працювати в онлайн за комфортний графік.",
  },
];

export function AIExpertBenefits() {
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
            ЩО ТИ ОТРИМУЄШ?
          </h2>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
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
                    {benefit.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
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
