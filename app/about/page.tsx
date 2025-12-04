import Link from "next/link";
import Image from "next/image";

export default function About() {
    return (
        <main className="min-h-screen bg-yates-ivory">

            {/* Hero */}
            <section className="bg-white py-16 md:py-24 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="font-heading text-4xl md:text-5xl font-bold text-yates-evergreen mb-8">
                        Our Family’s Promise to Yours
                    </h1>
                    <p className="text-xl text-yates-deep-green/80 leading-relaxed font-body">
                        Since 1935, Yates has served the Treasure Coast with dignity, clarity, and care. We’re family-owned and local to St. Lucie County, with three nearby chapels and an <span className="font-bold text-yates-evergreen">on-site crematory operated by our own team</span>. Your loved one never leaves our care.
                    </p>
                </div>
            </section>

            {/* Values */}
            <section className="py-16 px-4 bg-yates-deep-green text-white">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
                    <div className="space-y-4">
                        <div className="w-16 h-16 bg-yates-gold rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                        </div>
                        <h3 className="font-heading text-2xl font-bold text-yates-gold">Compassion</h3>
                        <p className="text-yates-ivory/80 text-lg">We listen first.</p>
                    </div>

                    <div className="space-y-4">
                        <div className="w-16 h-16 bg-yates-gold rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <h3 className="font-heading text-2xl font-bold text-yates-gold">Clarity</h3>
                        <p className="text-yates-ivory/80 text-lg">We explain options in plain language.</p>
                    </div>

                    <div className="space-y-4">
                        <div className="w-16 h-16 bg-yates-gold rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                        </div>
                        <h3 className="font-heading text-2xl font-bold text-yates-gold">Respect</h3>
                        <p className="text-yates-ivory/80 text-lg">We honor every family’s traditions and beliefs.</p>
                    </div>
                </div>
            </section>

            {/* Meet the Directors */}
            <section className="py-16 md:py-24 px-4 max-w-6xl mx-auto">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-yates-evergreen mb-16">Meet Our Directors</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Tom */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden text-center pb-6">
                        <div className="h-80 w-full relative">
                            <Image src="/images/13.png" alt="Tom Yates" fill className="object-cover object-top" />
                        </div>
                        <div className="p-4">
                            <h3 className="font-bold text-xl text-yates-deep-green">Tom Yates</h3>
                            <p className="text-yates-gold font-medium">Funeral Director</p>
                        </div>
                    </div>

                    {/* Kelly */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden text-center pb-6">
                        <div className="h-80 w-full relative">
                            <Image src="/images/14.png" alt="Kelly" fill className="object-cover object-top" />
                        </div>
                        <div className="p-4">
                            <h3 className="font-bold text-xl text-yates-deep-green">Kelly</h3>
                            <p className="text-yates-gold font-medium">Funeral Director</p>
                        </div>
                    </div>

                    {/* Carolyn */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden text-center pb-6">
                        <div className="h-80 w-full relative">
                            <Image src="/images/15.png" alt="Carolyn" fill className="object-cover object-top" />
                        </div>
                        <div className="p-4">
                            <h3 className="font-bold text-xl text-yates-deep-green">Carolyn</h3>
                            <p className="text-yates-gold font-medium">Funeral Director</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Row */}
            <section className="bg-yates-light-sage/30 py-16 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-heading text-3xl font-bold text-yates-evergreen mb-8">We Are Here For You</h2>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <Link href="/immediate-help" className="bg-yates-gold hover:bg-yates-gold/90 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition-transform hover:scale-105">
                            Immediate Help (24/7)
                        </Link>
                        <Link href="/planning-guide" className="bg-white text-yates-evergreen hover:bg-yates-ivory px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition-transform hover:scale-105">
                            Get the Free Planning Guide
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
