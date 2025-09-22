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
import Link from "next/link";

const courses = [
  {
    id: 1,
    badge: "Топ курс",
    badgeColor: "bg-green-100 text-green-800",
    title: "Автоматизатор",
    duration: "8 тижнів",
    students: "1000+ студентів",
    description:
      "Опануйте інструменти для автоматизації бізнес-процесів та підвищення ефективності",
    price: "від 3000 грн/міс",
    link: "/automator",
  },
  {
    id: 2,
    badge: "Новинка",
    badgeColor: "bg-blue-100 text-blue-800",
    title: "N8N",
    duration: "6 тижнів",
    students: "70+ студентів",
    description:
      "Інтеграційна платформа для автоматизації процесів без написання коду",
    price: "від 1700 грн/міс",
    link: "/n8n",
  },
  {
    id: 3,
    badge: "Бестселер",
    badgeColor: "bg-purple-100 text-purple-800",
    title: "AI-Експерт",
    duration: "12 тижнів",
    students: "320+ студентів",
    description:
      "Навчіться використовувати штучний інтелект для оптимізації робочих процесів",
    price: "від 2200 грн/міс",
    link: "/ai-expert",
  },
];

export function Courses() {
  return (
    <section id="courses" className="py-20">
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
            Популярні курси
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Оберіть свій шлях до успіху з нашими найпопулярнішими програмами
          </p>
        </motion.div>

        {/* Courses grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${course.badgeColor}`}
                    >
                      {course.badge}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <span>⏱️</span>
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>👨‍🎓</span>
                      <span>{course.students}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {course.description}
                  </p>
                </CardContent>

                <CardFooter className="flex flex-col gap-3">
                  <div className="text-lg font-semibold text-gradient-orange">
                    {course.price}
                  </div>
                  <Link href={course.link} className="w-full">
                    <Button className="w-full">Детальніше</Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
