import "./Section.css";
import "./Footer.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="contact">
      <span className="corner-mark corner-mark--tl" aria-hidden="true">
        +
      </span>
      <span className="corner-mark corner-mark--tr" aria-hidden="true">
        +
      </span>
      <span className="corner-mark corner-mark--bl" aria-hidden="true">
        +
      </span>
      <span className="corner-mark corner-mark--br" aria-hidden="true">
        +
      </span>

      <div className="contact-body">
        <h2 className="contact-heading">
          LET'S
          <br />
          CONNECT.
        </h2>
        <a href="mailto:contact@tarangjanawalkar.com" className="contact-email">
          CONTACT@TARANGJANAWALKAR.COM
        </a>
        <button
          className="scroll-to-top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      </div>

      <div className="contact-bottom">
        <div className="contact-socials">
          <a
            href="https://linkedin.com/in/tarang-janawalkar"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN
          </a>
          <a
            href="https://github.com/Tarang74"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>
          <a
            href="https://orcid.org/0000-0002-1535-4931"
            target="_blank"
            rel="noopener noreferrer"
          >
            ORCID
          </a>
        </div>
        <p className="contact-copy">© {year} TARANG JANAWALKAR</p>
      </div>
    </footer>
  );
}
