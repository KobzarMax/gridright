"use client";

import Script from "next/script";

export default function CookieDeclarationPage() {
    return (
        <>
            <div id="CookieDeclaration" />
            <Script
                id="CookieDeclarationScript"
                src="https://consent.cookiebot.com/b79ad5b2-e5f3-41c1-9b4b-a34c003cc872/cd.js"
                strategy="afterInteractive"
            />
        </>
    );
}