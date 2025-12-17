"use client";

import { trackEvent } from "./MetaPixel";
import { ReactNode } from "react";

interface ContactButtonProps {
    href: string;
    className?: string;
    children: ReactNode;
    onClick?: () => void;
}

export function ContactButton({ href, className, children, onClick }: ContactButtonProps) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        // Track the Contact event
        trackEvent("Contact", {
            content_name: href.startsWith("tel:") ? "Phone Call" : "Contact Link",
            value: 0.00,
            currency: "USD",
        });

        if (onClick) {
            onClick();
        }
    };

    return (
        <a href={href} className={className} onClick={handleClick}>
            {children}
        </a>
    );
}
