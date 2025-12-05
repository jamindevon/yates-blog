"use client";

import { useState } from "react";
import { trackEvent } from "@/components/MetaPixel";

export function PrePlanningForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    timeline: "",
    consent: false,
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      // Send form data to the API
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      // Track successful lead submission
      trackEvent("Lead", {
        content_name: "Pre-Planning Guide",
        content_category: "Lead Magnet",
      });

      setStatus("success");
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-8 rounded-lg text-center space-y-4">
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <h3 className="font-heading text-2xl font-bold">Your guide is ready.</h3>
        <div className="pt-4">
          <a
            href="/files/yates-planning-guide.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yates-gold text-white font-bold py-3 px-8 rounded-md hover:bg-yates-gold/90 transition-colors shadow-md"
          >
            Download the PDF
          </a>
        </div>
        <p className="text-sm pt-4 border-t border-green-200 mt-4">
          Prefer to talk now? A director can help 24/7.<br />
          <a href="tel:7724617000" className="font-bold hover:underline">Call (772) 461-7000</a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="firstName" className="sr-only">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-yates-gold focus:border-transparent text-gray-900 placeholder-gray-500"
            placeholder="First Name *"
          />
        </div>

        <div>
          <label htmlFor="lastName" className="sr-only">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-yates-gold focus:border-transparent text-gray-900 placeholder-gray-500"
            placeholder="Last Name *"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="sr-only">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-yates-gold focus:border-transparent text-gray-900 placeholder-gray-500"
          placeholder="Email Address *"
        />
      </div>

      <div>
        <label htmlFor="phone" className="sr-only">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-yates-gold focus:border-transparent text-gray-900 placeholder-gray-500"
          placeholder="Phone Number *"
        />
      </div>

      <div>
        <label htmlFor="timeline" className="sr-only">Timeline</label>
        <select
          id="timeline"
          name="timeline"
          value={formData.timeline}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-yates-gold focus:border-transparent text-gray-900 bg-white"
        >
          <option value="" disabled>Timeline *</option>
          <option value="Now">Now</option>
          <option value="Next 30 Days">Next 30 Days</option>
          <option value="3-12 Months">3–12 Months</option>
        </select>
      </div>

      <div className="flex items-start gap-3 pt-2">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          required
          className="mt-1 h-4 w-4 text-yates-gold focus:ring-yates-gold border-gray-300 rounded"
        />
        <label htmlFor="consent" className="text-xs text-gray-600">
          I agree to receive the guide and occasional updates. We respect your privacy.
        </label>
      </div>

      {status === "error" && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md text-sm">
          <p className="font-bold">Error</p>
          <p>{errorMessage}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-yates-gold text-white font-bold py-4 px-6 rounded-md hover:bg-yates-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg shadow-lg uppercase tracking-wide"
      >
        {status === "submitting" ? "Sending..." : "Get the Guide"}
      </button>

      <p className="text-xs text-gray-500 text-center leading-relaxed">
        We respect your privacy. We’ll only contact you to share the guide and answer questions.
      </p>
    </form>
  );
}
