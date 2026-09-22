"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const META_PIXEL_ID =
  process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "1616160646577782";
const CONSENT_KEY = "serene-meta-consent";

type MetaConsent = "granted" | "denied";
type MetaPixelFunction = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  loaded: boolean;
  push: MetaPixelFunction;
  queue: unknown[][];
  version: string;
};

declare global {
  interface Window {
    _fbq?: unknown;
    fbq?: MetaPixelFunction;
  }
}

function initialisePixel() {
  if (window.fbq) return;

  const fbq = function (...args: unknown[]) {
    if (fbq.callMethod) fbq.callMethod(...args);
    else fbq.queue.push(args);
  } as MetaPixelFunction;

  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = "2.0";
  fbq.queue = [];
  window.fbq = fbq;
  window._fbq = fbq;

  const script = document.createElement("script");
  script.id = "meta-pixel-script";
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(script);

  window.fbq("init", META_PIXEL_ID);
}

export function trackMetaEvent(
  eventName: "Contact" | "Lead" | "ViewContent",
  parameters?: Record<string, string>,
) {
  if (localStorage.getItem(CONSENT_KEY) !== "granted") return;
  initialisePixel();
  window.fbq?.("track", eventName, parameters);
}

export function MetaPixel() {
  const pathname = usePathname();
  const [consent, setConsent] = useState<MetaConsent | null>(null);
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(CONSENT_KEY);
    if (saved === "granted" || saved === "denied") setConsent(saved);
  }, []);

  useEffect(() => {
    if (consent !== "granted" || lastTrackedPath.current === pathname) return;
    initialisePixel();
    window.fbq?.("track", "PageView");
    if (pathname.startsWith("/services/")) {
      window.fbq?.("track", "ViewContent", { content_name: pathname });
    }
    lastTrackedPath.current = pathname;
  }, [consent, pathname]);

  useEffect(() => {
    function trackContactClick(event: MouseEvent) {
      const link = (event.target as HTMLElement).closest<HTMLAnchorElement>("a[href]");
      if (!link) return;

      if (link.href.startsWith("tel:")) {
        trackMetaEvent("Contact", { contact_method: "phone" });
      } else if (link.hostname === "wa.me") {
        trackMetaEvent("Contact", { contact_method: "whatsapp" });
      }
    }

    document.addEventListener("click", trackContactClick);
    return () => document.removeEventListener("click", trackContactClick);
  }, []);

  function chooseConsent(value: MetaConsent) {
    if (value === "denied") window.fbq?.("consent", "revoke");
    localStorage.setItem(CONSENT_KEY, value);
    setConsent(value);
  }

  if (consent !== null) {
    return (
      <button
        type="button"
        className="privacy-preferences"
        onClick={() => {
          localStorage.removeItem(CONSENT_KEY);
          setConsent(null);
        }}
      >
        Privacy choices
      </button>
    );
  }

  return (
    <aside className="analytics-consent" aria-label="Analytics preferences">
      <div>
        <strong>Help us improve our advertising</strong>
        <p>
          With your permission, Meta Pixel measures page visits and enquiry
          actions. It does not receive the details you enter in a form. Read our{" "}
          <Link href="/privacy">privacy notice</Link>.
        </p>
      </div>
      <div className="analytics-consent-actions">
        <button type="button" className="button button-primary" onClick={() => chooseConsent("granted")}>
          Allow analytics
        </button>
        <button type="button" className="button button-quiet" onClick={() => chooseConsent("denied")}>
          Essential only
        </button>
      </div>
    </aside>
  );
}
