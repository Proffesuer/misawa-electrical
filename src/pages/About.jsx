import "./About.css";
import { MdVerified, MdGroups, MdEmojiEvents, MdHandshake } from "react-icons/md";
import SectionHeader from "../components/SectionHeader";
import img1 from "../assets/images/image1.jpeg";
import img2 from "../assets/images/image2.jpeg";
import img9 from "../assets/images/image9.jpeg";

const values = [
  { icon: <MdVerified />, title: "Integrity",      desc: "We operate with full transparency — no hidden costs, no shortcuts, no compromises on safety." },
  { icon: <MdGroups />,   title: "Teamwork",       desc: "Our engineers collaborate closely with clients to deliver solutions that truly fit their needs." },
  { icon: <MdEmojiEvents />, title: "Excellence",  desc: "From drawings to final installation, we hold ourselves to the highest industry standards." },
  { icon: <MdHandshake />,   title: "Reliability", desc: "We show up, we deliver, and we stand behind every project we complete." },
];

const team = [
  { name: "The Director",        role: "Founder & Director",          img: img1 },
  { name: "Lead Engineer",       role: "Senior Electrical Engineer",  img: img2 },
  { name: "Projects Manager",    role: "Projects & Operations",       img: img9 },
];

const milestones = [
  { year: "2014", event: "Company founded in Mombasa, Kenya" },
  { year: "2016", event: "First major commercial electrical contract secured" },
  { year: "2018", event: "Expanded into solar installations and CCTV systems" },
  { year: "2020", event: "Reached 200+ completed projects milestone" },
  { year: "2022", event: "Launched electrical fence division" },
  { year: "2024", event: "500+ projects completed across Kenya" },
];

export default function About() {
  return (
    <div className="about-page">

      {/* ── HERO BANNER ── */}
      <section className="page-banner">
        <div className="page-banner__overlay" />
        <div className="page-banner__content container">
          <p className="page-banner__eyebrow">Who We Are</p>
          <h1 className="page-banner__title">About Misawa Electrical</h1>
          <p className="page-banner__sub">
            A decade of powering homes, businesses, and communities across Kenya.
          </p>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="about-story">
        <div className="container about-story__inner">
          <div className="about-story__text">
            <SectionHeader eyebrow="Our Story" title="From Mombasa to All of Kenya" centered={false} />
            <p>
              Misawa Electrical Solutions Company Limited was founded with one clear mission —
              to provide safe, reliable, and affordable electrical solutions to homes and
              businesses across Kenya. Starting from the coastal city of Mombasa, we have
              grown into one of the region's most trusted electrical contracting companies.
            </p>
            <p>
              Over the past decade, we have successfully completed more than 500 projects
              spanning residential wiring, commercial CCTV installations, solar energy systems,
              electrical fencing, and more. Our team of certified engineers brings precision,
              professionalism, and passion to every job — big or small.
            </p>
            <p>
              We believe every client deserves honest advice, quality workmanship, and a
              system that works reliably for years to come. That is the Misawa promise.
            </p>
            <div className="about-story__stats">
              <div className="about-story__stat">
                <span className="about-story__stat-num">500+</span>
                <span className="about-story__stat-label">Projects Done</span>
              </div>
              <div className="about-story__stat">
                <span className="about-story__stat-num">10+</span>
                <span className="about-story__stat-label">Years Active</span>
              </div>
              <div className="about-story__stat">
                <span className="about-story__stat-num">200+</span>
                <span className="about-story__stat-label">Happy Clients</span>
              </div>
            </div>
          </div>
          <div className="about-story__img-wrap">
            <img src={img2} alt="Misawa Electrical team at work" />
            <div className="about-story__img-badge">
              <span className="about-story__img-badge-num">10+</span>
              <span>Years of<br />Excellence</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="about-values">
        <div className="container">
          <SectionHeader eyebrow="What Drives Us" title="Our Core Values" light />
          <div className="about-values__grid">
            {values.map((v) => (
              <div className="about-values__card" key={v.title}>
                <div className="about-values__icon">{v.icon}</div>
                <h3 className="about-values__title">{v.title}</h3>
                <p className="about-values__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="about-timeline">
        <div className="container">
          <SectionHeader eyebrow="Our Journey" title="Key Milestones" />
          <div className="timeline">
            {milestones.map((m, i) => (
              <div className={`timeline__item${i % 2 === 0 ? "" : " timeline__item--right"}`} key={m.year}>
                <div className="timeline__content">
                  <span className="timeline__year">{m.year}</span>
                  <p className="timeline__event">{m.event}</p>
                </div>
                <div className="timeline__dot" />
              </div>
            ))}
            <div className="timeline__line" />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="about-cta">
        <div className="container about-cta__inner">
          <div>
            <h2 className="about-cta__title">Ready to Work With Us?</h2>
            <p className="about-cta__sub">Get a free site assessment and quote from our team today.</p>
          </div>
          <a href="/contact" className="btn btn--gold">Get a Free Quote</a>
        </div>
      </section>

    </div>
  );
}