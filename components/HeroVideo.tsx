"use client";

export function HeroVideo() {
    return (
        <div className="absolute inset-0 overflow-hidden z-0 bg-gray-900">
            <div className="relative w-full h-full">
                {/* 
            YouTube Background Video Hack 
            1. pointer-events-none: prevents interaction
            2. scale-150: zooms in to hide controls/branding
            3. w-[300%] h-[300%]: ensures it covers the area
            4. top/left positioning: centers it
        */}
                <iframe
                    src="https://www.youtube.com/embed/nX319wmyS1E?autoplay=1&mute=1&controls=0&loop=1&playlist=nX319wmyS1E&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&start=4&playsinline=1&enablejsapi=1"
                    className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 pointer-events-none object-cover"
                    allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                    title="Yates Funeral Home Background Video"
                    style={{ opacity: 0.6 }} // Slight opacity to blend with background
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-yates-evergreen/80 via-yates-evergreen/50 to-yates-evergreen/80 mix-blend-multiply" />
            </div>
        </div>
    );
}
