"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const previousRoute = useRef("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const currentRoute = `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ""}`;
    const hasHash = Boolean(window.location.hash);

    if (!previousRoute.current) {
      previousRoute.current = currentRoute;
      return;
    }

    if (previousRoute.current !== currentRoute && !hasHash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }

    previousRoute.current = currentRoute;
  }, [pathname, searchParams]);

  return null;
}
