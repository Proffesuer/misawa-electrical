import "./Home.css";
import { useState, useEffect } from "react";
import { MdEmail, MdPhone, MdLocationOn, MdBolt, MdSecurity,
         MdSolarPower, MdFence, MdBuild, MdDesignServices, MdInterpreterMode,
         MdVerifiedUser, MdSchedule, MdFactCheck, MdReceiptLong,
         MdElectricBolt, MdNotificationsActive, MdDirectionsCar,
         MdVideocam, MdHandyman } from "react-icons/md";
import SectionHeader from "../components/SectionHeader";

import img1   from "../assets/images/image1.jpeg";   // panel/wiring closeup
import img2   from "../assets/images/image2.jpeg";   // rooftop solar panels
import img3   from "../assets/images/image3.jpeg";   // solar panel side
import img4   from "../assets/images/image4.jpeg";   // outdoor installation
import img6   from "../assets/images/image6.jpeg";   // DB board / panels room
import img7   from "../assets/images/image7.jpeg";   // corridor / building electrical
import img8   from "../assets/images/image8.jpeg";   // interior ceiling fittings
import img9   from "../assets/images/image9.jpeg";   // panel rows
import img10  from "../assets/images/image10.jpeg";  // hero - electrical room
import img5   from "../assets/images/imgae5.jpeg";   // distribution board
import cctv   from "../assets/images/cctv.jpeg";     // outdoor cctv
import cctv1  from "../assets/images/cctv-1.jpeg";   // cctv outdoor mount
import cctv2  from "../assets/images/cctv-2.jpeg";   // cctv pole
import cctv3  from "../assets/images/cctv3.jpeg";    // ceiling dome cam
import cctv4  from "../assets/images/cctv4.jpeg";    // ceiling tile cam
import ctrl   from "../assets/images/control-room-cctv.jpeg"; // control room
import srv    from "../assets/images/server-room.jpeg";        // server room
import srvs   from "../assets/images/server-setup.jpeg";       // server rack/intercom setup
import setup  from "../assets/images/setup.jpeg";    // MCB/maintenance board
import setup2 from "../assets/images/setup2.jpeg";   // outdoor installation
import design from "../assets/images/design.jpeg";
import fenceVid from "../assets/images/sample-video-of-security-digital-fence-work-we-do.mp4";
import boq    from "../assets/images/BOQ(1).png";    // BOQ document

// ── DATA ─────────────────────────────
const heroSlides = [
  { img: img10,  eyebrow: "Powering Mombasa & Beyond",   title: "Electrical Solutions",    accent: "You Can Trust",  sub: "Professional electrical installations, CCTV, solar, and security systems delivered by certified engineers across Kenya." },
  { img: ctrl,   eyebrow: "Complete Security Systems",   title: "See Every Corner,",       accent: "Stay Protected", sub: "End-to-end CCTV design, supply, and installation — from residential homes to large commercial control rooms." },
  { img: img3,   eyebrow: "Clean Energy for Kenya",      title: "Solar Power",             accent: "Built to Last",  sub: "Off-grid and hybrid solar solutions designed for Kenyan conditions, reducing your energy bills from day one." },
];

const tickerItems = [
  { icon: <MdDesignServices />, label: "Electrical Drawings & BQ"      },
  { icon: <MdSecurity />,       label: "CCTV Installation"             },
  { icon: <MdInterpreterMode />,label: "Intercoms & Access Control"    },
  { icon: <MdBolt />,           label: "Electrical Works"              },
  { icon: <MdSolarPower />,     label: "Solar Installation"            },
  { icon: <MdFence />,          label: "Electric Fencing"              },
  { icon: <MdBuild />,          label: "General Maintenance"           },
  { icon: <MdHandyman />,       label: "Structured Cabling & Server Rooms" },
];

const services = [
  // img assignments carefully matched to actual image content
  { icon: <MdDesignServices />, title: "Electrical Drawings & BQ",      img: design, desc: "Detailed electrical layout drawings and Bills of Quantities for residential, commercial, and industrial projects — prepared to Kenya Power standards.", bullets: ["AutoCAD layout plans","Accurate cost estimates","Regulatory compliance"] },
  { icon: <MdSecurity />,       title: "CCTV Installation",             img: cctv,   desc: "Full-scope CCTV system design, supply, and commissioning. We cover IP cameras, DVR/NVR setups, remote viewing, and 24/7 monitoring integration.", bullets: ["IP & analog cameras","Remote mobile access","Night vision & PTZ"] },
  { icon: <MdInterpreterMode />,title: "Intercoms & Access Control",    img: srvs,   desc: "Video and audio intercom systems for secure, seamless entry management — ideal for apartments, offices, schools, and gated compounds.", bullets: ["Video door phones","Gate automation","Multi-unit systems"] },
  { icon: <MdBolt />,           title: "Electrical Works",              img: img6,   desc: "Complete wiring, fitting, and electrical infrastructure for new builds and renovations. Consumer units, DB boards, lighting, and power points.", bullets: ["New installations","Rewiring & upgrades","Consumer unit fitting"] },
  { icon: <MdSolarPower />,     title: "Solar Installation",            img: img2,   desc: "Grid-tied, off-grid, and hybrid solar power systems tailored to your energy consumption. We supply, install, and commission panels with inverters and batteries.", bullets: ["Panel supply & install","Battery backup systems","Energy audits"] },
  { icon: <MdFence />,          title: "Electric Fencing",              img: img4,   desc: "High-security electric perimeter fencing for homes, businesses, farms, and institutions. Our systems deter intruders while meeting safety regulations.", bullets: ["Perimeter protection","Alarm integration","Regular energiser service"] },
  { icon: <MdBuild />,          title: "General Maintenance",           img: setup,  desc: "Scheduled electrical maintenance contracts and rapid emergency call-out services. Keep your systems running safely — we respond fast when you need us.", bullets: ["Preventive maintenance","Emergency call-outs","Annual contracts"] },
];

const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "10+",  label: "Years Experience"   },
  { number: "200+", label: "Happy Clients"       },
  { number: "24/7", label: "Emergency Support"   },
];

const reasons = [
  { title: "Certified Engineers",  desc: "All technicians trained and certified to Kenya Power and industry standards.", icon: <MdVerifiedUser />  },
  { title: "Timely Delivery",      desc: "We respect your timelines — projects delivered on schedule, every time.",      icon: <MdSchedule />      },
  { title: "Quality Assurance",    desc: "Approved materials, strict quality checks, and professional workmanship.",      icon: <MdFactCheck />     },
  { title: "Transparent Pricing",  desc: "Detailed quotes with no hidden costs — value for every shilling you invest.",   icon: <MdReceiptLong />   },
];

const galleryItems = [
  { img: img6,   label: "Panel Installation"    },
  { img: cctv1,  label: "CCTV Outdoor Camera"   },
  { img: img5,   label: "Distribution Board"    },
  { img: ctrl,   label: "CCTV Control Room"     },
  { img: cctv3,  label: "Camera Mounting"       },
  { img: img2,   label: "Solar Rooftop"         },
  { img: srv,    label: "Server Room Cabling"   },
  { img: cctv4,  label: "Ceiling Camera"        },
  { img: setup2, label: "Site Installation"     },
];

// ══════════════════════════════════════
// TICKER
// ══════════════════════════════════════
function Ticker() {
  const repeated = [...tickerItems, ...tickerItems, ...tickerItems];
  return (
    <div className="ticker">
      <div className="ticker__inner">
        <div className="ticker__track">
          {repeated.map((item, i) => (
            <span key={i} className="ticker__item">
              <span className="ticker__icon">{item.icon}</span>
              {item.label}
              <span className="ticker__sep">•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════
// HERO
// ══════════════════════════════════════
function Hero() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % heroSlides.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="hero" id="home">
      {heroSlides.map((s, i) => (
        <div key={i} className={`hero__slide ${i === active ? "hero__slide--active" : ""}`}>
          <img src={s.img} alt={s.title} className="hero__slide-img" />
          <div className="hero__overlay" />
        </div>
      ))}
      <div className="hero__content">
        <p className="hero__eyebrow">{heroSlides[active].eyebrow}</p>
        <h1 className="hero__title">
          {heroSlides[active].title}<br />
          <span className="hero__title--gold">{heroSlides[active].accent}</span>
        </h1>
        <p className="hero__sub">{heroSlides[active].sub}</p>
        <div className="hero__actions">
          <a href="#services" className="btn btn--gold">Our Services</a>
          <a href="#contact"  className="btn btn--outline">Get a Free Quote</a>
        </div>
      </div>
      <div className="hero__dots">
        {heroSlides.map((_, i) => (
          <button key={i} className={`hero__dot ${i === active ? "hero__dot--active" : ""}`} onClick={() => setActive(i)} aria-label={`Slide ${i + 1}`} />
        ))}
      </div>
      <div className="hero__wave">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,80 L0,40 Q360,0 720,40 Q1080,80 1440,40 L1440,80 Z" fill="#1E2D6B" />
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
// ABOUT STRIP
// ══════════════════════════════════════
function AboutStrip() {
  return (
    <section className="about-strip">
      <div className="container about-strip__inner">
        <div className="about-strip__text">
          <p className="about-strip__eyebrow">Who We Are</p>
          <h2 className="about-strip__title">Misawa Electrical<br />Solutions</h2>
          <p className="about-strip__body">
            Based in Mombasa, we are a licensed electrical contractor serving
            residential, commercial, and industrial clients across Kenya. With
            over a decade of hands-on experience, our certified engineers deliver
            safe, code-compliant, and long-lasting electrical systems.
          </p>
          <p className="about-strip__body">
            From a single light point to a full building installation — from
            basic CCTV to integrated security control rooms — we bring the same
            commitment to every project.
          </p>
          <div className="about-strip__badges">
            <div className="about-strip__badge"><strong>500+</strong><span>Projects</span></div>
            <div className="about-strip__badge"><strong>10+</strong><span>Years</span></div>
            <div className="about-strip__badge"><strong>200+</strong><span>Clients</span></div>
          </div>
          <a href="/about" className="btn btn--navy">Learn More About Us</a>
        </div>
        <div className="about-strip__grid">
          <img src={img9}   alt="Panel rows"        className="about-strip__pic about-strip__pic--tall" />
          <img src={cctv}   alt="CCTV camera"       className="about-strip__pic" />
          <img src={setup}  alt="MCB board"         className="about-strip__pic" />
          <img src={img2}   alt="Solar panels"      className="about-strip__pic" />
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
      <div className="services__scroll-wrap">
        <div className="services__scroll-track">
          {[...services, ...services].map((s, i) => (
            <a href="#contact" className="svc-tile" key={i}>
              <img src={s.img} alt={s.title} className="svc-tile__img" />
              <div className="svc-tile__grad" />
              <div className="svc-tile__bottom">
                <span className="svc-tile__icon">{s.icon}</span>
                <span className="svc-tile__title">{s.title}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════
// CCTV FEATURE STRIP
// ══════════════════════════════════════
function CctvStrip() {
  return (
    <section className="cctv-strip">
      <div className="container cctv-strip__inner">

        {/* Left — single large hero image */}
        <div className="cctv-strip__visual">
          <img src={ctrl} alt="CCTV Control Room" className="cctv-strip__main-img" />
          <div className="cctv-strip__img-badge">
            <MdSecurity />
            <span>24/7 Monitoring</span>
          </div>
        </div>

        {/* Right — text + small 2-col grid */}
        <div className="cctv-strip__text">
          <p className="cctv-strip__eyebrow">Security You Can See</p>
          <h2 className="cctv-strip__title">Full CCTV &amp; Access Control Solutions</h2>
          <p className="cctv-strip__body">
            From a single outdoor camera to a full multi-site IP network —
            we design, supply, install, and maintain systems that keep your
            property protected around the clock.
          </p>

          <div className="cctv-strip__features">
            {[
              { icon: <MdVideocam />,            label: "IP & Analog Cameras"   },
              { icon: <MdSecurity />,            label: "DVR / NVR Systems"     },
              { icon: <MdNotificationsActive />, label: "Remote Mobile Viewing" },
              { icon: <MdHandyman />,            label: "Alarm Integration"     },
            ].map(f => (
              <div key={f.label} className="cctv-strip__feature">
                <span className="cctv-strip__feature-icon">{f.icon}</span>
                <span>{f.label}</span>
              </div>
            ))}
          </div>

          <div className="cctv-strip__thumbs">
            <img src={cctv2} alt="Outdoor CCTV" />
            <img src={cctv1} alt="Camera mount" />
          </div>

          <a href="#contact" className="btn btn--navy">Get a CCTV Quote</a>
        </div>

      </div>
    </section>
  );
}

// ══════════════════════════════════════
// CINEMATIC VIDEO HERO SECTION
// ══════════════════════════════════════
function VideoHero() {
  return (
    <section className="vid-hero">
      <div className="vid-hero__bg">
        <video
          className="vid-hero__video"
          src={fenceVid}
          poster={img4}
          loop muted autoPlay playsInline preload="auto"
        />
        <div className="vid-hero__overlay" />
      </div>
      <div className="vid-hero__content">
        <p className="vid-hero__eyebrow">Misawa Electrical Solutions · Mombasa, Kenya</p>
        <h2 className="vid-hero__title">
          Electric Security<br />
          <span className="vid-hero__title--gold">Fencing That Works</span>
        </h2>
        <p className="vid-hero__sub">
          High-tensile perimeter fencing with alarm integration, gate automation,
          and CCTV pairing — protecting homes, farms, and businesses across Kenya.
        </p>
        <div className="vid-hero__actions">
          <a href="#contact" className="btn btn--gold">Get a Fencing Quote</a>
          <a href="/services" className="btn btn--outline">All Our Services</a>
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
        <SectionHeader eyebrow="Why Choose Us" title="Built on Reliability" light />
        <div className="whyus__grid">
          {reasons.map((r) => (
            <div className="whyus__card" key={r.title}>
              <span className="whyus__icon">{r.icon}</span>
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
  const [lightbox, setLightbox] = useState(null);
  return (
    <section className="gallery" id="projects">
      <div className="container">
        <SectionHeader eyebrow="Our Work" title="Recent Projects" />
        <div className="gallery__grid">
          {galleryItems.map((item, i) => (
            <div className="gallery__item" key={i} onClick={() => setLightbox(i)}>
              <img src={item.img} alt={item.label} />
              <div className="gallery__overlay"><span>{item.label}</span></div>
            </div>
          ))}
        </div>
        <div className="gallery__cta">
          <a href="/projects" className="btn btn--navy">View All Projects</a>
        </div>
      </div>
      {lightbox !== null && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox__close" onClick={() => setLightbox(null)}>✕</button>
          <button className="lightbox__prev" onClick={e => { e.stopPropagation(); setLightbox((lightbox - 1 + galleryItems.length) % galleryItems.length); }}>‹</button>
          <img src={galleryItems[lightbox].img} alt={galleryItems[lightbox].label} className="lightbox__img" onClick={e => e.stopPropagation()} />
          <p className="lightbox__label">{galleryItems[lightbox].label}</p>
          <button className="lightbox__next" onClick={e => { e.stopPropagation(); setLightbox((lightbox + 1) % galleryItems.length); }}>›</button>
        </div>
      )}
    </section>
  );
}

// ══════════════════════════════════════
// INFRA STRIP
// ══════════════════════════════════════
function InfraStrip() {
  return (
    <section className="infra-strip">
      <div className="container infra-strip__inner">
        <div className="infra-strip__text">
          <p className="infra-strip__eyebrow">Structured Cabling & Server Rooms</p>
          <h2 className="infra-strip__title">Network Infrastructure Done Right</h2>
          <p className="infra-strip__body">
            Beyond power — we build the structured cabling, server racks, and data
            infrastructure your business needs. Clean, organized, and built to last.
          </p>
          <ul className="infra-strip__list">
            <li>Cat6 / Fiber structured cabling</li>
            <li>Server rack installation & cable management</li>
            <li>UPS and power protection</li>
            <li>Data centre fit-out</li>
          </ul>
          <a href="#contact" className="btn btn--gold">Request a Quote</a>
        </div>
        <div className="infra-strip__images">
          <img src={srv}  alt="Server room"  className="infra-strip__img infra-strip__img--main" />
          <img src={srvs} alt="Server setup" className="infra-strip__img infra-strip__img--float" />
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
          <p className="contact-section__sub">Request a free site assessment or quote. Our team responds within 24 hours.</p>
          <ul className="contact-section__list">
            <li><MdEmail className="contact-section__icon" /><a href="mailto:info@misawaelectricals.co.ke">info@misawaelectricals.co.ke</a></li>
            <li><MdPhone className="contact-section__icon" /><a href="tel:+254732062005">+254 732 062005</a><span className="contact-section__divider">/</span><a href="tel:+254724877573">+254 724 877573</a></li>
            <li><MdLocationOn className="contact-section__icon" /><span>Box 95738 – 80100, Mombasa GPO, Kenya</span></li>
          </ul>
          <div className="contact-section__img-strip">
            <img src={img1}  alt="Work 1" />
            <img src={img8}  alt="Work 2" />
            <img src={setup2} alt="Work 3" />
          </div>
        </div>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <h3 className="contact-form__heading">Send Us a Message</h3>
          <div className="contact-form__row">
            <div className="contact-form__group"><label>Full Name</label><input type="text" placeholder="John Doe" required /></div>
            <div className="contact-form__group"><label>Phone Number</label><input type="tel" placeholder="+254 700 000000" required /></div>
          </div>
          <div className="contact-form__group"><label>Email Address</label><input type="email" placeholder="john@example.com" required /></div>
          <div className="contact-form__group">
            <label>Service Needed</label>
            <select>
              <option value="">Select a service...</option>
              <option>Electrical Drawings & BQ</option>
              <option>CCTV Installation</option>
              <option>Intercoms & Access Control</option>
              <option>Electrical Works</option>
              <option>Solar Installation</option>
              <option>Electric Fencing</option>
              <option>General Maintenance</option>
              <option>Structured Cabling / Server Room</option>
            </select>
          </div>
          <div className="contact-form__group"><label>Message</label><textarea rows="4" placeholder="Tell us about your project..." required></textarea></div>
          <button type="submit" className="btn btn--gold contact-form__submit">Send Message →</button>
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
      <AboutStrip />
      <Services />
      <CctvStrip />
      <WhyUs />
      <Gallery />
      <InfraStrip />
      <VideoHero />
      <Ticker />
      <Contact />
    </>
  );
}