import Image from "next/image";

export default function WebinarPage() {
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

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Event Badge */}
          <div className="text-center mb-6">
            <div className="inline-block bg-yates-gold text-white px-6 py-2 rounded-full font-bold text-sm mb-4">
              FREE LIVE EVENT
            </div>
          </div>

          {/* Headline */}
          <div className="text-center text-white mb-8">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Free Lunch & Learn Event
            </h1>
            <p className="text-xl md:text-2xl text-yates-ivory/90 max-w-3xl mx-auto mb-6">
              Pre-Planning Made Simple: What Every Family Should Know
            </p>

            {/* Event Details */}
            <div className="flex flex-wrap justify-center gap-6 text-yates-ivory/90 mb-8">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="font-semibold">Tuesday, November 5th</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold">11:30 AM - 1:00 PM</span>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-yates-evergreen mb-2">
                  Reserve Your Seat
                </h2>
                <p className="text-yates-deep-green/70 text-sm">
                  Limited seating available • Lunch provided
                </p>
              </div>

              {/* Form */}
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-yates-deep-green font-semibold mb-2 text-sm">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border-2 border-yates-warm-gray/30 rounded-lg focus:border-yates-evergreen focus:outline-none"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-yates-deep-green font-semibold mb-2 text-sm">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border-2 border-yates-warm-gray/30 rounded-lg focus:border-yates-evergreen focus:outline-none"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-yates-deep-green font-semibold mb-2 text-sm">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border-2 border-yates-warm-gray/30 rounded-lg focus:border-yates-evergreen focus:outline-none"
                    placeholder="john.smith@email.com"
                  />
                </div>

                <div>
                  <label className="block text-yates-deep-green font-semibold mb-2 text-sm">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border-2 border-yates-warm-gray/30 rounded-lg focus:border-yates-evergreen focus:outline-none"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-yates-deep-green font-semibold mb-2 text-sm">
                    Number of Guests
                  </label>
                  <select className="w-full px-4 py-3 border-2 border-yates-warm-gray/30 rounded-lg focus:border-yates-evergreen focus:outline-none">
                    <option>Just me</option>
                    <option>2 guests</option>
                    <option>3 guests</option>
                    <option>4 guests</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-yates-gold hover:bg-yates-gold/90 text-white font-bold text-lg py-4 px-8 rounded-lg shadow-lg transition-all transform hover:scale-105"
                >
                  Save My Spot
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-yates-evergreen">
            What You&apos;ll Learn
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Topic 1 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-yates-gold flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-yates-evergreen mb-2">
                  The Benefits of Pre-Planning
                </h3>
                <p className="text-yates-deep-green/70">
                  Discover how planning ahead can protect your family emotionally and financially.
                </p>
              </div>
            </div>

            {/* Topic 2 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-yates-gold flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-yates-evergreen mb-2">
                  Understanding Costs & Payment Options
                </h3>
                <p className="text-yates-deep-green/70">
                  Learn about transparent pricing and flexible pre-payment plans.
                </p>
              </div>
            </div>

            {/* Topic 3 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-yates-gold flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-yates-evergreen mb-2">
                  Personalizing Your Service
                </h3>
                <p className="text-yates-deep-green/70">
                  Explore the many ways to create a meaningful, personalized celebration of life.
                </p>
              </div>
            </div>

            {/* Topic 4 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-yates-gold flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-yates-evergreen mb-2">
                  Talking to Your Family
                </h3>
                <p className="text-yates-deep-green/70">
                  Get practical tips for starting important conversations with loved ones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Your Host Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-yates-evergreen">
            Meet Your Host
          </h2>

          <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Host Photo */}
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-yates-evergreen to-yates-deep-green flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-3">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-white text-sm">Host Photo</p>
                  </div>
                </div>
              </div>

              {/* Host Bio */}
              <div className="md:col-span-2">
                <h3 className="text-2xl md:text-3xl font-bold text-yates-evergreen mb-3">
                  Tom Conway
                </h3>
                <p className="text-yates-gold font-semibold mb-4">
                  Owner & 5th Generation Funeral Director
                </p>
                <div className="space-y-3 text-yates-deep-green/80">
                  <p>
                    Tom Conway has been serving families in Fort Pierce and Port St. Lucie for over three decades. As a fifth-generation funeral director, he brings both professional expertise and genuine compassion to every family he serves.
                  </p>
                  <p>
                    &quot;Pre-planning isn&apos;t just about making arrangements—it&apos;s about giving your family the gift of peace of mind during a difficult time. I look forward to sharing what I&apos;ve learned over the years to help you and your family.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-16 px-4 bg-yates-light-sage">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-yates-evergreen">
            Event Details
          </h2>

          <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-yates-evergreen mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  When
                </h3>
                <p className="text-yates-deep-green/80">
                  <strong>Tuesday, November 5th, 2024</strong><br />
                  11:30 AM - 1:00 PM
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-yates-evergreen mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Where
                </h3>
                <p className="text-yates-deep-green/80">
                  <strong>Yates Funeral Home</strong><br />
                  Fort Pierce, FL
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-yates-evergreen mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Duration
                </h3>
                <p className="text-yates-deep-green/80">
                  90 minutes including Q&A<br />
                  Light lunch will be served
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-yates-evergreen mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Cost
                </h3>
                <p className="text-yates-deep-green/80">
                  <strong className="text-yates-gold text-xl">100% FREE</strong><br />
                  No obligation required
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-16 px-4 overflow-hidden"
        style={{
          backgroundImage: 'url(/images/BG%20Photo%20Yates.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(45, 80, 22, 0.85)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-yates-evergreen/80 to-yates-deep-green/80 z-0"></div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Seats Are Limited
          </h2>
          <p className="text-yates-ivory/90 text-lg mb-8">
            Reserve your spot today for this complimentary lunch & learn event.
          </p>
          <button className="bg-yates-gold hover:bg-yates-gold/90 text-white font-bold text-xl md:text-2xl py-5 px-12 rounded-lg shadow-xl transition-all transform hover:scale-105">
            Register Now
          </button>
          <p className="text-yates-ivory/70 text-sm mt-4">
            Lunch included • Bring a guest
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
