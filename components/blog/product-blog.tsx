"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import emailjs from "@emailjs/browser";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useTranslation } from "../../i18n/TranslationProvider";

export default function ProductBlog() {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    livestock: "",
    quantity: "",
    area: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setMounted(true);
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.match(/^\S+@\S+\.\S+$/))
      newErrors.email = "Valid email required";
    if (!formData.livestock)
      newErrors.livestock = "Please select livestock type";
    if (!formData.quantity || formData.quantity <= 0)
      newErrors.quantity = "Enter a valid amount";
    if (!formData.area.trim()) newErrors.area = "Area size is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      const result = await emailjs.send(
        "service_fqiwyki",
        "template_x3agq24",
        {
          name: formData.name,
          email: formData.email,
          livestock: formData.livestock,
          quantity: formData.quantity,
          area: formData.area,
          notes: formData.notes || "No additional notes provided.",
        },
        "AuIf7jwhK_BBNJSFs"
      );

      console.log("🚀 EmailJS Result:", result.text);
      setIsSuccess(true);

      setFormData({
        name: "",
        email: "",
        livestock: "",
        quantity: "",
        area: "",
        notes: "",
      });
      setErrors({});
    } catch (error) {
      console.error("❌ EmailJS Error:", error);
      alert(
        "Something went wrong while sending the request. Please check your connection and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
    if (!newOpen) {
      setTimeout(() => setIsSuccess(false), 300);
    }
  };

  if (!mounted) return null;

  return (
    <section className="bg-gray-50 flex items-center justify-center my-5 mt-3">
      <div className="w-full bg-neutral-100 rounded-2xl shadow-sm overflow-hidden flex flex-col md:flex-row">

        <div className="md:w-5/6 relative flex items-center justify-center min-h-[300px]">
          <div className="absolute top-3 left-3 md:top-6 md:left-6 z-10 bg-black/70 text-white px-3 py-1.5 rounded-lg text-sm font-medium">
            {t("productBlog.date")}
          </div>
          <Image
            src="/cow-eartag.png"
            alt={t("productBlog.image_alt")}
            width={400}
            height={400}
            priority
            className="object-contain max-w-[50%] h-auto"
          />
        </div>

        <div className="md:w-5/4 p-8 md:p-12 flex flex-col justify-between">
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-center md:gap-3 gap-14">
              <div className="ms-10">
                <Image
                  src="/zanelogo.png"
                  alt={t("productBlog.logo_alt")}
                  width={50}
                  height={50}
                  className="brightness-0 w-24"
                  priority
                />
              </div>
              <div>
                <h3 className="font-semibold text-base grotesk text-gray-900">
                  {t("productBlog.product_name")}
                </h3>
                <p className="text-sm text-gray-500">
                  {t("productBlog.product_subtitle")}
                </p>
              </div>
            </div>
            <span className="bg-black text-[#c3e13f] md:flex hidden px-4 py-2 rounded-full text-sm font-medium">
              {t("productBlog.stock_status")}
            </span>
          </div>

          <div className="flex-grow">
            <h1 className="text-3xl grotesk md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {t("productBlog.heading")}
            </h1>
            <p className="text-gray-600 2xl:text-lg text-sm leading-relaxed">
              {t("productBlog.description")}
            </p>
          </div>

          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
            <Dialog open={open} onOpenChange={handleOpenChange}>
              <DialogTrigger asChild>
                <Button className="text-lg h-12 font-semibold rounded-full transition-colors group">
                  <span className="mx-6">{t("productBlog.cta")}</span>
                  <span className="p-1.5 rounded-full bg-neutral-900 flex items-center justify-center">
                    <ArrowRight
                      size={48}
                      strokeWidth={1.75}
                      className="w-3 h-4 text-neutral-200 transition-transform duration-300 group-hover:-rotate-45"
                    />
                  </span>
                </Button>
              </DialogTrigger>

             
              <DialogContent className="sm:max-w-[500px] 2xl:max-w-[1000px] 2xl:p-16 max-h-[90vh] overflow-y-auto rounded-3xl bg-white border-none shadow-2xl">
                {!isSuccess ? (
                  <>
                    <form onSubmit={handleSubmit} className="space-y-5 2xl:space-y-8 py-4">
                      {/* Name & Email Row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 2xl:gap-8">
                        <div className="space-y-1 2xl:space-y-3 min-w-0">
                          <Label
                            htmlFor="name"
                            className={`2xl:text-xl ${errors.name ? "text-red-500" : ""}`}
                          >
                            {t("quoteForm.label_name")}
                          </Label>
                          <Input
                            id="name"
                            disabled={loading}
                            className={`w-full 2xl:h-14 2xl:text-lg ${
                              errors.name
                                ? "border-red-500 focus-visible:ring-red-500"
                                : ""
                            }`}
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="space-y-1 2xl:space-y-3 min-w-0">
                          <Label
                            htmlFor="email"
                            className={`2xl:text-xl ${errors.email ? "text-red-500" : ""}`}
                          >
                            {t("quoteForm.label_email")}
                          </Label>
                          <Input
                            id="email"
                            disabled={loading}
                            className={`w-full 2xl:h-14 2xl:text-lg ${
                              errors.email
                                ? "border-red-500 focus-visible:ring-red-500"
                                : ""
                            }`}
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                            type="email"
                            placeholder="john@farm.com"
                          />
                        </div>
                      </div>

                      {/* Livestock & Quantity Row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 2xl:gap-8">
                        <div className="space-y-1 2xl:space-y-3 min-w-0">
                          <Label
                            className={`2xl:text-xl ${errors.livestock ? "text-red-500" : ""}`}
                          >
                            {t("quoteForm.label_livestock")}
                          </Label>
                          <Select
                            disabled={loading}
                            value={formData.livestock}
                            onValueChange={(val) =>
                              setFormData({ ...formData, livestock: val })
                            }
                          >
                            <SelectTrigger
                              className={`w-full 2xl:h-14 2xl:text-lg ${
                                errors.livestock ? "border-red-500" : ""
                              }`}
                            >
                              <SelectValue
                                placeholder={t("quoteForm.select_placeholder")}
                              />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="cattle">
                                {t("quoteForm.option_cattle")}
                              </SelectItem>
                              <SelectItem value="sheep">
                                {t("quoteForm.option_sheep")}
                              </SelectItem>
                              <SelectItem value="other">
                                {t("quoteForm.option_other")}
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-1 2xl:space-y-3 min-w-0">
                          <Label
                            htmlFor="quantity"
                            className={`2xl:text-xl ${errors.quantity ? "text-red-500" : ""}`}
                          >
                            {t("quoteForm.label_quantity")}
                          </Label>
                          <Input
                            id="quantity"
                            disabled={loading}
                            type="number"
                            className={`w-full 2xl:h-14 2xl:text-lg ${
                              errors.quantity
                                ? "border-red-500 focus-visible:ring-red-500"
                                : ""
                            }`}
                            value={formData.quantity}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                quantity: e.target.value,
                              })
                            }
                            placeholder="50"
                          />
                        </div>
                      </div>

                      <div className="space-y-1 2xl:space-y-3">
                        <Label
                          htmlFor="area"
                          className={`2xl:text-xl ${errors.area ? "text-red-500" : ""}`}
                        >
                          {t("quoteForm.label_area")}
                        </Label>
                        <Input
                          id="area"
                          disabled={loading}
                          className={`w-full 2xl:h-14 2xl:text-lg ${
                            errors.area
                              ? "border-red-500 focus-visible:ring-red-500"
                              : ""
                          }`}
                          value={formData.area}
                          onChange={(e) =>
                            setFormData({ ...formData, area: e.target.value })
                          }
                          placeholder="e.g. 200 Acres"
                        />
                      </div>

                      <div className="space-y-1 2xl:space-y-3">
                        <Label htmlFor="notes" className="2xl:text-xl">
                          {t("quoteForm.label_notes")}
                        </Label>
                        <Textarea
                          id="notes"
                          disabled={loading}
                          className="resize-none w-full 2xl:text-lg 2xl:min-h-[150px]"
                          value={formData.notes}
                          onChange={(e) =>
                            setFormData({ ...formData, notes: e.target.value })
                          }
                          placeholder={t("quoteForm.notes_placeholder")}
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#d7f448] text-black hover:bg-[#c3e13f] font-bold rounded-full h-12 2xl:h-16 2xl:text-xl border-none flex items-center justify-center gap-2"
                      >
                        {loading ? (
                          <Spinner className="w-5 h-5 2xl:w-7 2xl:h-7 border-black/20 border-t-black" />
                        ) : (
                          t("quoteForm.submit")
                        )}
                      </Button>
                    </form>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 2xl:py-20 text-center space-y-4 2xl:space-y-8">
                    <div className="w-20 h-20 2xl:w-32 2xl:h-32 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-12 h-12 2xl:w-20 2xl:h-20 text-green-600" />
                    </div>
                    <h2 className="text-3xl 2xl:text-5xl font-bold grotesk text-gray-900">
                      Thank You!
                    </h2>
                    <p className="text-gray-600 max-w-xs 2xl:max-w-md 2xl:text-xl">
                      Your quote request for ZTrack has been sent successfully.
                      Our team will contact you shortly.
                    </p>
                    <Button
                      onClick={() => setOpen(false)}
                      className="mt-4 rounded-full px-8 2xl:px-12 h-12 2xl:h-16 2xl:text-xl bg-black text-white hover:bg-neutral-800"
                    >
                      Close
                      <span className="p-1.5 ml-2 rounded-full bg-neutral-900 flex items-center justify-center">
                        <ArrowRight
                          size={48}
                          strokeWidth={1.75}
                          className="w-3 h-4 text-neutral-200 transition-transform duration-300 group-hover:-rotate-45"
                        />
                      </span>
                    </Button>
                  </div>
                )}
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
}