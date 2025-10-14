"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ContactFormDialog } from "@/components/ui/contact-form-dialog";

export function AIExpertCTA() {
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
              НАВЧАЙСЯ У ЕКСПЕРТІВ, ЯКІ ЗАРОБЛЯЮТЬ $30-50 ЗА ГОДИНУ
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Обирай тих, хто пройшов шлях з 0 і знає, як працювати до 4-5 годин
              на добу і знаходити постійних замовників дистанційно.
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
                  ХОЧУ НАВЧАТИСЬ!
                </Button>
              }
              courseType="ai"
              buttonText="ХОЧУ НАВЧАТИСЬ!"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
