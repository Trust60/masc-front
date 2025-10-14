"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ContactFormDialog } from "@/components/ui/contact-form-dialog";

export function AutomatorCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Готові зробити перший крок?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Приєднуйтеся до нашої спільноти та починайте свій шлях до успішної
              кар&apos;єри вже сьогодні
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ContactFormDialog
              trigger={
                <Button size="lg" className="px-8 py-4 text-lg">
                  Зареєструватися на консультацію
                </Button>
              }
              courseType="ma"
              buttonText="Зареєструватися на консультацію"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
