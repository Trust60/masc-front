"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ContactFormDialog } from "@/components/ui/contact-form-dialog";

const pricingPlans = [
  {
    name: "Знання",
    price: "497",
    features: [
      "Доступ до матеріалів курсу «AI-EXPERT» 24/7",
      "6 проєктів з AI у портфоліо",
    ],
    popular: false,
  },
  {
    name: "Досвід",
    price: "597",
    features: [
      "Доступ до матеріалів курсу «AI-EXPERT» 24/7",
      "6 проєктів з AI у портфоліо",
      "Доступ до відкритого ком'юніті випускників",
      "3 місяці доступу до English клубу",
      "Детальний фідбек на твої роботи від куратора",
      "Закритий чат учасників курсу",
      "Сертифікат учасника або підтвердження скілів",
      "Доступ до задачника-тренажера практичних навичок",
      '3 місяці Zoom-сесій формату "питання-відповідь" із куратором курсу',
      "3-тижневий модуль з успішного виходу на фриланс",
    ],
    popular: true,
  },
  {
    name: "Мастермайнд",
    price: "897",
    features: [
      "Доступ до матеріалів курсу «AI-EXPERT» 24/7",
      "6 проєктів з AI у портфоліо",
      "Доступ до відкритого ком'юніті випускників",
      "3 місяці доступу до English клубу",
      "Детальний фідбек на твої роботи від куратора",
      "Закритий чат учасників курсу",
      "Сертифікат учасника або підтвердження скілів",
      "Доступ до задачника-тренажера практичних навичок",
      '3 місяці Zoom-сесій формату "питання-відповідь" із куратором курсу',
      "3-тижневий модуль з успішного виходу на фриланс",
      "Групова коучингова сесія для подолання внутрішніх стоперів",
      "Гарантія отримання першого проєкту на UpWork",
      "5 Мастермайнд-сесій з ментором курсу, який вже успішно працює на міжнародному фрилансі",
    ],
    popular: false,
  },
];

export function AIExpertPricing() {
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
            ОБИРАЙ СВІЙ ПЛАН НАВЧАННЯ!
          </h2>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-orange text-white px-4 py-2 rounded-full text-sm font-medium">
                    Популярний
                  </span>
                </div>
              )}

              <Card
                className={`h-full flex flex-col hover:shadow-lg transition-shadow duration-300 ${
                  plan.popular ? "border-primary shadow-lg" : ""
                }`}
              >
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <div className="text-3xl font-bold text-gradient-orange">
                      ${plan.price}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      вартість в грн: {(Number(plan.price) * 43.5).toFixed(0)}{" "}
                      грн
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.2 + featureIndex * 0.05,
                        }}
                        viewport={{ once: true }}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-gradient-orange mt-1">✓</span>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <ContactFormDialog
                    trigger={
                      <Button
                        className="w-full"
                        variant={plan.popular ? "default" : "outline"}
                      >
                        Детальніше
                      </Button>
                    }
                    courseType="ai"
                    buttonText="Детальніше"
                  />
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
