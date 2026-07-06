export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        © {new Date().getFullYear()} Debora Dias — Feito com <span className="accent">♥</span>
      </p>
      <span className="footer-mono">design &amp; code by DD</span>
    </footer>
  )
}
