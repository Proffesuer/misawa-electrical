import "./Projects.css";
import { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import img1 from "../assets/images/image1.jpeg";
import img2 from "../assets/images/image2.jpeg";
import img3 from "../assets/images/image3.jpeg";
import img6 from "../assets/images/image6.jpeg";
import img7 from "../assets/images/image7.jpeg";
import img8 from "../assets/images/image8.jpeg";
import img9 from "../assets/images/image9.jpeg";
import img10 from "../assets/images/image10.jpeg";

const categories = ["All", "Electrical", "CCTV", "Solar", "Fencing", "Maintenance"];

const projects = [
  { title: "Residential Wiring — Mombasa",       category: "Electrical",   img: img2,  desc: "Full electrical wiring for a 4-bedroom residential home in Mombasa."         },
  { title: "CCTV System — Commercial Office",     category: "CCTV",        img: img6,  desc: "16-camera IP CCTV installation for a commercial office block in Mombasa."    },
  { title: "Solar Installation — Kilifi",         category: "Solar",        img: img3,  desc: "3kW solar off-grid system for a rural home in Kilifi County."                },
  { title: "Electrical Drawings — Apartment Block",category: "Electrical",  img: img1,  desc: "Electrical layout drawings and BQ for a 12-unit apartment block."           },
  { title: "Electric Fence — Residential Estate", category: "Fencing",     img: img8,  desc: "Perimeter electric fence for a gated residential estate in Mombasa."        },
  { title: "Intercom System — Apartment",         category: "CCTV",        img: img7,  desc: "Video intercom system installed across a 20-unit apartment complex."         },
  { title: "Preventive Maintenance — Hotel",      category: "Maintenance",  img: img9,  desc: "Annual electrical maintenance contract for a hotel along the Mombasa coast." },
  { title: "Solar Panels — School",               category: "Solar",        img: img10, desc: "Grid-tie solar system supplying clean energy to a primary school."           },
];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? projects
    : projects.filter((p) => p.category === active);

  return (
    <div className="projects-page">

      {/* ── BANNER ── */}
      <section className="page-banner">
        <div className="page-banner__overlay" />
        <div className="page-banner__content container">
          <p className="page-banner__eyebrow">Our Portfolio</p>
          <h1 className="page-banner__title">Completed Projects</h1>
          <p className="page-banner__sub">
            A showcase of electrical work delivered across Kenya.
          </p>
        </div>
      </section>

      {/* ── FILTER + GRID ── */}
      <section className="projects-section">
        <div className="container">
          <SectionHeader eyebrow="Our Work" title="Project Portfolio" />

          {/* Filter tabs */}
          <div className="projects-filter">
            {categories.map((c) => (
              <button
                key={c}
                className={`projects-filter__btn${active === c ? " projects-filter__btn--active" : ""}`}
                onClick={() => setActive(c)}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="projects-grid">
            {filtered.map((p, i) => (
              <div className="project-card" key={i}>
                <div className="project-card__img-wrap">
                  <img src={p.img} alt={p.title} />
                  <div className="project-card__overlay">
                    <span className="project-card__category">{p.category}</span>
                  </div>
                </div>
                <div className="project-card__body">
                  <h3 className="project-card__title">{p.title}</h3>
                  <p className="project-card__desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="about-cta">
        <div className="container about-cta__inner">
          <div>
            <h2 className="about-cta__title">Have a Project in Mind?</h2>
            <p className="about-cta__sub">Let our team bring your electrical project to life.</p>
          </div>
          <a href="/contact" className="btn btn--gold">Start Your Project</a>
        </div>
      </section>

    </div>
  );
}