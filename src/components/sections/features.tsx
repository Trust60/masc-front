"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: "🎓",
    title: "Експерти-викладачі",
    description:
      "Навчайтесь у професіоналів з практичним досвідом у своїй галузі",
  },
  {
    icon: "💻",
    title: "Практичні проєкти",
    description:
      "Створюйте реальні проєкти для вашого портфоліо вже під час навчання",
  },
  {
    icon: "🚀",
    title: "Кар'єрний розвиток",
    description:
      "Підтримка у працевлаштуванні та консультації з побудови кар'єри",
  },
];

export function Features() {
  return (
    <section id="about" className="py-20 bg-muted/30 bg-texture-dots">
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
            Чому MASC?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Інновативні методи навчання та індивідуальний підхід до кожного
            студента
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
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
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
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
