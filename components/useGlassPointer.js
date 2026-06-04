// Updates CSS custom properties on the hovered element so CSS can render a
// cursor-following highlight (--mx/--my) and a subtle 3D tilt (--rx/--ry).
export function useGlassPointer(maxTilt = 6) {
  const onMouseMove = (e) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty("--mx", px * 100 + "%");
    el.style.setProperty("--my", py * 100 + "%");
    el.style.setProperty("--ry", (px - 0.5) * (maxTilt * 2) + "deg");
    el.style.setProperty("--rx", (py - 0.5) * (-maxTilt * 2) + "deg");
  };
  const onMouseLeave = (e) => {
    const el = e.currentTarget;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };
  return { onMouseMove, onMouseLeave };
}
