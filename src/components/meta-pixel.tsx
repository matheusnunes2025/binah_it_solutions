"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  getCopy,
  localeFromPathname,
  localePrivacy,
} from "@/lib/i18n";

type MetaPixelFunction = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[][];
  loaded: boolean;
  version: string;
};

declare global {
  interface Window {
    _fbq?: MetaPixelFunction;
    fbq?: MetaPixelFunction;
  }
}

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim();
const CONSENT_KEY = "binah_measurement_consent_v1";

function initializeMetaPixel(pixelId: string) {
  if (window.fbq) return;

  const fbq = function (...args: unknown[]) {
    if (fbq.callMethod) {
      fbq.callMethod(...args);
      return;
    }
    fbq.queue.push(args);
  } as MetaPixelFunction;

  fbq.queue = [];
  fbq.loaded = true;
  fbq.version = "2.0";
  window.fbq = fbq;
  window._fbq = fbq;

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  const firstScript = document.getElementsByTagName("script")[0];
  firstScript?.parentNode?.insertBefore(script, firstScript);

  fbq("init", pixelId);
}

export function trackMetaEvent(
  eventName: "Contact" | "Lead" | "ViewContent" | string,
  parameters?: Record<string, string | number | boolean>,
) {
  window.fbq?.("track", eventName, parameters ?? {});
}

export function MetaPixel() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const copy = getCopy(locale).consent;
  const [consent, setConsent] = useState<"accepted" | "declined" | "pending">(
    "pending",
  );
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!PIXEL_ID) return;
    const frame = window.requestAnimationFrame(() => {
      const saved = window.localStorage.getItem(CONSENT_KEY);
      if (saved === "accepted" || saved === "declined") {
        setConsent(saved);
      }
      setIsReady(true);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!PIXEL_ID || consent !== "accepted") return;
    initializeMetaPixel(PIXEL_ID);
    trackMetaEvent("PageView");
  }, [consent, pathname]);

  useEffect(() => {
    if (!PIXEL_ID || consent !== "accepted") return;

    function handleTrackedClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      const trackedElement = target?.closest<HTMLElement>("[data-track]");
      if (!trackedElement) return;

      const eventName = trackedElement.dataset.metaEvent || "Contact";
      trackMetaEvent(eventName, {
        content_name: trackedElement.dataset.track || "website-contact",
      });
    }

    document.addEventListener("click", handleTrackedClick);
    return () => document.removeEventListener("click", handleTrackedClick);
  }, [consent]);

  if (!PIXEL_ID || !isReady || consent !== "pending") return null;

  function chooseConsent(value: "accepted" | "declined") {
    window.localStorage.setItem(CONSENT_KEY, value);
    setConsent(value);
  }

  return (
    <aside className="consent-banner" aria-label={copy.text}>
      <div>
        <p>{copy.text}</p>
        <Link href={localePrivacy(locale)}>{copy.privacy}</Link>
      </div>
      <div className="consent-banner__actions">
        <button type="button" onClick={() => chooseConsent("declined")}>
          {copy.decline}
        </button>
        <button
          type="button"
          className="is-primary"
          onClick={() => chooseConsent("accepted")}
        >
          {copy.accept}
        </button>
      </div>
    </aside>
  );
}
