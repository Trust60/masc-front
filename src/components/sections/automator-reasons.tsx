"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const reasons = [
  {
    icon: "🌊",
    title: "Нова перспективна ніша",
    description:
      "Автоматизація маркетингу - це блакитний океан у світі онлайн-професій з високим попитом і низькою конкуренцією.",
  },
  {
    icon: "💰",
    title: "Попит на світовому фрілансі",
    description:
      "Клієнти готові платити від $30/год за автоматизацію їх маркетингових процесів та інтеграцію різних сервісів.",
  },
  {
    icon: "💻",
    title: "IT-професія без коду",
    description:
      "Ви можете працювати в IT-сфері без необхідності вивчати програмування, використовуючи no-code інструменти.",
  },
];

export function AutomatorReasons() {
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
            3 ключові причини
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            стати автоматизатором
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
