"use client";

import { useEffect } from "react";
import { trackEvent } from "./MetaPixel";

interface ViewContentTrackerProps {
    contentName?: string;
    contentCategory?: string;
    value?: number;
    currency?: string;
}

export function ViewContentTracker({
    contentName,
    contentCategory,
    value,
    currency,
}: ViewContentTrackerProps) {
    useEffect(() => {
        trackEvent("ViewContent", {
            content_name: contentName,
            content_category: contentCategory,
            value: value,
            currency: currency,
        });
    }, [contentName, contentCategory, value, currency]);

    return null;
}
