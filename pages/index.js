import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import BackgroundCanvas from "../components/BackgroundCanvas";

const projects = [
  {
    title: "Interactive Story",
    body: "A narrative-driven product launch with motion-led storytelling.",
    tag: "Web · Motion",
    media: "linear-gradient(135deg,#6ee7ff,#3b82f6 55%,#8b5cf6)",
  },
  {
    title: "Brand System",
    body: "A fluid visual identity tied together with glassmorphism and depth.",
    tag: "Branding",
    media: "linear-gradient(135deg,#fda4ff,#ec4899 50%,#8b5cf6)",
  },
  {
    title: "Web App",
    body: "A modern dashboard experience with premium animation and clarity.",
    tag: "Product",
    media: "linear-gradient(135deg,#a7f3d0,#06b6d4 55%,#3b82f6)",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Gosukri — Liquid glass storytelling</title>
        <meta
          name="description"
          content="Gosukri — product designer crafting immersive, liquid-glass digital experiences."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Gosukri — Liquid glass storytelling"
        />
        <meta
          property="og:description"
          content="Immersive, motion-led digital experiences with an Apple-inspired liquid glass aesthetic."
        />
      </Head>
      <div className="canvas-wrap">
        <BackgroundCanvas />
      </div>
      <div className="page-bg">
        <Header />
        <main className="container">
          <Hero />

          <section id="work" className="section work-section">
            <Reveal className="section-heading">
              <span className="eyebrow">Selected work</span>
              <h2>
                Crafting immersive digital experiences with polished motion
              </h2>
            </Reveal>
            <div className="cards">
              {projects.map((p, i) => (
                <Card key={p.title} delay={i * 0.08} {...p} />
              ))}
            </div>
          </section>

          <section id="about" className="section">
            <Reveal className="about-section glass">
              <div>
                <span className="eyebrow">About me</span>
                <h3>
                  Designing interfaces that feel tactile, expressive, and
                  modern.
                </h3>
                <p>
                  I am a product designer who blends layout, motion, and subtle
                  glass layers to deliver sites that feel both refined and
                  alive. My work focuses on storytelling, polished interaction,
                  and memorable branded experiences.
                </p>
              </div>
              <div className="about-stats">
                <div className="stat-card glass">
                  <strong className="gradient-text">10+</strong>
                  <span>digital launches</span>
                </div>
                <div className="stat-card glass">
                  <strong className="gradient-text">6</strong>
                  <span>brand systems</span>
                </div>
                <div className="stat-card glass">
                  <strong className="gradient-text">5</strong>
                  <span>years experience</span>
                </div>
              </div>
            </Reveal>
          </section>

          <section id="contact" className="section contact-section">
            <Reveal className="contact-card glass">
              <div>
                <span className="eyebrow">Let&apos;s build</span>
                <h3>Ready to bring your next product or story to life?</h3>
              </div>
              <a className="btn btn-secondary" href="mailto:hello@gosukri.com">
                Say hello
              </a>
            </Reveal>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
