"use client";

import Script from "next/script";

export default function CookieBot() {
    return (
        <>
            <Script
                id="Cookiebot"
                src="https://consent.cookiebot.com/uc.js"
                strategy="beforeInteractive"
                data-cbid="b79ad5b2-e5f3-41c1-9b4b-a34c003cc872"
                data-blockingmode="auto"
                type="text/javascript"
            />
        </>
    );
}