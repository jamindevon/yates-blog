"use client";

export function HeroVideo() {
    return (
        <div className="absolute inset-0 overflow-hidden z-0 bg-gray-900">
            <div className="relative w-full h-full">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
                >
                    <source src="/images/Compressed-bg-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-yates-evergreen/80 via-yates-evergreen/50 to-yates-evergreen/80 mix-blend-multiply" />
            </div>
        </div>
    );
}
