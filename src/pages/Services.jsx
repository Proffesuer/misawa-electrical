import "./Services.css";
import { MdCheck } from "react-icons/md";
import SectionHeader from "../components/SectionHeader";
import img1 from "../assets/images/image1.jpeg";
import img2 from "../assets/images/image2.jpeg";
import img3 from "../assets/images/image3.jpeg";
import img6 from "../assets/images/image6.jpeg";
import img7 from "../assets/images/image7.jpeg";
import img8 from "../assets/images/image8.jpeg";
import img9 from "../assets/images/image9.jpeg";

const services = [
  {
    id: "01", title: "Electrical Drawings & BQ", img: img1,
    desc: "We prepare detailed and professional electrical layout drawings and Bills of Quantities (BQ) for residential, commercial, and industrial projects. Our drawings conform to Kenya Power standards and local building codes.",
    points: ["Single and three-phase designs", "Load calculations & schedules", "Bill of Quantities preparation", "Compliance with Kenya Power standards", "CAD-based layout drawings"],
  },
  {
    id: "02", title: "CCTV Installation", img: img6,
    desc: "We supply, install, and configure complete CCTV surveillance systems for homes, offices, warehouses, and institutions. Our systems offer HD footage, remote viewing, and 24/7 monitoring capability.",
    points: ["HD & IP camera systems", "DVR/NVR configuration", "Remote mobile viewing setup", "Night vision cameras", "Maintenance & support contracts"],
  },
  {
    id: "03", title: "Intercoms", img: img7,
    desc: "Our intercom systems provide secure communication and access control for residential estates, apartments, and commercial buildings. We install both audio and video intercom solutions.",
    points: ["Video & audio intercoms", "Multi-apartment systems", "Access control integration", "Gate automation linking", "Service & maintenance"],
  },
  {
    id: "04", title: "Electrical Works", img: img2,
    desc: "From new installations to rewiring and upgrades, our certified electricians handle all aspects of electrical work for homes and commercial properties with safety and precision.",
    points: ["New building wiring", "Rewiring & upgrades", "Distribution board installation", "Three-phase power setup", "Fault diagnosis & repair"],
  },
  {
    id: "05", title: "Solar Installation", img: img3,
    desc: "We design and install solar energy systems for off-grid and on-grid applications. Our solar solutions reduce electricity bills and provide reliable power for homes and businesses.",
    points: ["Solar panel supply & installation", "Battery backup systems", "Inverter installation", "Grid-tie solar systems", "System monitoring & maintenance"],
  },
  {
    id: "06", title: "Electrical Fence", img: img8,
    desc: "We install high-security electric perimeter fencing for homes, schools, hotels, and commercial properties. Our systems are energizer-powered, reliable, and compliant with safety standards.",
    points: ["Energizer-powered systems", "Perimeter design & planning", "Alarm integration", "Compliance with safety codes", "Regular maintenance contracts"],
  },
  {
    id: "07", title: "General Maintenance", img: img9,
    desc: "We offer planned and reactive electrical maintenance services to keep your systems running safely and efficiently. Our emergency call-out team is available around the clock.",
    points: ["Planned preventive maintenance", "Emergency call-out service", "Electrical safety audits", "Equipment servicing", "Annual maintenance contracts"],
  },
];

export default function Services() {
  return (
    <div className="services-page">

      {/* ── BANNER ── */}
      <section className="page-banner">
        <div className="page-banner__overlay" />
        <div className="page-banner__content container">
          <p className="page-banner__eyebrow">What We Offer</p>
          <h1 className="page-banner__title">Our Services</h1>
          <p className="page-banner__sub">
            Comprehensive electrical solutions delivered by certified engineers across Kenya.
          </p>
        </div>
      </section>

      {/* ── SERVICES LIST ── */}
      <section className="services-list">
        <div className="container">
          {services.map((s, i) => (
            <div className={`services-list__item${i % 2 !== 0 ? " services-list__item--reverse" : ""}`} key={s.id}>
              <div className="services-list__img-wrap">
                <img src={s.img} alt={s.title} />
                <div className="services-list__id">{s.id}</div>
              </div>
              <div className="services-list__content">
                <p className="services-list__eyebrow">Service {s.id}</p>
                <h2 className="services-list__title">{s.title}</h2>
                <p className="services-list__desc">{s.desc}</p>
                <ul className="services-list__points">
                  {s.points.map((p) => (
                    <li key={p}>
                      <MdCheck className="services-list__check" /> {p}
                    </li>
                  ))}
                </ul>
                <a href="/contact" className="btn btn--gold">Request This Service</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="about-cta">
        <div className="container about-cta__inner">
          <div>
            <h2 className="about-cta__title">Not Sure What You Need?</h2>
            <p className="about-cta__sub">Contact us for a free consultation and site assessment.</p>
          </div>
          <a href="/contact" className="btn btn--gold">Talk to an Engineer</a>
        </div>
      </section>

    </div>
  );
}