import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Card from '../components/Card'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Personal — Gosukri</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="page-bg">
        <Header />
        <main className="container">
          <Hero />
          <section className="cards">
            <Card title="About" body="Minimal glassmorphism-inspired intro." />
            <Card title="Work" body="Showcase projects and case studies." />
            <Card title="Contact" body="Links and ways to reach out." />
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
