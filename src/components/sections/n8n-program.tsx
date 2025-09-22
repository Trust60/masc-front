"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const programModules = [
  {
    title: "МОДУЛЬ 1: ОСНОВИ N8N ТА ВІДМІННОСТІ ВІД MAKE",
    items: [
      "Порівняння N8N і Make.com: переваги, обмеження та моделі ціноутворення",
      "Технічні відмінності та філософія платформ",
      "Початкове налаштування N8N (хмарна версія VS самостійний хостинг)",
      "Розгортання N8N на власному сервері",
      "Огляд інтерфейсу та базові елементи управління",
      "Міграція сценаріїв з Make.com на N8N",
      "Сильні сторони N8N і огляд популярних юзкейсів",
    ],
  },
  {
    title: "МОДУЛЬ 2: ТЕХНІЧНА БАЗА ДЛЯ РОБОТИ З N8N",
    items: [
      "Типи нод та їх відмінності від модулів Make.com",
      "Структура даних в N8N: JSON, бінарні дані, метадані",
      "Техніки мапінгу та трансформації даних",
      "Пінування даних та його значення",
      "Вирази та змінні",
      "Функції та методи для обробки даних",
      "Потік логіки: умови, цикли, розгалуження",
      "Робота з масивами та об'єктами",
      "Обробка помилок та субворкфлоу",
      "Тригери в N8N",
      "Вебхуки та API інтеграції",
      "Робота з кодом в N8N",
      "Тестування та усунення неполадок у workflows",
    ],
  },
  {
    title: "МОДУЛЬ 3: РОБОТА З ДАНИМИ В N8N",
    items: [
      "Модулі для роботи з даними",
      "Оптимальні стратегії обробки великих обсягів даних",
      "Об'єднання та розділення даних (Merge, Split in Batches)",
      "Batch записи через API та їх оптимізація",
    ],
  },
  {
    title: "МОДУЛЬ 4: РОБОТА З AI",
    items: [
      "AI модулі в N8N: огляд та можливості",
      "Типи систем AI та їх застосування в автоматизації",
      "Огляд популярних LLM (OpenAI, Claude, Gemini, Ollama)",
      "RAG vs CAG: архітектурні підходи та випадки використання",
      "AI Tools: налаштування та використання",
      "Векторні бази даних: принципи роботи та інтеграція",
      "Агенти, ланцюги та пам'ять в AI",
    ],
  },
];

const stats = [
  { number: "04", label: "МОДУЛІ" },
  { number: "32", label: "ГОДИНИ НАВЧАННЯ" },
  { number: "10+", label: "ПРАКТИЧНИХ ЗАВДАНЬ" },
  { number: "5+", label: "РЕАЛЬНИХ ПРОЕКТІВ" },
];

export function N8NProgram() {
  return (
    <section id="program" className="py-20">
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-gradient-orange mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Program modules */}
        <div className="space-y-8">
          {programModules.map((module, index) => (
            <motion.div
              key={module.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{module.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {module.items.map((item, itemIndex) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.2 + itemIndex * 0.05,
                        }}
                        viewport={{ once: true }}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <span className="text-gradient-orange mt-1">•</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
