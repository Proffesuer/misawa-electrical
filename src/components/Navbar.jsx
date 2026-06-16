import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.jpeg";

const navLinks = [
  { label: "Home",     to: "/"         },
  { label: "About",    to: "/about"    },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Media",    to: "/media"    },
  { label: "Contact",  to: "/contact"  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <div className="navbar__inner">

        {/* Logo */}
        <NavLink to="/" className="navbar__logo-wrap">
          <img src={logo} alt="Misawa Electrical Solutions" className="navbar__logo" />
        </NavLink>

        {/* Desktop Links */}
        <ul className="navbar__links">
          {navLinks.map((l) => (
            <li key={l.label}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `navbar__link${isActive ? " navbar__link--active" : ""}`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <NavLink to="/contact" className="navbar__quote-btn">
          Get a Quote
        </NavLink>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger${menuOpen ? " navbar__hamburger--open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile${menuOpen ? " navbar__mobile--open" : ""}`}>
        {navLinks.map((l) => (
          <NavLink
            key={l.label}
            to={l.to}
            className={({ isActive }) =>
              `navbar__mobile-link${isActive ? " navbar__mobile-link--active" : ""}`
            }
            onClick={() => setMenuOpen(false)}
          >
            {l.label}
          </NavLink>
        ))}
        <NavLink
          to="/contact"
          className="navbar__mobile-cta-btn"
          onClick={() => setMenuOpen(false)}
        >
          Get a Quote
        </NavLink>
      </div>
    </nav>
  );
}