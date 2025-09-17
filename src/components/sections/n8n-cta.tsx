"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function N8NCTA() {
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
              ПОЧАТИ НАВЧАННЯ
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Програма курсу сформована з врахуванням попиту проектів на UpWork
              і запитів ком&apos;юніті
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button size="lg" className="px-8 py-4 text-lg">
              ПОЧАТИ НАВЧАННЯ
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
