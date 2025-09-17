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

const pricingPlans = [
  {
    name: "ЗНАННЯ",
    price: "1700 грн/міс",
    fullPrice: "17170 грн повна ціна",
    features: [
      "Доступ до курсу 24/7 на рік",
      "Запис Q&A сесій",
      "Проект у портфоліо",
    ],
    popular: false,
  },
  {
    name: "ДОСВІД",
    price: "2400 грн/міс",
    fullPrice: "23660 грн повна ціна",
    features: [
      "Все з тарифу ЗНАННЯ",
      "Доступ до закритої групи студентів",
      "Перевірка домашніх завдань та детальний фідбек",
      "LIVE зідзвони розбору питань по матеріалах курсу",
      "Сертифікат проходження курсу",
      "2 шаблони популярних AI-агентів для N8N",
      "Сесії психологічної підтримки",
    ],
    popular: true,
  },
  {
    name: "РЕЗУЛЬТАТ",
    price: "5200 грн/міс",
    fullPrice: "51770 грн повна ціна",
    features: [
      "Все з тарифу ДОСВІД",
      "5 індивідуальних сесій протягом 2-х місяців",
      "Технічна підтримка під час взяття першого проекту",
      "Прокачка профілю на Upwork за унікальною методикою від школи",
      "3 місяці доступу до клубу англійської",
      "7 шаблонів популярних AI-агентів для N8N",
    ],
    popular: false,
  },
];

export function N8NPricing() {
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
            ПАКЕТИ І ТАРИФИ
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
                  <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
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
                    <div className="text-3xl font-bold text-primary">
                      {plan.price}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {plan.fullPrice}
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
                        <span className="text-primary mt-1">✓</span>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Обрати тариф
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
