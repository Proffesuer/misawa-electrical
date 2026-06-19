import "./Services.css";
import { Link } from "react-router-dom";
import { MdCheck, MdArrowForward, MdDesignServices, MdSecurity,
         MdInterpreterMode, MdBolt, MdSolarPower, MdFence, MdBuild } from "react-icons/md";

import img2   from "../assets/images/image2.jpeg";
import img3   from "../assets/images/image3.jpeg";
import img4   from "../assets/images/image4.jpeg";
import img6   from "../assets/images/image6.jpeg";
import img9   from "../assets/images/image9.jpeg";
import img10  from "../assets/images/image10.jpeg";
import cctv   from "../assets/images/cctv.jpeg";
import srvs   from "../assets/images/server-setup.jpeg";
import setup  from "../assets/images/setup.jpeg";
import design from "../assets/images/electrical-drawing.png";

const services = [
  {
    id: "01", icon: <MdDesignServices />,
    title: "Electrical Drawings & BQ",
    tag: "Design & Planning",
    img: design,
    desc: "We prepare detailed and professional electrical layout drawings and Bills of Quantities for residential, commercial, and industrial projects — all conforming to Kenya Power standards and local building codes.",
    points: ["Single and three-phase designs", "Load calculations & schedules", "Bill of Quantities preparation", "Kenya Power compliance", "CAD-based layout drawings"],
  },
  {
    id: "02", icon: <MdSecurity />,
    title: "CCTV Installation",
    tag: "Security Systems",
    img: cctv,
    desc: "We supply, install, and configure complete CCTV surveillance systems for homes, offices, warehouses, and institutions. HD footage, remote viewing, and 24/7 monitoring capability as standard.",
    points: ["HD & IP camera systems", "DVR/NVR configuration", "Remote mobile viewing", "Night vision cameras", "Maintenance contracts"],
  },
  {
    id: "03", icon: <MdInterpreterMode />,
    title: "Intercoms & Access Control",
    tag: "Access Management",
    img: srvs,
    desc: "Our intercom systems provide secure communication and access control for residential estates, apartments, and commercial buildings — both audio and video solutions installed and configured.",
    points: ["Video & audio intercoms", "Multi-apartment systems", "Access control integration", "Gate automation linking", "Service & maintenance"],
  },
  {
    id: "04", icon: <MdBolt />,
    title: "Electrical Works",
    tag: "Power & Wiring",
    img: img6,
    desc: "From new installations to rewiring and upgrades, our certified electricians handle all aspects of electrical work for homes and commercial properties with safety and precision.",
    points: ["New building wiring", "Rewiring & upgrades", "Distribution board installation", "Three-phase power setup", "Fault diagnosis & repair"],
  },
  {
    id: "05", icon: <MdSolarPower />,
    title: "Solar Installation",
    tag: "Renewable Energy",
    img: img3,
    desc: "We design and install solar energy systems for off-grid and on-grid applications. Our solar solutions reduce electricity bills and provide reliable power for homes and businesses across Kenya.",
    points: ["Solar panel supply & install", "Battery backup systems", "Inverter installation", "Grid-tie solar systems", "System monitoring & maintenance"],
  },
  {
    id: "06", icon: <MdFence />,
    title: "Electric Fencing",
    tag: "Perimeter Security",
    img: img4,
    desc: "We install high-security electric perimeter fencing for homes, schools, hotels, and commercial properties — energiser-powered, reliable, and fully compliant with safety standards.",
    points: ["Energiser-powered systems", "Perimeter design & planning", "Alarm integration", "Compliance with safety codes", "Regular maintenance contracts"],
  },
  {
    id: "07", icon: <MdBuild />,
    title: "General Maintenance",
    tag: "Ongoing Support",
    img: setup,
    desc: "We offer planned and reactive electrical maintenance services to keep your systems running safely and efficiently. Our emergency call-out team is available around the clock.",
    points: ["Planned preventive maintenance", "Emergency call-out service", "Electrical safety audits", "Equipment servicing", "Annual maintenance contracts"],
  },
];

export default function ServicesPage() {
  return (
    <div className="services-page">

      {/* ── BANNER ── */}
      <section className="svc-banner">
        <div className="svc-banner__bg">
          <img src={img10} alt="Electrical work" className="svc-banner__img" />
          <div className="svc-banner__overlay" />
        </div>
        <div className="container svc-banner__content">
          <p className="svc-banner__eyebrow">What We Offer</p>
          <h1 className="svc-banner__title">Our Services</h1>
          <p className="svc-banner__sub">
            Comprehensive electrical solutions delivered by certified engineers across Kenya.
          </p>
          <div className="svc-banner__pills">
            {services.map(s => (
              <a key={s.id} href={`#svc-${s.id}`} className="svc-banner__pill">
                {s.icon} {s.title}
              </a>
            ))}
          </div>
        </div>
        <div className="svc-banner__wave">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,60 L0,30 Q360,0 720,30 Q1080,60 1440,30 L1440,60 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ── SERVICES LIST ── */}
      <section className="svc-list">
        <div className="container">
          {services.map((s, i) => (
            <div
              id={`svc-${s.id}`}
              className={`svc-item ${i % 2 !== 0 ? "svc-item--flip" : ""}`}
              key={s.id}
            >
              {/* Image side */}
              <div className="svc-item__visual">
                <img src={s.img} alt={s.title} className="svc-item__img" />
                <div className="svc-item__num">{s.id}</div>
                <div className="svc-item__tag">
                  <span className="svc-item__tag-icon">{s.icon}</span>
                  {s.tag}
                </div>
              </div>

              {/* Text side */}
              <div className="svc-item__body">
                <h2 className="svc-item__title">{s.title}</h2>
                <div className="svc-item__divider" />
                <p className="svc-item__desc">{s.desc}</p>
                <ul className="svc-item__points">
                  {s.points.map(p => (
                    <li key={p}>
                      <MdCheck className="svc-item__check" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="svc-item__cta">
                  Request This Service <MdArrowForward />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="svc-cta">
        <div className="svc-cta__bg">
          <img src={img9} alt="Electrical panels" className="svc-cta__bg-img" />
          <div className="svc-cta__overlay" />
        </div>
        <div className="container svc-cta__inner">
          <div>
            <h2 className="svc-cta__title">Not Sure What You Need?</h2>
            <p className="svc-cta__sub">Contact us for a free consultation and site assessment.</p>
          </div>
          <Link to="/contact" className="btn btn--gold">Talk to an Engineer</Link>
        </div>
      </section>

    </div>
  );
}