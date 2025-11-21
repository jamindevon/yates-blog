import Image from "next/image";

export default function VSLPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yates-ivory to-yates-light-sage">
      {/* Hero Section with VSL */}
      <section className="relative py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Headline */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-yates-evergreen leading-tight">
              When Time is Short
              <br />
              Be Prepared
            </h1>
            <p className="text-lg md:text-xl text-yates-deep-green/80 max-w-2xl mx-auto">
              A guide to help your family make confident, loving decisions
            </p>
          </div>

          {/* Video Placeholder */}
          <div className="relative aspect-video bg-gradient-to-br from-yates-evergreen to-yates-deep-green rounded-2xl shadow-2xl mb-8 overflow-hidden">
            {/* Video Player Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 hover:bg-white/30 transition-all cursor-pointer group">
                  <svg
                    className="w-10 h-10 md:w-12 md:h-12 text-white ml-1 group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-white/90 text-sm md:text-base font-medium">
                  Click to watch the video
                </p>
              </div>
            </div>

            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-white rounded-full"></div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mb-12">
            <button className="bg-yates-gold hover:bg-yates-gold/90 text-white font-bold text-lg md:text-xl py-4 px-12 rounded-lg shadow-xl transition-all transform hover:scale-105">
              Download the Free Guide
            </button>
            <p className="text-yates-deep-green/60 text-sm mt-3">
              No credit card required • Instant access
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-yates-evergreen">
            Why Thousands of Families Trust Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-yates-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-yates-evergreen">
                Save Time
              </h3>
              <p className="text-yates-deep-green/70">
                Make important decisions now, not during a crisis
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-yates-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-yates-evergreen">
                Protect Your Family
              </h3>
              <p className="text-yates-deep-green/70">
                Remove the burden from your loved ones
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-yates-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-yates-evergreen">
                Peace of Mind
              </h3>
              <p className="text-yates-deep-green/70">
                Know everything is taken care of
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-yates-evergreen">
            What Families Are Saying
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yates-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-yates-deep-green/80 mb-4 italic">
                &quot;This guide made a difficult conversation with my family so much easier. I&apos;m grateful we planned ahead.&quot;
              </p>
              <p className="text-yates-evergreen font-semibold">
                - Sarah M., Fort Pierce
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yates-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-yates-deep-green/80 mb-4 italic">
                &quot;The Yates family has served our community for generations. I trust them completely with my pre-planning.&quot;
              </p>
              <p className="text-yates-evergreen font-semibold">
                - Robert T., Port St. Lucie
              </p>
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
            Get Your Free Guide Today
          </h2>
          <p className="text-yates-ivory/90 text-lg mb-8">
            Download your comprehensive pre-planning checklist and start protecting your family now.
          </p>
          <button className="bg-yates-gold hover:bg-yates-gold/90 text-white font-bold text-lg md:text-xl py-4 px-12 rounded-lg shadow-xl transition-all transform hover:scale-105">
            Download Now - It&apos;s Free
          </button>
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
