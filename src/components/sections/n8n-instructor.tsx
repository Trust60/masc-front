"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const achievements = [
  "Єдиний в Україні сертифікований партнер N8N",
  "Засновник агенції 5.0 Solutions",
  "Сертифікований партнер і тренер Make (раніше Integromat)",
  "Автоматизатор із 7-річним досвідом",
  "Реалізував понад 200 проектів з автоматизації",
  "Спеціалізується на складних інтеграціях та оптимізації бізнес-процесів",
];

export function N8NInstructor() {
  return (
    <section className="py-20 bg-muted/30 bg-texture-hexagon">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              ГОЛОВНИЙ СПІКЕР КУРСУ — СТЕПАН ДОКТОР
            </h2>
          </motion.div>

          {/* Instructor card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Avatar */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex-shrink-0"
                  >
                    <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center text-4xl font-bold text-primary-foreground">
                      <Image
                        src="/Stepan.png"
                        alt="Степан Доктор"
                        width={300}
                        height={300}
                      />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Степан Доктор
                    </h3>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      За час роботи реалізував понад 200 проектів з
                      автоматизації для клієнтів з різних галузей бізнесу.
                      Спеціалізується на складних інтеграціях та оптимізації
                      бізнес-процесів з використанням сучасних інструментів
                      автоматизації.
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      {achievements.map((achievement, index) => (
                        <motion.div
                          key={achievement}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: 0.4 + index * 0.1,
                          }}
                          viewport={{ once: true }}
                          className="flex items-center gap-2 text-muted-foreground"
                        >
                          <span className="text-primary">✓</span>
                          <span>{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
