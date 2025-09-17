"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const targetAudience = [
  {
    icon: "🧮",
    title: "ЛЮБИТЕЛЮ АЛГОРИТМІВ",
    description:
      "Який надає перевагу системності та логічному підходу у вирішенні завдань.",
  },
  {
    icon: "💻",
    title: "ФРИЛАНСЕРУ",
    description:
      "Щоб опанувати прибутковий напрям, підняти свій чек і налаштувати потік замовлень.",
  },
  {
    icon: "🔄",
    title: "СВІТЧЕРУ",
    description:
      "Який хоче змінити діяльність або мати додаткове джерело доходу на поточній роботі.",
  },
  {
    icon: "🏢",
    title: "ПІДПРИЄМЦЮ",
    description:
      "Щоб оптимізувати бізнес-процеси та зменшити витрати грошей і часу на рутину.",
  },
  {
    icon: "💡",
    title: "НОВАТОРУ",
    description:
      "Який першим тестує нові сервіси, полюбляє розбиратися з софтом і будувати системи.",
  },
  {
    icon: "🌱",
    title: "ПОЧАТКІВЦЮ",
    description:
      "Що майже не стикався з нейромережами та не має досвіду в IT, але хоче спробувати.",
  },
];

export function AIExpertTarget() {
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
            КОМУ ПІДХОДИТЬ ПРОФЕСІЯ AI-ЕКСПЕРТА?
          </h2>
        </motion.div>

        {/* Target audience grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {targetAudience.map((target, index) => (
            <motion.div
              key={target.title}
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
                    {target.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {target.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {target.description}
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
