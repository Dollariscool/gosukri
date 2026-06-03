import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Card from '../components/Card'
import Footer from '../components/Footer'
import BackgroundCanvas from '../components/BackgroundCanvas'

export default function Home() {
  return (
    <>
      <Head>
        <title>Gosukri — Liquid glass storytelling</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="page-bg">
        <Header />
        <div className="canvas-wrap">
          <BackgroundCanvas />
        </div>
        <main className="container">
          <Hero />
          <section id="work" className="section work-section">
            <div className="section-heading">
              <span className="eyebrow">Selected work</span>
              <h2>Crafting immersive digital experiences with polished motion</h2>
            </div>
            <div className="cards">
              <Card title="Interactive Story" body="A narrative-driven product launch with motion-led storytelling." />
              <Card title="Brand System" body="A fluid visual identity tied together with glassmorphism and depth." />
              <Card title="Web App" body="A modern dashboard experience with premium animation and clarity." />
            </div>
          </section>
          <section id="about" className="section about-section glass">
            <div>
              <span className="eyebrow">About me</span>
              <h3>Designing interfaces that feel tactile, expressive, and modern.</h3>
              <p>I am a product designer who blends layout, motion, and subtle glass layers to deliver sites that feel both refined and alive. My work focuses on storytelling, polished interaction, and memorable branded experiences.</p>
            </div>
            <div className="about-stats">
              <div className="stat-card glass">
                <strong>10+</strong>
                <span>digital launches</span>
              </div>
              <div className="stat-card glass">
                <strong>6</strong>
                <span>brand systems</span>
              </div>
              <div className="stat-card glass">
                <strong>5</strong>
                <span>years experience</span>
              </div>
            </div>
          </section>
          <section id="contact" className="section contact-section">
            <div className="contact-card glass">
              <div>
                <span className="eyebrow">Let's build</span>
                <h3>Ready to bring your next product or story to life?</h3>
              </div>
              <a className="btn btn-secondary" href="mailto:hello@gosukri.com">Say hello</a>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
