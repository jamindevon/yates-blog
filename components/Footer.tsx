import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-yates-deep-green text-yates-ivory py-12 border-t border-yates-gold/30">
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center md:text-left">

                {/* Locations */}
                <div>
                    <h3 className="font-heading text-xl font-bold text-yates-gold mb-4">Contact Us</h3>
                    <div className="space-y-4 text-sm opacity-90">
                        <div>
                            <p className="font-bold">Fort Pierce Chapel</p>
                            <p>1101 South US 1</p>
                            <p>Fort Pierce, FL 34950</p>
                            <a href="tel:7724617000" className="hover:text-yates-gold transition-colors block mt-1">(772) 461-7000</a>
                        </div>
                        <div>
                            <p className="font-bold">Port St. Lucie Chapel</p>
                            <p>7951 South US 1</p>
                            <p>Port St. Lucie, FL 34952</p>
                            <a href="tel:7728782300" className="hover:text-yates-gold transition-colors block mt-1">(772) 878-2300</a>
                        </div>
                        <div>
                            <p className="font-bold">Port St. Lucie Blvd. Chapel</p>
                            <p>526 SW Port St. Lucie Blvd</p>
                            <p>Port St. Lucie, FL 34953</p>
                            <a href="tel:7728782300" className="hover:text-yates-gold transition-colors block mt-1">(772) 878-2300</a>
                        </div>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-heading text-xl font-bold text-yates-gold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                        <li><Link href="/immediate-help" className="hover:text-white transition-colors">Immediate Help</Link></li>
                        <li><Link href="/planning-guide" className="hover:text-white transition-colors">Planning Guide</Link></li>
                        <li><Link href="/locations" className="hover:text-white transition-colors">Locations</Link></li>
                        <li><Link href="/about" className="hover:text-white transition-colors">About Our Family</Link></li>
                        <li><a href="#" className="hover:text-white transition-colors">Obituaries</a></li>
                    </ul>
                </div>

                {/* 24/7 Message & Legal */}
                <div>
                    <h3 className="font-heading text-xl font-bold text-yates-gold mb-4">Always Here</h3>
                    <p className="mb-6 text-yates-ivory/80">
                        If a death has occurred, please call us immediately. We answer our phones 24 hours a day, 7 days a week.
                    </p>
                    <div className="pt-6 border-t border-white/10 text-xs opacity-60 space-y-2">
                        <p>&copy; {new Date().getFullYear()} Yates Funeral Home.</p>
                        <div className="flex justify-center md:justify-start gap-4">
                            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
                            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
