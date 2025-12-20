"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "./ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [errors, setErrors] = useState({})
  const [open, setOpen] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: "" })
  }

  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = () => {
    if (!validate()) return

    

    setOpen(true)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <>
      <div className="min-h-screen bg-neutral-50 p-8 flex items-center justify-center">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

  
          <div>
            <h1 className="text-5xl md:text-6xl font-bold grotesk text-gray-800 mb-2">
              Send Us
            </h1>
            <h2
              className="text-5xl md:text-6xl grotesk font-bold mb-6"
              style={{ color: "#82a816" }}
            >
              A Message
            </h2>
            <p className="text-gray-600 text-lg">
              Fill out the form below and our team will<br />
              get back to you as soon as possible.
            </p>
          </div>

         
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">

         
            <div>
              <label className="block font-semibold mb-2">
                Name <span style={{ color: "#82a816" }}>*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-lime-300"
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block font-semibold mb-2">
                Email <span style={{ color: "#82a816" }}>*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-lime-300"
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block font-semibold mb-2">
                Message <span style={{ color: "#82a816" }}>*</span>
              </label>
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg resize-none focus:ring-2 focus:ring-lime-300"
              />
              {errors.message && (
                <p className="text-sm text-red-500 mt-1">{errors.message}</p>
              )}
            </div>

           
            <Button
              onClick={handleSubmit}
              className="group text-lg text-slate-900 h-10 w-32 font-semibold rounded-full"
            >
              <span className="mx-4.5">Send</span>
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
            <DialogTitle>Done!</DialogTitle>
            <DialogDescription>
              Message successfully sent.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}
