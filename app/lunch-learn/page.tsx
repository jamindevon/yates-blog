import { LunchLearnForm } from "@/components/LunchLearnForm";
import Image from "next/image";

export const metadata = {
  title: "Lunch & Learn Event | Yates Funeral Home",
  description: "Join us for a FREE lunch while learning about the benefits of planning ahead. November 5 at 11:30 AM.",
};

export default function LunchLearnPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yates-ivory to-yates-light-sage">
      {/* Hero Section */}
      <section
        className="relative py-12 md:py-20 px-4 overflow-hidden"
        style={{
          backgroundImage: 'url(/images/BG%20Photo%20Yates.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(45, 80, 22, 0.85)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-yates-evergreen/80 to-yates-deep-green/80 z-0"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Back to Home Link */}
          <div className="mb-6">
            <a
              href="/"
              className="inline-flex items-center text-white hover:text-yates-gold transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </a>
          </div>

          {/* Two Column Layout: Flyer + Registration Form */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left Column - Flyer Image */}
            <div className="hidden md:block">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                <Image
                  src="/images/Lunch&LearnFlyer_Main.jpg"
                  alt="Lunch & Learn Event - November 5 at 11:30 AM"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right Column - Registration Form */}
            <div>
              {/* Mobile Flyer (visible only on mobile) */}
              <div className="md:hidden mb-6">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] max-w-sm mx-auto">
                  <Image
                    src="/images/Lunch&LearnFlyer_Main.jpg"
                    alt="Lunch & Learn Event - November 5 at 11:30 AM"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Registration Form Card */}
              <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8">
                <div className="text-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-yates-evergreen mb-2">
                    RSVP Today — Seating is Limited!
                  </h2>
                  <p className="text-yates-deep-green/70 text-sm">
                    Reserve your spot by clicking "Sign Up" to attend.
                  </p>
                </div>
                <LunchLearnForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yates-evergreen text-center">
            Event Details
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-yates-gold flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-yates-evergreen mb-1">Date & Time</h3>
                  <p className="text-yates-deep-green/80">November 5 at 11:30 AM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-yates-gold flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-yates-evergreen mb-1">Location</h3>
                  <p className="text-yates-deep-green/80">
                    Yates Funeral Home & Cremation Services<br />
                    7951 S US Hwy 1<br />
                    Port St. Lucie, FL
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-yates-gold flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-yates-evergreen mb-1">Cost</h3>
                  <p className="text-yates-deep-green/80 font-semibold">FREE - Lunch Provided!</p>
                </div>
              </div>
            </div>

            {/* Right Column - What to Expect */}
            <div className="bg-yates-light-sage rounded-lg p-6">
              <h3 className="font-bold text-xl text-yates-evergreen mb-4">What to Expect</h3>
              <ul className="space-y-3 text-yates-deep-green/80">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-yates-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Complimentary lunch for all attendees</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-yates-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Learn about the benefits of pre-planning</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-yates-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Understand pre-payment options</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-yates-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Q&A with our experienced staff</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-yates-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>No pressure or obligation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Attend Section */}
        <div className="bg-gradient-to-b from-white to-yates-ivory rounded-xl shadow-2xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yates-evergreen text-center">
            Why Attend?
          </h2>
          <p className="text-lg text-yates-deep-green/80 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
            Planning ahead doesn&apos;t have to be overwhelming. Join us for this informative session
            where we&apos;ll guide you through the process of creating a meaningful plan that reflects
            your wishes and provides peace of mind for you and your loved ones.
          </p>
          <p className="text-center text-yates-evergreen font-semibold text-lg">
            Seating is limited — reserve your spot today!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-yates-deep-green text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-yates-ivory/70">
            &copy; {new Date().getFullYear()} Yates Funeral Home. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
