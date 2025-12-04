"use client";

import Script from "next/script";

export function HubSpotPlanningForm() {
    return (
        <>
            <Script
                src="https://js-na2.hsforms.net/forms/embed/244218599.js"
                strategy="afterInteractive"
            />
            <div
                className="hs-form-frame"
                data-region="na2"
                data-form-id="24e41071-680d-4070-8f28-2ed5860de801"
                data-portal-id="244218599"
            >
            </div>
        </>
    );
}
