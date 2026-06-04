// Pure-CSS animated "liquid" background. No WebGL / three.js needed.
export default function BackgroundCanvas() {
  return (
    <div className="liquid-bg" aria-hidden="true">
      <span className="blob b1" />
      <span className="blob b2" />
      <span className="blob b3" />
      <span className="blob b4" />
    </div>
  );
}
