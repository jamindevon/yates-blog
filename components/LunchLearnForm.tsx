"use client";

import { useState } from "react";
import { trackEvent } from "@/components/MetaPixel";

export function LunchLearnForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/lunch-learn", {
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

      // Track successful registration
      trackEvent("Lead", {
        content_name: "Lunch & Learn Registration",
        content_category: "Event Registration",
      });

      setStatus("success");

      // Redirect to thank you page after 2 seconds
      setTimeout(() => {
        window.location.href = "/thank-you";
      }, 2000);
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
        <p className="font-bold text-lg mb-1">Success! Your spot is reserved.</p>
        <p className="text-yates-evergreen">We look forward to seeing you!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-yates-gold focus:border-transparent text-gray-900"
          placeholder="Full Name *"
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
        {status === "submitting" ? "Reserving Your Spot..." : "Reserve My Spot"}
      </button>

      <p className="text-xs text-gray-500 text-center leading-relaxed">
        We respect your privacy. Your information will never be shared.
      </p>
    </form>
  );
}
