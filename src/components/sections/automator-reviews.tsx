"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    id: 1,
    name: "Олександр",
    role: "Автоматизатор маркетингу",
    content:
      "Завдяки курсу я зміг повністю змінити свою кар'єру. Вже через місяць після закінчення я отримав перший проєкт на Upwork за ставкою $25/год. Зараз працюю з клієнтами з США та Європи.",
    avatar: "👨‍💻",
  },
  {
    id: 2,
    name: "Марія",
    role: "Автоматизатор маркетингу",
    content:
      "Я не мала досвіду в IT, але завжди хотіла працювати в цій сфері. Курс дав мені всі необхідні знання та інструменти. Особливо цінною була підтримка ментора та допомога з першими проєктами.",
    avatar: "👩‍💼",
  },
  {
    id: 3,
    name: "Іван",
    role: "Маркетолог-автоматизатор",
    content:
      "Я працював маркетологом, але хотів більше технічних знань. Курс ідеально підійшов для цього. Тепер я можу не тільки розробляти стратегії, але й автоматизувати їх реалізацію, що значно підвищило мою цінність на ринку.",
    avatar: "👨‍🎓",
  },
  {
    id: 4,
    name: "Катерина",
    role: "Фрілансер-автоматизатор",
    content:
      "Я вже мала досвід роботи з Zapier, але хотіла поглибити свої знання. Курс дав мені розуміння більш складних інтеграцій та автоматизацій. Зараз я працюю з кількома постійними клієнтами та маю стабільний дохід.",
    avatar: "👩‍💻",
  },
];

export function AutomatorReviews() {
  return (
    <section className="py-20 bg-muted/30 bg-texture-diagonal">
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
        </motion.div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                        {review.role}
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
