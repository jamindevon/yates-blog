import Link from "next/link";

export default function ImmediateHelp() {
    return (
        <main className="min-h-screen bg-yates-ivory">
            {/* Hero / Emergency Header */}
            <section className="bg-yates-deep-green text-white py-16 px-4 text-center">
                <div className="max-w-3xl mx-auto space-y-6">
                    <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight">
                        Immediate Help in St. Lucie — Speak with a Director Now
                    </h1>
                    <p className="text-lg md:text-xl text-yates-ivory/90 font-body">
                        If a death has occurred or is expected soon, call now. Our family has served the Treasure Coast since 1935. We’ll handle every detail with dignity and care.
                    </p>

                    <div className="flex flex-col gap-4 max-w-sm mx-auto pt-6">
                        <a href="tel:7724617000" className="bg-yates-gold hover:bg-yates-gold/90 text-white px-6 py-4 rounded-lg font-bold text-xl shadow-lg transition-transform hover:scale-105 flex items-center justify-center gap-2">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            Call a Director
                        </a>
                        <a href="sms:7724617000" className="bg-white text-yates-evergreen hover:bg-gray-50 px-6 py-4 rounded-lg font-bold text-lg shadow-md transition-colors flex items-center justify-center gap-2">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                            Text Us
                        </a>
                        <Link href="/locations" className="bg-transparent border border-white/30 text-white hover:bg-white/10 px-6 py-4 rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            Get Directions
                        </Link>
                    </div>
                </div>
            </section>

            {/* Reassurance Row */}
            <div className="bg-white py-6 border-b border-gray-100">
                <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-6 md:gap-12 text-sm md:text-base font-medium text-yates-deep-green/80 uppercase tracking-wide text-center">
                    <span>Family-Owned</span>
                    <span className="hidden md:inline text-yates-gold">•</span>
                    <span>On-Site Crematory</span>
                    <span className="hidden md:inline text-yates-gold">•</span>
                    <span>Three Local Chapels</span>
                    <span className="hidden md:inline text-yates-gold">•</span>
                    <span>24/7 Support</span>
                </div>
            </div>

            {/* What Happens Next */}
            <section className="py-16 px-4 max-w-4xl mx-auto">
                <h2 className="font-heading text-3xl font-bold text-center text-yates-evergreen mb-12">What Happens Next</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-yates-gold text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto shadow-lg">1</div>
                        <h3 className="font-bold text-xl text-yates-deep-green">We connect with you</h3>
                        <p className="text-yates-deep-green/70">We learn your needs and answer your immediate questions.</p>
                    </div>

                    <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-yates-gold text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto shadow-lg">2</div>
                        <h3 className="font-bold text-xl text-yates-deep-green">We arrange care</h3>
                        <p className="text-yates-deep-green/70">We arrange for the immediate transfer and care of your loved one.</p>
                    </div>

                    <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-yates-gold text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto shadow-lg">3</div>
                        <h3 className="font-bold text-xl text-yates-deep-green">We guide you</h3>
                        <p className="text-yates-deep-green/70">We walk you through decisions at your own pace, with no pressure.</p>
                    </div>
                </div>
            </section>

            {/* Short FAQ */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-3xl mx-auto">
                    <h2 className="font-heading text-3xl font-bold text-center text-yates-evergreen mb-12">Common Questions</h2>

                    <div className="space-y-8">
                        <div>
                            <h3 className="font-bold text-xl text-yates-deep-green mb-2">What do we need to have ready?</h3>
                            <p className="text-yates-deep-green/80">Only what you know right now; we’ll explain the rest. You don&apos;t need to have all the answers immediately.</p>
                        </div>

                        <div>
                            <h3 className="font-bold text-xl text-yates-deep-green mb-2">Do you work with local hospitals/hospice?</h3>
                            <p className="text-yates-deep-green/80">Yes—every day. We coordinate directly with all local medical facilities and hospice providers.</p>
                        </div>

                        <div>
                            <h3 className="font-bold text-xl text-yates-deep-green mb-2">Is cremation available?</h3>
                            <p className="text-yates-deep-green/80">Yes—on site, operated by our team. Your loved one never leaves our care.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
