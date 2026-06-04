import Reveal from "./Reveal";
import { useGlassPointer } from "./useGlassPointer";

export default function Card({ title, body, tag, media, delay = 0 }) {
  const glass = useGlassPointer(7);
  const mediaStyle = { background: media };
  return (
    <Reveal className="card-reveal" delay={delay}>
      <article
        className="card glass card-tilt"
        onMouseMove={glass.onMouseMove}
        onMouseLeave={glass.onMouseLeave}
      >
        <span className="glass-light" />
        <div className="card-media" style={mediaStyle}>
          {tag ? <span className="card-tag">{tag}</span> : null}
        </div>
        <h3>{title}</h3>
        <p>{body}</p>
        <span className="card-arrow">Explore →</span>
      </article>
    </Reveal>
  );
}
