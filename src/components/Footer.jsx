import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import logo from "../assets/images/logo.jpeg";

const services = [
  "Electrical Drawings & BQ",
  "CCTV Installation",
  "Intercoms",
  "Electrical Works",
  "Solar Installation",
  "Electrical Fence",
  "General Maintenance",
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Media", href: "#media" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__grid">

          {/* Brand */}
          <div className="footer__brand">
            <img src={logo} alt="Misawa Electrical Solutions" className="footer__logo" />
            <p className="footer__tagline">
              Powering homes, businesses, and communities across Kenya with safe,
              reliable electrical solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__list">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="footer__list-link">
                    <span className="footer__arrow">›</span> {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer__col">
            <h4 className="footer__col-title">Our Services</h4>
            <ul className="footer__list">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="footer__list-link">
                    <span className="footer__arrow">›</span> {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__col-title">Contact Us</h4>
            <ul className="footer__contact-list">
              <li>
                <MdEmail className="footer__contact-icon" />
                <a href="mailto:info@misawaelectricals.co.ke" className="footer__list-link">
                  info@misawaelectricals.co.ke
                </a>
              </li>
              <li>
                <MdPhone className="footer__contact-icon" />
                <div>
                  <a href="tel:+254732062005" className="footer__list-link">+254 732 062005</a><br />
                  <a href="tel:+254724877573" className="footer__list-link">+254 724 877573</a>
                </div>
              </li>
              <li>
                <MdLocationOn className="footer__contact-icon" />
                <span className="footer__address">Box 95738 – 80100,<br />Mombasa GPO, Kenya</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <p className="footer__copy">
            © {new Date().getFullYear()} Misawa Electrical Solutions Company Limited. All rights reserved.
          </p>
          <p className="footer__credit">
            Designed &amp; Built by{" "}
            <a href="https://xiracom.com" target="_blank" rel="noreferrer" className="footer__credit-link">
              Xiracom Limited
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}