"use client";

import { useEffect } from "react";

const CookieBot = () => {
    useEffect(() => {
        const cmpScript = document.createElement("script");
        const declarationScript = document.createElement("script");
        cmpScript.id = "Cookiebot";
        cmpScript.src = "https://consent.cookiebot.com/uc.js";
        cmpScript.setAttribute("data-cbid", "b79ad5b2-e5f3-41c1-9b4b-a34c003cc872");
        cmpScript.setAttribute("type", "text/javascript");
        cmpScript.setAttribute("async", "true");
        cmpScript.setAttribute("data-blockingmode", "auto");
        document.head.appendChild(cmpScript);
        declarationScript.id = "CookieDeclaration";
        declarationScript.src = "https://consent.cookiebot.com/b79ad5b2-e5f3-41c1-9b4b-a34c003cc872/cd.js";
        declarationScript.setAttribute("strategy", "afterInteractive");
        document.head.appendChild(declarationScript);


        return () => {
            document.head.removeChild(cmpScript);
        };
    }, []);

    return null;
};

export default CookieBot;