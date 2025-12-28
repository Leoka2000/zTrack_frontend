"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
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
        className="min-h-screen  bg-transparent py-2 flex items-center justify-center"
      >
        <div className="w-full  grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4 md:px-0">
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

            <div className="w-52 md:flex hidden h-72">
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
                className={`grotesk ${errors.name ? "border-red-500 focus-visible:ring-red-500" : ""}`}
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
                className={`grotesk ${errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}`}
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
                className={`resize-none grotesk ${errors.message ? "border-red-500 focus-visible:ring-red-500" : ""}`}
              />
              {errors.message && (
                <p className="text-sm grotesk text-red-500 mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="group text-lg text-slate-900 h-12 w-44 font-semibold rounded-full flex items-center justify-center transition-all bg-[#d7f448] hover:bg-[#c3e13f] border-none"
              disabled={loading}
            >
              <span className="mx-2">
                {t("contactForm.sendButton")}
              </span>
              <span className="p-1.5 rounded-full ml-12 bg-neutral-900 flex items-center justify-center shrink-0">
                {loading ? (
                  <Spinner className="w-4 h-4 text-white" />
                ) : (
                  <ArrowRight
                    size={16}
                    strokeWidth={2.5}
                    className="text-neutral-200 group-hover:-rotate-45 transition-transform"
                  />
                )}
              </span>
            </Button>
          </form>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[450px] rounded-3xl bg-white border-none shadow-2xl p-0 overflow-hidden">
          <div className="flex flex-col items-center justify-center py-12 px-8 text-center space-y-5">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
            
            <div className="space-y-2">
              <DialogTitle className="text-xl font-bold grotesk text-gray-900">
                {t("contactForm.dialog.title")}
              </DialogTitle>
              <DialogDescription className="text-lg text-gray-600 leading-relaxed">
                {t("contactForm.dialog.description")}
              </DialogDescription>
            </div>

            <Button 
              onClick={() => setOpen(false)}
              className="mt-4 w-full rounded-full h-12 text-lg  text-neutral-800 bg-neutral-800 border-none transition-colors"
            >
              <span className="mx-3 grotesk">Close</span>
              <span className="p-1.5 rounded-full bg-neutral-900 flex items-center justify-center">
                <ArrowRight className="w-3 h-4 text-neutral-200" />
              </span>
           
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}