"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "06", label: "МОДУЛІВ КУРСУ" },
  { number: "07", label: "ДІБ ГАРАНТІЇ" },
  { number: "45", label: "ДНІВ НАВЧАННЯ" },
];

const programDescription = [
  "З доступними практичними завданнями та підтримкою куратора, щоб точно дійти до фінішу та не кинути на півшляху.",
  "З опцією повернення коштів, якщо матеріал тебе не влаштує. Подивись, зрозумій, наскільки це твій напрям.",
  "З можливістю засвоювати інформацію в зручному темпі, щоб не відриватись і мати час на інші справи та відпочинок.",
];

export function AIExpertProgram() {
  return (
    <section className="py-20">
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
            ПРОГРАМА НАВЧАННЯ
          </h2>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl font-bold text-gradient-orange mb-4"
              >
                {stat.number}
              </motion.div>
              <div className="text-lg font-semibold text-foreground mb-2">
                {stat.label}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {programDescription[index]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
