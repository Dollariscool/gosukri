// Inline SVG filter used to create the "liquid" refraction/distortion look.
// Rendered once (in _app) and referenced from CSS via filter: url(#glass-distortion).
export default function GlassFilters() {
  return (
    <svg className="glass-svg" aria-hidden="true" width="0" height="0">
      <defs>
        <filter id="glass-distortion" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.009 0.013"
            numOctaves="2"
            seed="7"
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="1.4" result="blurred" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blurred"
            scale="42"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  )
}
