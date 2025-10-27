import { PrePlanningForm } from "@/components/PrePlanningForm";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yates-ivory to-yates-light-sage">
      {/* Floating Lunch & Learn CTA Button */}
      <a
        href="/lunch-learn"
        className="fixed bottom-6 right-6 z-50 bg-yates-gold hover:bg-yates-gold/90 text-white font-bold py-4 px-6 rounded-lg shadow-2xl transition-all transform hover:scale-105 flex items-center gap-2 animate-pulse hover:animate-none"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div className="text-left">
          <div className="text-sm leading-tight">FREE Lunch & Learn</div>
          <div className="text-xs font-normal opacity-90">Nov 5 • 11:30 AM</div>
        </div>
      </a>

      {/* Hero Section with Form - Above the Fold */}
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

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Headline */}
          <div className="text-center text-white mb-6 md:mb-12">
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-4 leading-tight">
              Peace of Mind Starts Today
            </h1>
            <p className="text-base md:text-xl text-yates-ivory/90 max-w-3xl mx-auto">
              Don&apos;t wait for a crisis. Get your free guide now — it only takes 2 minutes.
            </p>
          </div>

          {/* Mobile: Form First, Desktop: Two Column Layout */}
          <div className="max-w-5xl mx-auto">
            {/* Mobile Form (visible only on mobile) */}
            <div className="md:hidden space-y-4 mb-6">
              {/* Form Card */}
              <div className="bg-white rounded-xl shadow-2xl p-5">
                <div className="text-center mb-5">
                  <h2 className="text-xl font-bold text-yates-evergreen mb-2">
                    Get Your Free Guide
                  </h2>
                  <p className="text-yates-deep-green/70 text-sm">
                    Takes less than 60 seconds
                  </p>
                </div>
                <PrePlanningForm />
              </div>
            </div>

            {/* Mobile Tom's Photo (after form) */}
            <div className="md:hidden mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] max-w-sm mx-auto">
                <Image
                  src="/images/5.png"
                  alt="Tom Yates - Owner, Yates Funeral Home"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Desktop: Two Column Layout */}
            <div className="hidden md:grid md:grid-cols-2 gap-6 md:gap-8 items-start">
              {/* Left Column - Tom's Photo */}
              <div className="relative">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                  <Image
                    src="/images/5.png"
                    alt="Tom Yates - Owner, Yates Funeral Home"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Arrow for Desktop */}
                <div className="hidden lg:block absolute -right-12 top-1/2 -translate-y-1/2">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="text-yates-gold">
                    <path d="M10 30 L45 30 M35 20 L45 30 L35 40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Right Column - Form with Guide Badge */}
              <div className="space-y-4">
                {/* Meet Tom Section */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4 shadow-lg">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden shadow-xl flex-shrink-0 ring-2 ring-yates-gold">
                    <Image
                      src="/images/6.png"
                      alt="Your Funeral Planning Guide"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-white">
                    <h3 className="font-bold text-base mb-0.5">Meet Tom Conway</h3>
                    <p className="text-xs text-yates-ivory/90">
                      Owner & 5th Generation Funeral Director
                    </p>
                  </div>
                </div>

                {/* Form Card */}
                <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-yates-evergreen mb-2">
                      Get Your Free Guide
                    </h2>
                    <p className="text-yates-deep-green/70 text-sm">
                      Takes less than 60 seconds
                    </p>
                  </div>
                  <PrePlanningForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-yates-evergreen text-center">
            Family Owned & Operated Since 1935
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-yates-deep-green/80 leading-relaxed">
            <div className="space-y-4">
              <p>
                In 1935, Joseph &quot;Joe&quot; William Yates and his partner, Mr. Burns, opened Burns and Yates Funeral Home in Fort Pierce. Within a few months Mr. Burns moved to Miami, and the funeral home became Yates Funeral Home. The original location was at 524 North Fourth Street, and at this time, we also served as an ambulance service.
              </p>
              <p>
                In 1943, Joe Yates bought Fee Mortuary and their unfinished building on US#1. By 1944, Joe, his wife Hattie, and daughter Sally, welcomed baby Bill into the new funeral home.
              </p>
              <p>
                After Joe passed in January of 1965, Bill commuted from Fort Pierce to Miami to complete his degree in Mortuary Science at Miami Dade in 1967. In 1978, Bill Yates opened Yates Funeral Home in Port Saint Lucie.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                Today, the funeral home is operated by Thomas G. Conway, Jr. (Tommy), who is Tom and Lisa&apos;s oldest son and a fifth-generation funeral director and embalmer. Tommy is a graduate of John Carroll Catholic High School in Fort Pierce and Miami Dade College with a degree in Funeral Service.
              </p>
              <p>
                Yates Funeral Home joined the Order of the Golden Rule, an International Funeral Organization, in 1962 and is still a proud member today.
              </p>
              <p className="text-yates-evergreen font-semibold">
                For nearly 90 years, the Yates family has been honored to serve families in our community during their most difficult times.
              </p>
            </div>
          </div>
        </div>

        {/* Guide Preview */}
        <div className="bg-gradient-to-b from-white to-yates-ivory rounded-xl shadow-2xl p-8 md:p-12 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-yates-evergreen">
                What&apos;s Inside Your Free Guide
              </h2>
              <ul className="space-y-5 text-lg text-yates-deep-green/80">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-yates-gold flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span>Step-by-step checklist for creating your plan</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-yates-gold flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span>Information about pre-payment options</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-yates-gold flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span>Guidance on making meaningful decisions</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-yates-gold flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span>Resources for discussing plans with family</span>
                </li>
              </ul>
            </div>
            <div className="relative aspect-[3/4] max-w-md mx-auto rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
              <Image
                src="/images/6.png"
                alt="Your Funeral Planning Guide - Yates Funeral Home"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-yates-evergreen">
          Why Plan Ahead?
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Benefit 1 */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-yates-gold">
            <h3 className="text-2xl font-bold mb-4 text-yates-evergreen">
              It&apos;s Easy
            </h3>
            <p className="text-yates-deep-green/80 leading-relaxed">
              You can take your time creating arrangements that best suit your needs and preferences, and all you have to do is fill out a form or meet with a member of our staff to put your plan in place. Anyone can create a plan, at any stage in their life, and you can make changes at a later date if you wish.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-yates-gold">
            <h3 className="text-2xl font-bold mb-4 text-yates-evergreen">
              Decide How You&apos;d Like to Be Remembered
            </h3>
            <p className="text-yates-deep-green/80 leading-relaxed">
              Creating your own unique life celebration allows you to make sure that your wishes and desires are respected upon your passing. However you decide to be memorialized, pre-planning and preparation gives you control over the personal decisions that must be made when a person moves on from this life.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-yates-gold">
            <h3 className="text-2xl font-bold mb-4 text-yates-evergreen">
              Take the Burden Off Your Family
            </h3>
            <p className="text-yates-deep-green/80 leading-relaxed">
              When a loved one passes, the family faces an overwhelming number of tasks and decisions, all while struggling through grief and a range of difficult emotions. By taking care of your arrangements before the time of need, you&apos;re relieving them of that burden and giving them more time and energy to focus on healing and remembrance.
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-yates-gold">
            <h3 className="text-2xl font-bold mb-4 text-yates-evergreen">
              Pre-Payment Options Available
            </h3>
            <p className="text-yates-deep-green/80 leading-relaxed">
              While pre-funding your funeral is certainly not required in order to pre-plan, pre-payment means that your funds will be set aside and protected against inflation and unforeseen increases in cost. Your family won&apos;t have to worry about payment, and can enjoy peace of mind knowing that everything has been taken care of.
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-yates-light-sage rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4 text-yates-evergreen">
              What if I Move?
            </h3>
            <p className="text-yates-deep-green/80 leading-relaxed">
              Once you create your pre-plan with us, we store it in our files as a record of your final wishes and decisions. Your plan is easily transferable to any funeral home in the United States, so it can be used wherever you might choose to relocate. No matter where you live at the time of your passing, or which funeral home&apos;s services you decide to use, we&apos;ll make sure that your plan follows you there.
            </p>
          </div>

          <div className="bg-yates-light-sage rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4 text-yates-evergreen">
              Where Do I Start?
            </h3>
            <p className="text-yates-deep-green/80 leading-relaxed">
              The first step is to review our Pre-Planning Checklist to help you consider all of your possibilities and gather all of the information you&apos;ll need. Download your free guide above to begin creating your personalized arrangements. You can also contact us to schedule a time to meet with a member of our staff to discuss your options and design your plan in person.
            </p>
          </div>
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
