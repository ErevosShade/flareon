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
      if (now - last < 22) return; // dense enough to read as a plume
      last = now;

      const green =
        e.target instanceof Element && e.target.closest('[data-smoke="green"]');

      // Three puffs per emission, scattered and staggered, so the trail has
      // volume instead of reading as a single dot chasing the cursor.
      for (let i = 0; i < 3; i++) {
        const puff = document.createElement("span");
        puff.className = "smoke-puff";
        puff.style.left = `${e.clientX + (Math.random() - 0.5) * 26}px`;
        puff.style.top = `${e.clientY + (Math.random() - 0.5) * 26}px`;
        const scale = 0.8 + Math.random() * 1.1;
        puff.style.width = `${34 * scale}px`;
        puff.style.height = `${34 * scale}px`;
        puff.style.animationDelay = `${i * 55}ms`;
        puff.style.setProperty("--drift", `${(Math.random() - 0.5) * 70}px`);
        puff.style.background = green
          ? "radial-gradient(circle, rgba(122,196,140,0.72), rgba(122,196,140,0) 70%)"
          : "radial-gradient(circle, rgba(214,208,196,0.62), rgba(214,208,196,0) 70%)";
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
