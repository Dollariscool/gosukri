export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner glass">
        <div className="footer-copy">
          © {new Date().getFullYear()} Gosukri — crafted with light &amp; glass
        </div>
        <div className="footer-links">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://x.com" target="_blank" rel="noreferrer">
            X
          </a>
          <a href="https://dribbble.com" target="_blank" rel="noreferrer">
            Dribbble
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
