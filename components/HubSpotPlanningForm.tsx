"use client";

import { useEffect } from "react";

declare global {
    interface Window {
        hbspt: any;
    }
}

export function HubSpotPlanningForm() {
    useEffect(() => {
        const scriptId = "hubspot-form-script";
        const formContainerId = "hubspot-planning-form-container";

        // Function to create the form
        const createForm = () => {
            if (window.hbspt) {
                // Clear the container first to prevent duplicates
                const container = document.getElementById(formContainerId);
                if (container) {
                    container.innerHTML = "";
                }

                window.hbspt.forms.create({
                    region: "na2",
                    portalId: "244218599",
                    formId: "24e41071-680d-4070-8f28-2ed5860de801",
                    target: `#${formContainerId}`
                });
            }
        };

        // Check if script is already present
        let script = document.getElementById(scriptId) as HTMLScriptElement;

        if (!script) {
            script = document.createElement("script");
            script.id = scriptId;
            script.src = "//js-na2.hsforms.net/forms/embed/v2.js";
            script.async = true;
            script.defer = true;

            script.onload = createForm;

            document.body.appendChild(script);
        } else {
            // If script is already loaded (or loading), try to create form
            if (window.hbspt) {
                createForm();
            } else {
                script.addEventListener("load", createForm);
            }
        }

        // Cleanup isn't perfect for HubSpot forms as they modify global state,
        // but we can ensure we don't leave listeners hanging if we added one.
        return () => {
            if (script) {
                script.removeEventListener("load", createForm);
            }
        };
    }, []);

    return (
        <div
            id="hubspot-planning-form-container"
            className="min-h-[600px]" // Min-height to prevent layout shift
        >
            {/* Form will be injected here */}
            <div className="flex justify-center items-center h-full text-gray-400 animate-pulse">
                Loading form...
            </div>
        </div>
    );
}
