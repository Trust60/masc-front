"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { COURSE_CONFIGS, CourseType } from "@/lib/course-config";

interface ContactFormDialogProps {
  trigger: React.ReactNode;
  courseType?: CourseType;
  title?: string;
  webhookKey?: string;
  orderType?: string;
  buttonText?: string;
}

export function ContactFormDialog({
  trigger,
  courseType,
  title,
  webhookKey,
  orderType,
  buttonText = "ХОЧУ НАВЧАТИСЬ!",
}: ContactFormDialogProps) {
  const config = courseType ? COURSE_CONFIGS[courseType] : null;
  const finalTitle = title || config?.title || "Заявка на навчання";
  const finalWebhookKey = webhookKey || config?.webhookKey || "";
  const finalOrderType = orderType || config?.orderType || "";
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const webhookData = {
        webhook_key: finalWebhookKey,
        order_type: finalOrderType,
        name: formData.name,
        phone: formData.phone,
      };

      console.log("Відправляємо дані на вебхук:", webhookData);

      const response = await fetch(
        "https://n8n.mageek.club/webhook/master-webhook",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(webhookData),
        }
      );

      if (response.ok) {
        console.log("Дані успішно відправлені на вебхук");
        setIsOpen(false);
        setFormData({ name: "", phone: "" });
      } else {
        console.error("Помилка при відправці на вебхук:", response.status);
      }
    } catch (error) {
      console.error("Помилка при відправці на вебхук:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">
            {finalTitle}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Ім'я
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Введіть ваше ім'я"
              value={formData.name}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">
              Телефон
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Введіть ваш телефон"
              value={formData.phone}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
            />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Відправляємо..." : buttonText}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
