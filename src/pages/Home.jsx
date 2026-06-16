import "./Home.css";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import SectionHeader from "../components/SectionHeader";

import img1 from "../assets/images/image1.jpeg";
import img2 from "../assets/images/image2.jpeg";
import img3 from "../assets/images/image3.jpeg";
import img6 from "../assets/images/image6.jpeg";
import img7 from "../assets/images/image7.jpeg";
import img8 from "../assets/images/image8.jpeg";
import img9 from "../assets/images/image9.jpeg";
import img10 from "../assets/images/image10.jpeg";

// ── DATA ──────────────────────────────────────────
const services = [
  { title: "Electrical Drawings & BQ",  desc: "Professional electrical layout drawings and Bill of Quantities for residential and commercial projects.", img: img1  },
  { title: "CCTV Installation",          desc: "Full CCTV system design, supply, and installation for total security coverage.",                          img: img6  },
  { title: "Intercoms",                  desc: "Video and audio intercom systems for secure, seamless access control.",                                    img: img7  },
  { title: "Electrical Works",           desc: "Complete wiring, fitting, and electrical infrastructure for new and existing buildings.",                  img: img2  },
  { title: "Solar Installation",         desc: "Solar panel installation and off-grid power solutions tailored to your energy needs.",                     img: img3  },
  { title: "Electrical Fence",           desc: "High-security electric fencing systems for perimeter protection of any property.",                         img: img8  },
  { title: "General Maintenance",        desc: "Ongoing electrical maintenance contracts and rapid emergency call-out services.",                           img: img9  },
];

const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "10+",  label: "Years Experience"   },
  { number: "200+", label: "Happy Clients"       },
  { number: "24/7", label: "Emergency Support"   },
];

const reasons = [
  { num: "01", title: "Certified Engineers",  desc: "All technicians are trained and certified to Kenya Power and industry standards." },
  { num: "02", title: "Timely Delivery",       desc: "We respect your timelines and deliver projects on schedule, every time."          },
  { num: "03", title: "Quality Assurance",     desc: "Approved materials, strict quality checks, and professional workmanship."         },
  { num: "04", title: "Transparent Pricing",   desc: "Detailed quotes with no hidden costs — value for every shilling you invest."      },
];

const galleryImgs = [img1, img2, img3, img6, img7, img8];

// ══════════════════════════════════════
// HERO
// ══════════════════════════════════════
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__bg">
        <img src={img10} alt="Electrical work" className="hero__bg-img" />
        <div className="hero__overlay" />
      </div>
      <div className="hero__content">
        <p className="hero__eyebrow">Powering Mombasa &amp; Beyond</p>
        <h1 className="hero__title">
          Electrical Solutions<br />
          <span className="hero__title--gold">You Can Trust</span>
        </h1>
        <p className="hero__sub">
          Professional electrical installations, CCTV, solar, and maintenance
          services delivered by certified engineers across Kenya.
        </p>
        <div className="hero__actions">
          <a href="#services" className="btn btn--gold">Our Services</a>
          <a href="#contact"  className="btn btn--outline">Get a Free Quote</a>
        </div>
      </div>
      <div className="hero__wave">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,80 L0,40 Q360,0 720,40 Q1080,80 1440,40 L1440,80 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}

// ══════════════════════════════════════
// STATS
// ══════════════════════════════════════
function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats__grid">
          {stats.map((s) => (
            <div className="stats__item" key={s.label}>
              <span className="stats__number">{s.number}</span>
              <span className="stats__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════
// SERVICES
// ══════════════════════════════════════
function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <SectionHeader eyebrow="What We Do" title="Our Services" />
        <div className="services__grid">
          {services.map((s) => (
            <div className="service-card" key={s.title}>
              <div className="service-card__img-wrap">
                <img src={s.img} alt={s.title} className="service-card__img" />
                <div className="service-card__img-overlay" />
              </div>
              <div className="service-card__body">
                <h3 className="service-card__title">{s.title}</h3>
                <p className="service-card__desc">{s.desc}</p>
                <a href="#contact" className="service-card__link">Get a Quote →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════
// WHY US
// ══════════════════════════════════════
function WhyUs() {
  return (
    <section className="whyus">
      <div className="container">
        <SectionHeader eyebrow="Why Misawa" title="Built on Reliability" light />
        <div className="whyus__grid">
          {reasons.map((r) => (
            <div className="whyus__card" key={r.num}>
              <span className="whyus__num">{r.num}</span>
              <h3 className="whyus__title">{r.title}</h3>
              <p className="whyus__desc">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════
// GALLERY
// ══════════════════════════════════════
function Gallery() {
  return (
    <section className="gallery" id="projects">
      <div className="container">
        <SectionHeader eyebrow="Our Work" title="Recent Projects" />
        <div className="gallery__grid">
          {galleryImgs.map((img, i) => (
            <div className="gallery__item" key={i}>
              <img src={img} alt={`Project ${i + 1}`} />
              <div className="gallery__overlay">
                <span>View Project</span>
              </div>
            </div>
          ))}
        </div>
        <div className="gallery__cta">
          <a href="#projects" className="btn btn--gold">View All Projects</a>
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════
// CONTACT
// ══════════════════════════════════════
function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container contact-section__inner">

        <div className="contact-section__left">
          <SectionHeader eyebrow="Get In Touch" title="Let's Work Together" centered={false} />
          <p className="contact-section__sub">
            Request a free site assessment or quote. Our team responds within 24 hours.
          </p>
          <ul className="contact-section__list">
            <li>
              <MdEmail className="contact-section__icon" />
              <a href="mailto:info@misawaelectricals.co.ke">info@misawaelectricals.co.ke</a>
            </li>
            <li>
              <MdPhone className="contact-section__icon" />
              <a href="tel:+254732062005">+254 732 062005</a>
              <span className="contact-section__divider">/</span>
              <a href="tel:+254724877573">+254 724 877573</a>
            </li>
            <li>
              <MdLocationOn className="contact-section__icon" />
              <span>Box 95738 – 80100, Mombasa GPO, Kenya</span>
            </li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="contact-form__row">
            <div className="contact-form__group">
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" required />
            </div>
            <div className="contact-form__group">
              <label>Phone Number</label>
              <input type="tel" placeholder="+254 700 000000" required />
            </div>
          </div>
          <div className="contact-form__group">
            <label>Email Address</label>
            <input type="email" placeholder="john@example.com" required />
          </div>
          <div className="contact-form__group">
            <label>Service Needed</label>
            <select>
              <option value="">Select a service...</option>
              <option>Electrical Drawings &amp; BQ</option>
              <option>CCTV Installation</option>
              <option>Intercoms</option>
              <option>Electrical Works</option>
              <option>Solar Installation</option>
              <option>Electrical Fence</option>
              <option>General Maintenance</option>
            </select>
          </div>
          <div className="contact-form__group">
            <label>Message</label>
            <textarea rows="4" placeholder="Tell us about your project..." required></textarea>
          </div>
          <button type="submit" className="btn btn--gold contact-form__submit">
            Send Message →
          </button>
        </form>

      </div>
    </section>
  );
}

// ══════════════════════════════════════
// MAIN EXPORT
// ══════════════════════════════════════
export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <WhyUs />
      <Gallery />
      <Contact />
    </>
  );
}