export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner glass">
        <div className="footer-copy">© {new Date().getFullYear()} Gosukri</div>
        <div className="footer-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  )
}
