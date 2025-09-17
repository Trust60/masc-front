"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const scrollToProgram = () => {
  const programSection = document.getElementById("program");
  if (programSection) {
    programSection.scrollIntoView({ behavior: "smooth" });
  }
};

export function N8NHero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
        />

        {/* Floating geometric shapes */}
        <motion.div
          animate={{
            y: [0, -18, 0],
            rotate: [0, 12, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-28 left-12 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-lg rotate-12 blur-sm"
        />
        <motion.div
          animate={{
            y: [0, 22, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-36 right-12 w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-sm"
        />
        <motion.div
          animate={{
            y: [0, -14, 0],
            x: [0, 12, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-36 left-16 w-20 h-20 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-2xl rotate-45 blur-sm"
        />
      </div>

      {/* Floating feature cards */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute top-1/4 left-8 hidden lg:block"
        >
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-4 shadow-lg">
            <div className="text-2xl mb-2">🔗</div>
            <div className="text-sm font-medium text-gray-900">Workflows</div>
            <div className="text-xs text-gray-600">N8N Platform</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute top-1/3 right-8 hidden lg:block"
        >
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-4 shadow-lg">
            <div className="text-2xl mb-2">🏆</div>
            <div className="text-sm font-medium text-gray-900">Certified</div>
            <div className="text-xs text-gray-600">Specialist</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="absolute bottom-1/3 left-12 hidden lg:block"
        >
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-4 shadow-lg">
            <div className="text-2xl mb-2">⚙️</div>
            <div className="text-sm font-medium text-gray-900">No-Code</div>
            <div className="text-xs text-gray-600">Automation</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="absolute bottom-1/4 right-12 hidden lg:block"
        >
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-4 shadow-lg">
            <div className="text-2xl mb-2">💼</div>
            <div className="text-sm font-medium text-gray-900">Business</div>
            <div className="text-xs text-gray-600">Processes</div>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            КУРС{" "}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
            >
              N8N
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Станьте сертифікованим спеціалістом з автоматизації бізнес-процесів
            за допомогою N8N - потужної платформи для створення робочих потоків
            без кодування.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button size="lg" className="w-full sm:w-auto px-8 py-4 text-lg">
              Записатися на курс
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto px-8 py-4 text-lg"
              onClick={scrollToProgram}
            >
              Програма курсу
            </Button>
          </motion.div>

          {/* Mobile feature cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:hidden"
          >
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-3 text-center shadow-lg">
              <div className="text-xl mb-1">🔗</div>
              <div className="text-xs font-medium text-gray-900">Workflows</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-3 text-center shadow-lg">
              <div className="text-xl mb-1">🏆</div>
              <div className="text-xs font-medium text-gray-900">Certified</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-3 text-center shadow-lg">
              <div className="text-xl mb-1">⚙️</div>
              <div className="text-xs font-medium text-gray-900">No-Code</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-3 text-center shadow-lg">
              <div className="text-xl mb-1">💼</div>
              <div className="text-xs font-medium text-gray-900">Business</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
