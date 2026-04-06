"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const contactDetails = [
  {
    icon: "call",
    heading: "Phone",
    detail: "+1 (555) 234-8890",
  },
  {
    icon: "mail",
    heading: "Email",
    detail: "concierge@curatedestate.com",
  },
  {
    icon: "location_on",
    heading: "Location",
    detail: "Lincoln, Nebraska",
  },
];

const services = [
  "Lawn Maintenance",
  "Landscape Construction",
  "Irrigation & Drainage",
  "Landscape Design",
];

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    try {
      await fetch(
        "https://services.leadconnectorhq.com/hooks/65kEQzIcKIZK0FhxPH92/webhook-trigger/ffa0b9cd-dee9-4368-83af-4b313a349448",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
    } catch (_) {
      // Fail silently — still show success to user
    }
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-32 px-8 md:px-12 bg-ce-surface">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Contact details */}
          <div className="w-full lg:w-1/3">
            <span className="font-label uppercase tracking-widest text-ce-secondary text-sm mb-6 block">
              Get in Touch
            </span>
            <h2 className="font-headline text-5xl text-ce-primary mb-8 leading-tight">
              Begin Your Home's Transformation
            </h2>
            <p className="text-ce-on-surface-variant text-lg mb-12 leading-relaxed">
              Whether you are looking for seasonal stewardship or full concierge
              management, our team is ready to curate your landscape's legacy.
            </p>

            <div className="space-y-10">
              {contactDetails.map((item) => (
                <div key={item.heading} className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-ce-surface-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-ce-primary">
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-ce-primary mb-1">
                      {item.heading}
                    </h4>
                    <p className="text-ce-on-surface-variant whitespace-pre-line">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="w-full lg:w-2/3 bg-ce-surface-container-low p-12 md:p-16 rounded-[1rem] border border-ce-outline-variant/10 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[360px] text-center gap-6">
                <span className="material-symbols-outlined text-ce-primary text-6xl">
                  check_circle
                </span>
                <h3 className="font-headline text-4xl text-ce-primary">
                  Inquiry Sent
                </h3>
                <p className="text-ce-on-surface-variant text-lg max-w-sm">
                  Thank you. A member of our home team will be in touch
                  within one business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <div className="space-y-2">
                  <label
                    className="block text-sm font-label uppercase tracking-widest text-ce-secondary"
                    htmlFor="name"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Evelyn Thorne"
                    required
                    className="w-full bg-ce-surface border-none focus:outline-none focus:ring-2 focus:ring-ce-primary/20 rounded-[0.75rem] py-4 px-6 text-ce-on-surface placeholder:text-ce-on-surface-variant/40"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    className="block text-sm font-label uppercase tracking-widest text-ce-secondary"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="evelyn@example.com"
                    required
                    className="w-full bg-ce-surface border-none focus:outline-none focus:ring-2 focus:ring-ce-primary/20 rounded-[0.75rem] py-4 px-6 text-ce-on-surface placeholder:text-ce-on-surface-variant/40"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    className="block text-sm font-label uppercase tracking-widest text-ce-secondary"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="(402) 555-0100"
                    className="w-full bg-ce-surface border-none focus:outline-none focus:ring-2 focus:ring-ce-primary/20 rounded-[0.75rem] py-4 px-6 text-ce-on-surface placeholder:text-ce-on-surface-variant/40"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    className="block text-sm font-label uppercase tracking-widest text-ce-secondary"
                    htmlFor="service"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    className="w-full bg-ce-surface border-none focus:outline-none focus:ring-2 focus:ring-ce-primary/20 rounded-[0.75rem] py-4 px-6 text-ce-on-surface appearance-none"
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label
                    className="block text-sm font-label uppercase tracking-widest text-ce-secondary"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Tell us about your home and vision..."
                    rows={7}
                    required
                    className="w-full bg-ce-surface border-none focus:outline-none focus:ring-2 focus:ring-ce-primary/20 rounded-[0.75rem] py-4 px-6 text-ce-on-surface placeholder:text-ce-on-surface-variant/40 resize-none"
                  />
                </div>

                <div className="md:col-span-2 pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="rounded-full bg-ce-primary text-ce-on-primary px-12 py-6 text-base font-medium hover:opacity-90 transition-opacity flex items-center gap-3 disabled:opacity-60"
                  >
                    {loading ? "Sending..." : "Send Inquiry"}
                    {!loading && (
                      <span className="material-symbols-outlined">arrow_forward</span>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
