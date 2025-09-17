"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    id: 1,
    name: "Ірина Коваленко",
    course: "Автоматизатор, випуск 2025",
    content:
      "Навчання в MASC стало переломним моментом у моїй кар'єрі. Всього за кілька місяців я здобула навички, які дозволили мені знайти роботу мрії. Викладачі дійсно турбуються про успіх кожного студента.",
    avatar: "👩‍💼",
  },
  {
    id: 2,
    name: "Олександр Петренко",
    course: "N8N розробник, випуск 2025",
    content:
      "Дуже вдячний школі MASC за можливість навчатися у професіоналів своєї справи. Практичні завдання та реальні проєкти дозволили швидко зрозуміти, як працює індустрія зсередини.",
    avatar: "👨‍💻",
  },
  {
    id: 3,
    name: "Микола Бондаренко",
    course: "AI-Експерт, випуск 2025",
    content:
      "Обрав MASC після довгих пошуків і не пошкодував. Структурована програма, індивідуальний підхід та постійна підтримка менторів. Уже через 2 місяці після випуску отримав першу роботу в IT.",
    avatar: "👨‍🎓",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-muted/30">
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
            Відгуки студентів
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Що кажуть наші випускники про навчання в MASC
          </p>
        </motion.div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl">{review.avatar}</div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {review.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {review.course}
                      </p>
                    </div>
                  </div>
                  <blockquote className="text-muted-foreground leading-relaxed italic">
                    &ldquo;{review.content}&rdquo;
                  </blockquote>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
