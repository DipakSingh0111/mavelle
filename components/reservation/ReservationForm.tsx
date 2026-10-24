"use client";

import React, { useState } from "react";
import {
  User,
  Phone,
  Mail,
  Users,
  Calendar,
  Clock,
  MessageSquare,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";
import { ReservationFormSectionProps } from "@/types/mavelle.types";

export default function ReservationForm({ data }: ReservationFormSectionProps) {
  const booking = data;
  if (!booking) return null;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    guests: "",
    date: "",
    time: "",
    requests: "",
  });
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
    setTimeout(() => {
      setConfirmed(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        guests: "",
        date: "",
        time: "",
        requests: "",
      });
    }, 4500);
  };

  return (
    <section className="relative w-full bg-[#FCFBF8] py-16 sm:py-20 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="max-w-[1340px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <div className="lg:col-span-7">
            
            <div className="flex items-center space-x-3 mb-2">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-bold text-[#1F2923] tracking-tight">
                <span>{booking.heading?.main}</span>
                <span className="text-[#B57C3E]">{booking.heading?.highlight}</span>
              </h2>
              <div className="w-12 h-[1.5px] bg-[#B57C3E] shrink-0"></div>
            </div>

            <p className="text-[#685D57] text-xs sm:text-[13.5px] mb-8 font-normal">
              {booking.description}
            </p>

            {confirmed ? (
              <div className="p-8 bg-[#0c3829]/10 border border-[#0c3829]/20 rounded-2xl text-center py-12 text-[#0c3829]">
                <CheckCircle2 className="w-14 h-14 mx-auto mb-3 text-[#B57C3E]" />
                <h3 className="font-serif text-2xl font-bold">
                  Reservation Received!
                </h3>
                <p className="text-sm mt-2 text-stone-600 max-w-md mx-auto">
                  Thank you, {formData.name || "Guest"}. We have received your
                  booking request and will confirm your table shortly via SMS /
                  Email.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4 sm:space-y-4.5"
              >
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="w-4 h-4 text-[#B57C3E] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-white border border-[#E0D7C8] rounded-lg pl-10 pr-4 py-3 text-xs sm:text-[13.5px] text-[#1F2923] placeholder-stone-400 focus:outline-none focus:border-[#B57C3E] focus:ring-1 focus:ring-[#B57C3E] transition-all"
                    />
                  </div>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#B57C3E] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full bg-white border border-[#E0D7C8] rounded-lg pl-10 pr-4 py-3 text-xs sm:text-[13.5px] text-[#1F2923] placeholder-stone-400 focus:outline-none focus:border-[#B57C3E] focus:ring-1 focus:ring-[#B57C3E] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#B57C3E] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="email"
                      required
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-white border border-[#E0D7C8] rounded-lg pl-10 pr-4 py-3 text-xs sm:text-[13.5px] text-[#1F2923] placeholder-stone-400 focus:outline-none focus:border-[#B57C3E] focus:ring-1 focus:ring-[#B57C3E] transition-all"
                    />
                  </div>
                  <div className="relative">
                    <Users className="w-4 h-4 text-[#B57C3E] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      required
                      value={formData.guests}
                      onChange={(e) =>
                        setFormData({ ...formData, guests: e.target.value })
                      }
                      className="w-full bg-white border border-[#E0D7C8] rounded-lg pl-10 pr-9 py-3 text-xs sm:text-[13.5px] text-[#1F2923] appearance-none focus:outline-none focus:border-[#B57C3E] focus:ring-1 focus:ring-[#B57C3E] transition-all cursor-pointer"
                    >
                      <option value="" disabled>
                        Number of Guests *
                      </option>
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People</option>
                      <option value="5">5 People</option>
                      <option value="6+">6+ People</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-stone-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#B57C3E] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      className="w-full bg-white border border-[#E0D7C8] rounded-lg pl-10 pr-4 py-3 text-xs sm:text-[13.5px] text-[#1F2923] focus:outline-none focus:border-[#B57C3E] focus:ring-1 focus:ring-[#B57C3E] transition-all"
                    />
                  </div>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-[#B57C3E] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      required
                      value={formData.time}
                      onChange={(e) =>
                        setFormData({ ...formData, time: e.target.value })
                      }
                      className="w-full bg-white border border-[#E0D7C8] rounded-lg pl-10 pr-9 py-3 text-xs sm:text-[13.5px] text-[#1F2923] appearance-none focus:outline-none focus:border-[#B57C3E] focus:ring-1 focus:ring-[#B57C3E] transition-all cursor-pointer"
                    >
                      <option value="" disabled>
                        Time *
                      </option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="6:00 PM">6:00 PM</option>
                      <option value="7:00 PM">7:00 PM</option>
                      <option value="8:00 PM">8:00 PM</option>
                      <option value="9:00 PM">9:00 PM</option>
                      <option value="10:00 PM">10:00 PM</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-stone-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-[#B57C3E] absolute left-3.5 top-3.5 pointer-events-none" />
                  <textarea
                    rows={3}
                    placeholder="Special Requests (Optional)"
                    value={formData.requests}
                    onChange={(e) =>
                      setFormData({ ...formData, requests: e.target.value })
                    }
                    className="w-full bg-white border border-[#E0D7C8] rounded-lg pl-10 pr-4 py-3 text-xs sm:text-[13.5px] text-[#1F2923] placeholder-stone-400 focus:outline-none focus:border-[#B57C3E] focus:ring-1 focus:ring-[#B57C3E] transition-all resize-none"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-[#B57C3E] hover:bg-[#A36D35] text-white font-bold py-3.5 px-6 rounded-lg uppercase tracking-wider text-xs sm:text-[13px] flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <span>{booking.buttonText}</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full aspect-[4/4.8] rounded-2xl overflow-hidden shadow-2xl border border-black/10 bg-stone-900 group">
              <img
                src={booking.image}
                alt={booking.cardTitle}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.onerror = null;
                  target.src =
                    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop";
                }}
              />

              <div className="absolute right-4 bottom-4 left-4 sm:left-auto sm:max-w-[270px] bg-[#0C2B1E]/92 backdrop-blur-md rounded-xl p-4 sm:p-5 border border-white/10 shadow-2xl">
                <h3 className="font-serif font-bold text-sm sm:text-[14.5px] text-[#D39A5B] leading-snug">
                  {booking.cardTitle}
                </h3>
                <p className="text-[11px] sm:text-[11.5px] text-[#CAD6CD] mt-2 leading-relaxed">
                  {booking.cardDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
