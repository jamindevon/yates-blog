import Image from "next/image";

export default function LeadMagnetPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yates-ivory to-yates-light-sage">
      {/* Hero Section with Lead Magnet Image */}
      <section className="relative py-12 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Headline */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-yates-evergreen leading-tight">
              When Time is Short
              <br />
              Be Prepared
            </h1>
            <p className="text-lg md:text-2xl text-yates-deep-green/80 max-w-3xl mx-auto font-medium italic">
              A guide to help your family make confident, loving decisions
            </p>
          </div>

          {/* Lead Magnet Image Preview */}
          <div className="relative max-w-2xl mx-auto mb-10">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
              {/* Placeholder for the guide image - you can replace with actual image */}
              <div className="absolute inset-0 bg-gradient-to-br from-yates-evergreen to-yates-deep-green flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
                    <svg className="w-12 h-12 md:w-14 md:h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-2">Pre-Planning Guide</h3>
                  <p className="text-white/80">Your Complete Checklist</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button className="bg-yates-gold hover:bg-yates-gold/90 text-white font-bold text-xl md:text-2xl py-5 px-16 rounded-lg shadow-xl transition-all transform hover:scale-105 mb-3">
              Download the Free Guide
            </button>
            <p className="text-yates-deep-green/60 text-sm">
              Instant download • No credit card required
            </p>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-yates-evergreen">
            What&apos;s Inside Your Free Guide
          </h2>

          <div className="space-y-6">
            {/* Benefit 1 */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-yates-gold flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-yates-evergreen mb-2">
                  Step-by-Step Planning Checklist
                </h3>
                <p className="text-yates-deep-green/70">
                  A comprehensive walkthrough of every decision you&apos;ll need to make, organized in a simple, easy-to-follow format.
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-yates-gold flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-yates-evergreen mb-2">
                  Pre-Payment Options Explained
                </h3>
                <p className="text-yates-deep-green/70">
                  Learn about protecting your arrangements from inflation and understanding different payment plans available.
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-yates-gold flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-yates-evergreen mb-2">
                  Family Conversation Guides
                </h3>
                <p className="text-yates-deep-green/70">
                  Tips and scripts to help you discuss your wishes with loved ones in a comfortable, meaningful way.
                </p>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-yates-gold flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-yates-evergreen mb-2">
                  Personalization Options
                </h3>
                <p className="text-yates-deep-green/70">
                  Discover ways to make your service uniquely yours and ensure your final celebration reflects your life and values.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-yates-light-sage rounded-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yates-evergreen">
                Family Owned & Operated Since 1935
              </h2>
              <p className="text-yates-deep-green/80 text-lg">
                For nearly 90 years, the Yates family has been honored to serve families in our community during their most difficult times.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-yates-evergreen mb-2">90+</div>
                <p className="text-yates-deep-green/70">Years of Service</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-yates-evergreen mb-2">5th</div>
                <p className="text-yates-deep-green/70">Generation Owned</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-yates-evergreen mb-2">1000s</div>
                <p className="text-yates-deep-green/70">Families Served</p>
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
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Start Planning Today
          </h2>
          <p className="text-yates-ivory/90 text-lg md:text-xl mb-8">
            Your family deserves peace of mind. Download your free guide now.
          </p>
          <button className="bg-yates-gold hover:bg-yates-gold/90 text-white font-bold text-xl md:text-2xl py-5 px-16 rounded-lg shadow-xl transition-all transform hover:scale-105">
            Get My Free Guide
          </button>
          <p className="text-yates-ivory/70 text-sm mt-4">
            Takes less than 60 seconds • Zero obligation
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
