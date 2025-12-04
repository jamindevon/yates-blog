import Link from "next/link";

export default function Locations() {
    return (
        <main className="min-h-screen bg-yates-ivory">
            <section className="py-16 px-4 max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="font-heading text-4xl md:text-5xl font-bold text-yates-evergreen mb-6">
                        Our Locations — Fort Pierce & Port St. Lucie
                    </h1>
                    <p className="text-xl text-yates-deep-green/80 max-w-2xl mx-auto">
                        Wherever you are in St. Lucie County, compassionate care is close to home.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {/* Fort Pierce Chapel */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-yates-gold">
                        <div className="p-8">
                            <h2 className="font-heading text-2xl font-bold text-yates-evergreen mb-4">Fort Pierce Chapel</h2>
                            <div className="space-y-4 text-yates-deep-green/80">
                                <p>
                                    1101 South US 1<br />
                                    Fort Pierce, FL 34950
                                </p>
                                <p className="font-bold text-yates-gold">
                                    <a href="tel:7724617000">Call: (772) 461-7000</a>
                                </p>
                                <div className="pt-4 border-t border-gray-100">
                                    <p className="text-sm italic">“Our on-site crematory is located at this facility.”</p>
                                </div>
                                <div className="pt-4">
                                    <a
                                        href="https://www.google.com/maps/search/?api=1&query=Yates+Funeral+Home+Fort+Pierce"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-yates-deep-green text-white px-4 py-2 rounded font-bold hover:bg-yates-evergreen transition-colors"
                                    >
                                        Get Directions
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Port St. Lucie — US-1 */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-yates-gold">
                        <div className="p-8">
                            <h2 className="font-heading text-2xl font-bold text-yates-evergreen mb-4">Port St. Lucie — US-1</h2>
                            <div className="space-y-4 text-yates-deep-green/80">
                                <p>
                                    7951 South US 1<br />
                                    Port St. Lucie, FL 34952
                                </p>
                                <p className="font-bold text-yates-gold">
                                    <a href="tel:7728782300">Call: (772) 878-2300</a>
                                </p>
                                <div className="pt-4 mt-8">
                                    <a
                                        href="https://www.google.com/maps/search/?api=1&query=Yates+Funeral+Home+Port+St+Lucie+US+1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-yates-deep-green text-white px-4 py-2 rounded font-bold hover:bg-yates-evergreen transition-colors"
                                    >
                                        Get Directions
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Port St. Lucie — PSL Blvd. */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-yates-gold">
                        <div className="p-8">
                            <h2 className="font-heading text-2xl font-bold text-yates-evergreen mb-4">Port St. Lucie — PSL Blvd.</h2>
                            <div className="space-y-4 text-yates-deep-green/80">
                                <p>
                                    526 SW Port St. Lucie Blvd<br />
                                    Port St. Lucie, FL 34953
                                </p>
                                <p className="font-bold text-yates-gold">
                                    <a href="tel:7728782300">Call: (772) 878-2300</a>
                                </p>
                                <div className="pt-4 mt-8">
                                    <a
                                        href="https://www.google.com/maps/search/?api=1&query=Yates+Funeral+Home+Port+St+Lucie+Blvd"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-yates-deep-green text-white px-4 py-2 rounded font-bold hover:bg-yates-evergreen transition-colors"
                                    >
                                        Get Directions
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
