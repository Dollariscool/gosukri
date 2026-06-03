import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <div className="bg-gradient" />
    </>
  )
}
