"use client";

import { useState } from "react";
import { trackEvent } from "@/components/MetaPixel";

export function PrePlanningForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    zipCode: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to submit form");
      }

      const data = await response.json();

      // Track successful lead submission
      trackEvent("Lead", {
        content_name: "Pre-Planning Guide",
        content_category: "Lead Magnet",
      });

      setStatus("success");

      // Redirect to the guide URL
      setTimeout(() => {
        window.location.href = data.guideUrl || "https://eguides.partnerplusmedia.com/YatesFH-V1/";
      }, 1000);
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (status === "success") {
    return (
      <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg text-center">
        <div className="flex justify-center mb-2">
          <svg className="w-12 h-12 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
          </svg>
        </div>
        <p className="font-bold text-lg mb-1">Success! Redirecting you to your guide...</p>
        <p className="text-yates-evergreen">Thank you for taking this important step.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-yates-gold focus:border-transparent text-gray-900"
            placeholder="First Name *"
          />
        </div>

        <div>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-yates-gold focus:border-transparent text-gray-900"
            placeholder="Last Name *"
          />
        </div>
      </div>

      <div>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-yates-gold focus:border-transparent text-gray-900"
          placeholder="Email Address *"
        />
      </div>

      <div>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-yates-gold focus:border-transparent text-gray-900"
          placeholder="Phone Number *"
        />
      </div>

      <div>
        <input
          type="text"
          id="zipCode"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-yates-gold focus:border-transparent text-gray-900"
          placeholder="Zip Code *"
          maxLength={5}
          pattern="[0-9]{5}"
        />
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
        className="w-full bg-yates-gold text-white font-bold py-4 px-6 rounded-md hover:bg-yates-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg shadow-lg"
      >
        {status === "submitting" ? "Sending..." : "Get My Free Guide >>"}
      </button>

      <p className="text-xs text-gray-500 text-center leading-relaxed">
        We respect your privacy. Your information will never be shared.
      </p>
    </form>
  );
}
