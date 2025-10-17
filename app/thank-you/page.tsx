"use client";

import { useEffect } from "react";
import { trackEvent } from "@/components/MetaPixel";

export default function ThankYouPage() {
  useEffect(() => {
    // Track conversion event
    trackEvent("CompleteRegistration", {
      content_name: "Pre-Planning Guide Download",
      status: "completed",
    });
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12">
          {/* Success Icon */}
          <div className="mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <svg
                className="w-10 h-10 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Thank You!
          </h1>

          <p className="text-xl text-slate-600 mb-6">
            Your Pre-Planning Guide is on its way to your inbox.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-8 text-left">
            <h2 className="text-lg font-bold text-slate-800 mb-3">
              What happens next?
            </h2>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-slate-700 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>Check your email for your comprehensive Pre-Planning Guide</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-slate-700 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span>Review the guide at your own pace</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-slate-700 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
                <span>Reach out to us anytime if you have questions or want to schedule a consultation</span>
              </li>
            </ul>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="inline-block bg-slate-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-slate-800 transition-colors"
            >
              Back to Home
            </a>
            <a
              href="tel:+15551234567"
              className="inline-block bg-white text-slate-700 font-bold py-3 px-6 rounded-lg border-2 border-slate-700 hover:bg-slate-50 transition-colors"
            >
              Call Us Now
            </a>
          </div>

          <p className="text-sm text-slate-500 mt-8">
            Didn&apos;t receive the email? Check your spam folder or contact us directly.
          </p>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-slate-600">
          <p className="text-lg font-semibold mb-2">
            Ready to take the next step?
          </p>
          <p>
            Schedule a no-obligation consultation with one of our pre-planning specialists.
          </p>
        </div>
      </div>
    </main>
  );
}
