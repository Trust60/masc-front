"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-r from-primary to-primary/80"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Готові зробити перший крок?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Приєднуйтеся до нашої спільноти та починайте свій шлях до успішної
            кар&apos;єри вже сьогодні
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              variant="outline"
              className="font-semibold text-black"
            >
              Зареєструватися на консультацію
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
