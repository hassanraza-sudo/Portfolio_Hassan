import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  Send,
  Check,
  Loader2,
} from "lucide-react";
import { PERSONAL_INFO } from "../constants";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    // Simulate reliable API post
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000); // Reset after 4s
    }, 1500);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#020617] text-white relative">
      {/* Divider line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-slate-800/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="font-mono text-xs text-blue-500 uppercase tracking-widest font-semibold">
            08 / Inquiry
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-100 tracking-tight">
            Initiate a{" "}
            <span className="bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent">
              Professional Inquiry
            </span>
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed font-light">
            Have an international remote opening or contract? Drop an email and
            let's compile solutions together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-start">
          {/* Contact Left - Metadata info */}
          <div className="lg:col-span-5 flex flex-col items-start gap-6 text-left">
            <h3 className="font-display text-lg font-bold text-slate-100 tracking-tight">
              Contact Specifications
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed font-sans">
              Feel free to reach out via the secure form, or connect directly
              through open-source and professional networks. I reply to all
              qualified recruiters within 12 hours.
            </p>

            <div className="flex flex-col gap-4 w-full pt-2">
              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-slate-900/30">
                <div className="p-2.5 rounded-lg bg-slate-950 border border-white/5 text-blue-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-mono tracking-wider text-slate-500 font-bold">
                    Location
                  </div>
                  <div className="text-xs font-bold text-slate-200 font-sans">
                    Pakistan &bull; Remote Friendly
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-slate-900/30">
                <div className="p-2.5 rounded-lg bg-slate-950 border border-white/5 text-sky-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-mono tracking-wider text-slate-500 font-bold">
                    Primary Email
                  </div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-xs font-bold text-slate-200 hover:text-blue-400 transition-colors font-sans"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links block */}
            <div className="space-y-3 w-full mt-4">
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                Directories & Networks
              </h4>
              <div className="flex gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono font-medium text-slate-300 hover:text-white bg-slate-950 border border-white/5 px-4 py-2.5 rounded-xl hover:border-slate-700 transition-all cursor-pointer"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono font-medium text-slate-300 hover:text-blue-400 bg-slate-950 border border-white/5 px-4 py-2.5 rounded-xl hover:border-slate-700 transition-all cursor-pointer"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
