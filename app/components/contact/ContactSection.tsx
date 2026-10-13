"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";
import { ContactSectionProps } from "@/types/mavelle.types";

export default function ContactSection({ data }: ContactSectionProps) {
  const contactData = data;
  if (!contactData) return null;

  const info = contactData.info;
  const form = contactData.form;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <section className="relative w-full bg-[#FCFBF8] py-16 sm:py-20 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="max-w-[1340px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Heading with trailing golden line */}
              <div className="flex items-center space-x-3 mb-3">
                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-bold text-[#1F2923] tracking-tight">
                  <span>{info.heading?.main}</span>
                  <span className="text-[#B57C3E]">{info.heading?.highlight}</span>
                </h2>
                <div className="w-12 h-[1.5px] bg-[#B57C3E] shrink-0"></div>
              </div>

              {/* Subtitle */}
              <p className="text-[#685D57] text-sm sm:text-base leading-relaxed mb-10 max-w-md font-normal">
                {info.description}
              </p>

              {/* Contact Info Items List */}
              <div className="space-y-7 sm:space-y-8">
                {/* 1. Location */}
                <div className="flex items-start gap-5 sm:gap-6 group">
                  <div className="w-16 h-16 sm:w-[68px] sm:h-[68px] rounded-full bg-[#F5EFE6] text-[#B57C3E] flex items-center justify-center shrink-0 border border-[#E8DEC8] group-hover:bg-[#EBDCC5] transition-colors shadow-xs mt-0.5">
                    <MapPin className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2]" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg sm:text-xl lg:text-[22px] text-[#1F2923]">
                      Our Location
                    </h3>
                    <div className="text-sm sm:text-[15px] lg:text-base text-[#685D57] leading-relaxed mt-1.5">
                      <p>123 Main Street, Suite 100,</p>
                      <p>New York, NY 10001, USA</p>
                    </div>
                  </div>
                </div>

                {/* 2. Phone */}
                <div className="flex items-start gap-5 sm:gap-6 group">
                  <div className="w-16 h-16 sm:w-[68px] sm:h-[68px] rounded-full bg-[#F5EFE6] text-[#B57C3E] flex items-center justify-center shrink-0 border border-[#E8DEC8] group-hover:bg-[#EBDCC5] transition-colors shadow-xs mt-0.5">
                    <Phone className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2]" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg sm:text-xl lg:text-[22px] text-[#1F2923]">
                      Call Us
                    </h3>
                    <div className="text-sm sm:text-[15px] lg:text-base text-[#685D57] leading-relaxed mt-1.5">
                      <p>
                        <a
                          href="tel:+10000000000"
                          className="hover:text-[#B57C3E] transition-colors"
                        >
                          +1 00000 00000
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3. Email */}
                <div className="flex items-start gap-5 sm:gap-6 group">
                  <div className="w-16 h-16 sm:w-[68px] sm:h-[68px] rounded-full bg-[#F5EFE6] text-[#B57C3E] flex items-center justify-center shrink-0 border border-[#E8DEC8] group-hover:bg-[#EBDCC5] transition-colors shadow-xs mt-0.5">
                    <Mail className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2]" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg sm:text-xl lg:text-[22px] text-[#1F2923]">
                      Email Us
                    </h3>
                    <div className="text-sm sm:text-[15px] lg:text-base text-[#685D57] leading-relaxed mt-1.5">
                      <p>
                        <a
                          href="mailto:info@xyz.com"
                          className="hover:text-[#B57C3E] transition-colors"
                        >
                          info@xyz.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Send Us a Message Form Card */}
          <div className="lg:col-span-7 bg-[#FAF7F2] rounded-2xl p-6 sm:p-10 border border-[#ECE4D8] shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
            {/* Form Header */}
            <div className="flex items-center space-x-3 mb-2">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-serif font-bold text-[#1F2923] tracking-tight">
                <span>{form.heading?.main}</span>
                <span className="text-[#B57C3E]">{form.heading?.highlight}</span>
              </h2>
              <div className="w-12 h-[1.5px] bg-[#B57C3E] shrink-0"></div>
            </div>

            <p className="text-[#685D57] text-xs sm:text-[13.5px] mb-8 font-normal">
              {form.description}
            </p>

            {submitted ? (
              <div className="p-6 bg-[#0c3829]/10 border border-[#0c3829]/20 rounded-xl text-center py-10 text-[#0c3829]">
                <CheckCircle2 className="w-12 h-12 mx-auto mb-3 text-[#B57C3E]" />
                <h3 className="font-serif text-xl font-bold">Thank You!</h3>
                <p className="text-sm mt-1 text-stone-600">
                  Your message has been sent successfully. We will get back to
                  you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* Row 1: Name and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-white border border-[#E0D7C8] rounded-lg px-4 py-3 text-xs sm:text-[13.5px] text-[#1F2923] placeholder-stone-400 focus:outline-none focus:border-[#B57C3E] focus:ring-1 focus:ring-[#B57C3E] transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full bg-white border border-[#E0D7C8] rounded-lg px-4 py-3 text-xs sm:text-[13.5px] text-[#1F2923] placeholder-stone-400 focus:outline-none focus:border-[#B57C3E] focus:ring-1 focus:ring-[#B57C3E] transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Email and Subject Dropdown */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-white border border-[#E0D7C8] rounded-lg px-4 py-3 text-xs sm:text-[13.5px] text-[#1F2923] placeholder-stone-400 focus:outline-none focus:border-[#B57C3E] focus:ring-1 focus:ring-[#B57C3E] transition-all"
                    />
                  </div>
                  <div className="relative">
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full bg-white border border-[#E0D7C8] rounded-lg px-4 py-3 text-xs sm:text-[13.5px] text-[#1F2923] appearance-none focus:outline-none focus:border-[#B57C3E] focus:ring-1 focus:ring-[#B57C3E] transition-all cursor-pointer"
                    >
                      <option value="" disabled>
                        Subject *
                      </option>
                      {form.subjects.map((sub, i) => (
                        <option key={i} value={sub}>
                          {sub}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-stone-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Row 3: Message Textarea */}
                <div>
                  <textarea
                    rows={4}
                    required
                    placeholder="Your Message *"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-white border border-[#E0D7C8] rounded-lg px-4 py-3 text-xs sm:text-[13.5px] text-[#1F2923] placeholder-stone-400 focus:outline-none focus:border-[#B57C3E] focus:ring-1 focus:ring-[#B57C3E] transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full bg-[#B57C3E] hover:bg-[#A36D35] text-white font-bold py-3.5 px-6 rounded-lg uppercase tracking-wider text-xs sm:text-[13px] flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <span>{form.buttonText}</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
