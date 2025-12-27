"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import BackgroundShades from "./utils/background-shades";
import { useTranslation } from "../i18n/TranslationProvider";
import emailjs from "@emailjs/browser";
import { Spinner } from "@/components/ui/spinner";

export default function ContactForm() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = t("contactForm.errors.name");
    }

    if (!formData.email.trim()) {
      newErrors.email = t("contactForm.errors.emailRequired");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("contactForm.errors.emailInvalid");
    }

    if (!formData.message.trim()) {
      newErrors.message = t("contactForm.errors.message");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    emailjs
      .send(
        "service_fqiwyki",
        "template_ynt0fsm",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "AuIf7jwhK_BBNJSFs"
      )
      .then((result) => {
        console.log("Email sent:", result.text);
        setOpen(true);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Email sending error:", error.text);
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <div
        id="contact"
        className="min-h-screen shadow-sm bg-transparent py-2 flex items-center justify-center"
      >
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="isolate relative">
            <BackgroundShades />
            <h1 className="text-4xl md:text-6xl font-medium grotesk text-gray-800">
              {t("contactForm.title")}
            </h1>
            <span
              className="grotesk font-medium md:text-6xl text-4xl
              text-[#428354]
              [background-image:linear-gradient(90deg,#428354,#defe3e)]
              [-webkit-background-clip:text]
              background-clip:text
              [-webkit-text-fill-color:transparent]"
            >
              {t("contactForm.subtitle")}
            </span>
            <p className="text-gray-600 mt-4 text-lg mb-6">
              {t("contactForm.description")}
            </p>

            <div className="w-72 md:flex hidden h-72">
              <Image
                src="/undraw-email.svg"
                alt={t("contactForm.imageAlt")}
                width={200}
                height={200}
                className="w-full"
                priority
              />
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-sm p-8 space-y-6"
          >
            <div>
              <label className="block grotesk text-neutral-700 font-semibold mb-2">
                {t("contactForm.labels.name")}{" "}
                <span className="text-lime-600">*</span>
              </label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="grotesk"
              />
              {errors.name && (
                <p className="text-sm grotesk text-red-500 mt-1">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label className="block grotesk text-neutral-700 font-semibold mb-2">
                {t("contactForm.labels.email")}{" "}
                <span className="text-lime-600">*</span>
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="grotesk"
              />
              {errors.email && (
                <p className="text-sm grotesk text-red-500 mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label className="block grotesk text-neutral-700 font-semibold mb-2">
                {t("contactForm.labels.message")}{" "}
                <span className="text-lime-600">*</span>
              </label>
              <Textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="resize-none grotesk"
              />
              {errors.message && (
                <p className="text-sm grotesk text-red-500 mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="group text-lg text-slate-900 h-10 w-36 font-semibold rounded-full flex items-center justify-center"
              disabled={loading}
            >
              <span className="mx-4.5">
                {t("contactForm.sendButton")}
              </span>
              <span className="p-1 rounded-full bg-neutral-900 flex items-center justify-center">
                {loading ? (
                  <Spinner className="w-4 h-4 text-white animate-spin" />
                ) : (
                  <ArrowRight
                    size={48}
                    strokeWidth={1.75}
                    className="w-3 h-4 text-neutral-200 group-hover:-rotate-45 transition-transform"
                  />
                )}
              </span>
            </Button>
          </form>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t("contactForm.dialog.title")}</DialogTitle>
            <DialogDescription>
              {t("contactForm.dialog.description")}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
