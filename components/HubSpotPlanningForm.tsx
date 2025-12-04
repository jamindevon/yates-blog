"use client";

import { useEffect } from "react";

export function HubSpotPlanningForm() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://js-na2.hsforms.net/forms/embed/244218599.js";
        script.defer = true;
        document.body.appendChild(script);

        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <div
            className="hs-form-frame"
            data-region="na2"
            data-form-id="24e41071-680d-4070-8f28-2ed5860de801"
            data-portal-id="244218599"
        >
        </div>
    );
}
