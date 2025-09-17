"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    id: 1,
    name: "@Hlovynskiy",
    content:
      "Дякую за можливість отримати нову спеціальність в сфері, яка тільки набирає оберти. Якісна база знань передана в цьому курсі, роботи дозволяють адаптуватися в новій професії. Я проходив багато курсів раніше на різні теми, 90% з них закінчуються виключно поданим матеріалом по темі курсу і учасники потім не знають, як застосувати отримані знання на практиці. Тому окрема подяка за 6 модулів за уроки по Upwork, налаштування профілю, комунікація з клієнтами тощо. Ви зробили якісний продукт, який допоможе змінити свою діяльність тим, хто в цьому буде завзятим!",
  },
];

export function AIExpertReviews() {
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
            ВІДГУКИ СТУДЕНТІВ
          </h2>
        </motion.div>

        {/* Reviews grid */}
        <div className="max-w-4xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="text-2xl mb-2">👨‍💻</div>
                    <h4 className="font-semibold text-foreground text-lg">
                      Студент 1
                    </h4>
                  </div>
                  <blockquote className="text-muted-foreground leading-relaxed italic text-center mb-6">
                    &ldquo;{review.content}&rdquo;
                  </blockquote>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">
                      {review.name}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
