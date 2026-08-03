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
      if (now - last < 34) return; // a light trail, not a plume
      last = now;

      const green =
        e.target instanceof Element && e.target.closest('[data-smoke="green"]');

      // Two puffs per emission, scattered and staggered, so the trail keeps
      // some volume while staying faint enough to read through.
      for (let i = 0; i < 2; i++) {
        const puff = document.createElement("span");
        puff.className = "smoke-puff";
        puff.style.left = `${e.clientX + (Math.random() - 0.5) * 26}px`;
        puff.style.top = `${e.clientY + (Math.random() - 0.5) * 26}px`;
        const scale = 0.7 + Math.random() * 0.85;
        puff.style.width = `${34 * scale}px`;
        puff.style.height = `${34 * scale}px`;
        puff.style.animationDelay = `${i * 70}ms`;
        puff.style.setProperty("--drift", `${(Math.random() - 0.5) * 56}px`);
        puff.style.background = green
          ? "radial-gradient(circle, rgba(122,196,140,0.4), rgba(122,196,140,0) 70%)"
          : "radial-gradient(circle, rgba(214,208,196,0.34), rgba(214,208,196,0) 70%)";
        document.body.appendChild(puff);
        puff.addEventListener("animationend", () => puff.remove());
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.querySelectorAll(".smoke-puff").forEach((n) => n.remove());
    };
  }, [off]);

  return null;
}
