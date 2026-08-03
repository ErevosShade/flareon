import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// A faint puff of smoke that trails the pointer. Disabled on the Export Desk
// (a form page — the cursor should stay quiet there) and on touch devices.
// Any element inside a `[data-smoke="green"]` region tints the puff green.
const DISABLED_PATHS = ["/export-quote"];

export default function SmokeCursor() {
  const { pathname } = useLocation();
  const off = DISABLED_PATHS.includes(pathname);

  useEffect(() => {
    if (off) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let last = 0;
    const onMove = (e) => {
      const now = performance.now();
      if (now - last < 55) return; // throttle so we emit a wisp, not a wall
      last = now;

      const green = e.target instanceof Element &&
        e.target.closest('[data-smoke="green"]');

      const puff = document.createElement("span");
      puff.className = "smoke-puff";
      puff.style.left = `${e.clientX}px`;
      puff.style.top = `${e.clientY}px`;
      puff.style.background = green
        ? "radial-gradient(circle, rgba(122,196,140,0.55), rgba(122,196,140,0) 70%)"
        : "radial-gradient(circle, rgba(198,191,178,0.42), rgba(198,191,178,0) 70%)";
      document.body.appendChild(puff);
      puff.addEventListener("animationend", () => puff.remove());
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.querySelectorAll(".smoke-puff").forEach((n) => n.remove());
    };
  }, [off]);

  return null;
}
