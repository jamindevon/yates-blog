import { HubSpotPlanningForm } from "@/components/HubSpotPlanningForm";
import Image from "next/image";

export default function PlanningGuide() {
    return (
        <main className="min-h-screen bg-yates-ivory">
            <div className="grid md:grid-cols-2 min-h-screen">

                {/* Left Column: Content */}
                <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center bg-white">
                    <div className="max-w-lg mx-auto w-full">
                        <h1 className="font-heading text-4xl md:text-5xl font-bold text-yates-evergreen mb-6 leading-tight">
                            Free Pre-Planning & Bereavement Guide
                        </h1>

                        <div className="space-y-6 mb-12">
                            <div className="flex items-start gap-4">
                                <div className="w-6 h-6 rounded-full bg-yates-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg className="w-4 h-4 text-yates-gold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-yates-deep-green text-lg">What to do first</h3>
                                    <p className="text-yates-deep-green/70">Simple checklists to guide you.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-6 h-6 rounded-full bg-yates-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg className="w-4 h-4 text-yates-gold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-yates-deep-green text-lg">Options explained clearly</h3>
                                    <p className="text-yates-deep-green/70">Cremation & funeral options in plain English.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-6 h-6 rounded-full bg-yates-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg className="w-4 h-4 text-yates-gold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-yates-deep-green text-lg">Local contacts & next steps</h3>
                                    <p className="text-yates-deep-green/70">Everything you need in one place.</p>
                                </div>
                            </div>
                        </div>

                        {/* Guide Preview Image */}
                        <div className="mb-12 w-full md:w-3/4 mx-auto shadow-2xl rounded-lg overflow-hidden border-4 border-white transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="/images/planning-guide.png"
                                alt="Planning Guide Preview"
                                width={800}
                                height={600}
                                className="w-full h-auto"
                            />
                        </div>

                        {/* How Planning Helps (Below Fold Content moved here for desktop layout flow) */}
                        <div className="border-t border-gray-100 pt-8 mt-8">
                            <h3 className="font-heading text-2xl font-bold text-yates-evergreen mb-4">How Planning Helps</h3>
                            <ul className="space-y-3 text-yates-deep-green/80">
                                <li>• Reduces stress and uncertainty for loved ones</li>
                                <li>• Ensures your wishes are known and honored</li>
                                <li>• Allows for thoughtful, meaningful choices</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Right Column: Form */}
                <div className="bg-yates-ivory p-8 md:p-16 flex flex-col justify-center">
                    <div className="max-w-md mx-auto w-full bg-white p-8 rounded-xl shadow-xl">
                        <h2 className="font-heading text-2xl font-bold text-yates-evergreen mb-6 text-center">
                            Get Your Free Guide
                        </h2>
                        <HubSpotPlanningForm />
                    </div>
                </div>
            </div>
        </main>
    );
}
