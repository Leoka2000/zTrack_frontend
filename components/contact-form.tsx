"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import BackgroundShades from "./utils/background-shades";
import { useTranslation } from "../i18n/TranslationProvider";

export default function ContactForm() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [open, setOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = t("contactForm.errors.name");
    if (!formData.email.trim()) newErrors.email = t("contactForm.errors.emailRequired");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = t("contactForm.errors.emailInvalid");
    if (!formData.message.trim()) newErrors.message = t("contactForm.errors.message");

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    setOpen(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <div id="contact" className="min-h-screen bg-neutral-50 py-2 flex items-center justify-center">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
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
            <p className="text-gray-600 mt-4 text-lg mb-6">{t("contactForm.description")}</p>

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

          {/* Right Section */}
          <div className="bg-white rounded-2xl shadow-sm p-8 space-y-6">
            {/* Name */}
            <div>
              <label className="block font-semibold mb-2">
                {t("contactForm.labels.name")} <span style={{ color: "#82a816" }}>*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-lime-300"
              />
              {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block font-semibold mb-2">
                {t("contactForm.labels.email")} <span style={{ color: "#82a816" }}>*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-lime-300"
              />
              {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
            </div>

            {/* Message */}
            <div>
              <label className="block font-semibold mb-2">
                {t("contactForm.labels.message")} <span style={{ color: "#82a816" }}>*</span>
              </label>
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg resize-none focus:ring-2 focus:ring-lime-300"
              />
              {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <Button
              onClick={handleSubmit}
              className="group text-lg text-slate-900 h-12 w-36 font-semibold rounded-full"
            >
              <span className="mx-4.5">{t("contactForm.sendButton")}</span>
              <span className="p-1 rounded-full bg-neutral-900 flex items-center justify-center">
                <ArrowRight
                  size={48}
                  strokeWidth={1.75}
                  className="w-3 h-4 text-neutral-200 group-hover:-rotate-45 transition-transform"
                />
              </span>
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t("contactForm.dialog.title")}</DialogTitle>
            <DialogDescription>{t("contactForm.dialog.description")}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
