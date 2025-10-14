export const COURSE_CONFIGS = {
  ai: {
    webhookKey: "create-update-contact-n8n",
    orderType: "order_yaroslava_site_ai",
    title: "Заявка на навчання AI Expert",
  },
  n8n: {
    webhookKey: "create-update-contact-n8n",
    orderType: "order_yaroslava_site_n8n",
    title: "Заявка на навчання N8N",
  },
  ma: {
    webhookKey: "create-update-contact-n8n",
    orderType: "order_yaroslava_site_ma",
    title: "Заявка на навчання Marketing Automation",
  },
} as const;

export type CourseType = keyof typeof COURSE_CONFIGS;
