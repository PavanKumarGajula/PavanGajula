export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div>&copy; {new Date().getFullYear()} Pavan Gajula &middot; Elkridge, MD</div>
          <div className="footer-links">
            <a href="mailto:pavangajula1998@gmail.com">email</a>
            <a
              href="https://linkedin.com/in/gajulapavankumar"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
