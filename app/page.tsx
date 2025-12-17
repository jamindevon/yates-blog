import Link from "next/link";
import Image from "next/image";
import { HeroVideo } from "@/components/HeroVideo";
import { ContactButton } from "@/components/ContactButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-yates-ivory text-yates-deep-green">

      {/* Hero Section */}
      <section className="relative h-[calc(100vh-5rem)] flex flex-col justify-center overflow-hidden">
        {/* Background Video */}
        <HeroVideo />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white mt-[-40px]">
          <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-md">
            Compassionate Care for St. Lucie Families — Since 1935
          </h1>
          <p className="text-lg md:text-xl text-yates-ivory/95 max-w-2xl mx-auto font-body mb-8 drop-shadow">
            If a death has occurred or is expected soon, we’re here 24/7. Our family has served the Treasure Coast with dignity, clarity, and care for five generations.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <ContactButton href="tel:7724617000" className="bg-yates-gold hover:bg-yates-gold/90 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition-transform hover:scale-105">
              Call a Director Now
            </ContactButton>
            <Link href="/planning-guide" className="bg-white text-yates-evergreen hover:bg-yates-ivory px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition-transform hover:scale-105">
              Get the Free Planning Guide
            </Link>
            <Link href="/locations" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-bold text-lg transition-colors">
              Find a Location
            </Link>
          </div>
        </div>

        {/* Trust Bar - Positioned at bottom */}
        <div className="absolute bottom-0 left-0 right-0 bg-yates-deep-green text-yates-ivory py-6 border-t border-yates-gold/20 z-20">
          <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-6 md:gap-12 text-sm md:text-base font-bold tracking-widest uppercase opacity-90 text-center">
            <span>Family-Owned</span>
            <span className="hidden md:inline text-yates-gold">•</span>
            <span>On-Site Crematory</span>
            <span className="hidden md:inline text-yates-gold">•</span>
            <span>Three Local Locations</span>
            <span className="hidden md:inline text-yates-gold">•</span>
            <span>24/7 Support</span>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-center text-yates-evergreen mb-12">What Families Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">H</div>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
              </div>
              <p className="text-yates-deep-green/80 italic">&quot;I really appreciate all the <span className="font-bold text-yates-deep-green">staff</span> for making our <span className="font-bold text-yates-deep-green">daughter service</span> beautiful.&quot;</p>
            </div>

            {/* Review 2 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 relative rounded-full overflow-hidden">
                  <Image src="/images/5.png" alt="Reviewer" fill className="object-cover" /> {/* Placeholder avatar if needed, or just letter */}
                </div>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
              </div>
              <p className="text-yates-deep-green/80 italic">&quot;Yates funeral home is a <span className="font-bold text-yates-deep-green">place</span> full of very caring and compassionate <span className="font-bold text-yates-deep-green">people</span>.&quot;</p>
            </div>

            {/* Review 3 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">F</div>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
              </div>
              <p className="text-yates-deep-green/80 italic">&quot;Yates <span className="font-bold text-yates-deep-green">facility&apos;s</span> are beautiful and the service and <span className="font-bold text-yates-deep-green">food</span> were amazing.&quot;</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <a href="https://www.google.com/search?q=yates+funeral+home+reviews" target="_blank" rel="noopener noreferrer" className="text-yates-gold font-bold hover:underline">
              Read more reviews on Google →
            </a>
          </div>
        </div>
      </section>

      {/* What We Help With */}
      <section className="py-16 md:py-24 px-4 bg-yates-ivory">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Immediate Help */}
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm border border-yates-gold/10 hover:shadow-md transition-shadow">
            <h2 className="font-heading text-3xl font-bold text-yates-evergreen mb-4">Immediate Help (At-Need)</h2>
            <p className="text-yates-deep-green/80 mb-6 text-lg">
              Guidance and arrangements when a death has occurred or is imminent. We are here to help you navigate the next steps with care.
            </p>
            <Link href="/immediate-help" className="text-yates-gold font-bold hover:text-yates-evergreen transition-colors inline-flex items-center gap-2">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Planning Ahead */}
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm border border-yates-gold/10 hover:shadow-md transition-shadow">
            <h2 className="font-heading text-3xl font-bold text-yates-evergreen mb-4">Planning Ahead</h2>
            <p className="text-yates-deep-green/80 mb-6 text-lg">
              A free, local guide with simple checklists and options in plain English. Take the burden off your family by planning in advance.
            </p>
            <Link href="/planning-guide" className="text-yates-gold font-bold hover:text-yates-evergreen transition-colors inline-flex items-center gap-2">
              Get the guide <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Families Choose Yates */}
      <section className="py-16 md:py-24 px-4 bg-yates-light-sage/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-yates-evergreen mb-12">Why Families Choose Yates</h2>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-yates-gold/10 rounded-full flex items-center justify-center mb-4 text-yates-gold">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </div>
              <h3 className="font-bold text-xl mb-2 text-yates-deep-green">Never Leaves Our Care</h3>
              <p className="text-yates-deep-green/70">Your loved one stays with us at our on-site crematory in Fort Pierce.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-yates-gold/10 rounded-full flex items-center justify-center mb-4 text-yates-gold">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h3 className="font-bold text-xl mb-2 text-yates-deep-green">Local & Present</h3>
              <p className="text-yates-deep-green/70">Serving you from our Fort Pierce and Port St. Lucie chapels.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-yates-gold/10 rounded-full flex items-center justify-center mb-4 text-yates-gold">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="font-bold text-xl mb-2 text-yates-deep-green">Clear Steps</h3>
              <p className="text-yates-deep-green/70">No pressure. We explain your options, and you decide what is best.</p>
            </div>
          </div>

          <div className="mt-12">
            <Link href="/about" className="text-yates-gold font-bold hover:text-yates-evergreen transition-colors inline-flex items-center gap-2 text-lg">
              About our family <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Mini-FAQ */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-center text-yates-evergreen mb-12">Common Questions</h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-bold text-xl text-yates-deep-green mb-2">What happens first when we call?</h3>
              <p className="text-yates-deep-green/80">We connect you with a director who walks you through next steps and immediate care. We are here to listen and guide you.</p>
            </div>

            <div>
              <h3 className="font-bold text-xl text-yates-deep-green mb-2">Can you handle cremation on-site?</h3>
              <p className="text-yates-deep-green/80">Yes. Our crematory is operated by our own team at our Fort Pierce facility. Your loved one never leaves our care.</p>
            </div>

            <div>
              <h3 className="font-bold text-xl text-yates-deep-green mb-2">Do you offer pre-planning?</h3>
              <p className="text-yates-deep-green/80">Yes. Many families start with our free planning guide to learn about their options without any pressure.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
