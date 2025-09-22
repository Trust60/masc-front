"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const achievements = [
  "TOP Rated+ фрилансер",
  "Власник automation-агенції",
  "На Upwork з 2017 року",
];

export function AIExpertInstructor() {
  return (
    <section className="py-20 bg-muted/30 bg-texture-waves">
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
              Навчає Максим Слободянюк
            </h2>
            <p className="text-lg text-muted-foreground">
              Засновник школи MASC, батько спільноти автоматизаторів і коучерів
              України.
            </p>
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
                    <div className="w-32 h-32 bg-gradient-orange rounded-full flex items-center justify-center text-4xl font-bold text-white">
                      МС
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Максим Слободянюк
                    </h3>

                    {/* Achievements */}
                    <div className="space-y-2 mb-6">
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
                          <span className="text-gradient-orange">✓</span>
                          <span>{achievement}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <Button variant="outline" className="w-full md:w-auto">
                        Профіль на Upwork
                      </Button>
                    </motion.div>
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
