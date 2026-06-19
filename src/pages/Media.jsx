import "./Media.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";

import img1   from "../assets/images/image1.jpeg";
import img2   from "../assets/images/image2.jpeg";
import img3   from "../assets/images/image3.jpeg";
import img4   from "../assets/images/image4.jpeg";
import img6   from "../assets/images/image6.jpeg";
import img7   from "../assets/images/image7.jpeg";
import img8   from "../assets/images/image8.jpeg";
import img9   from "../assets/images/image9.jpeg";
import img10  from "../assets/images/image10.jpeg";
import img5   from "../assets/images/imgae5.jpeg";
import cctv   from "../assets/images/cctv.jpeg";
import cctv1  from "../assets/images/cctv-1.jpeg";
import cctv2  from "../assets/images/cctv-2.jpeg";
import cctv3  from "../assets/images/cctv3.jpeg";
import cctv4  from "../assets/images/cctv4.jpeg";
import ctrl   from "../assets/images/control-room-cctv.jpeg";
import srv    from "../assets/images/server-room.jpeg";
import srvs   from "../assets/images/server-setup.jpeg";
import setup  from "../assets/images/setup.jpeg";
import setup2 from "../assets/images/setup2.jpeg";
import design from "../assets/images/electrical-drawing.png";

const photos = [
  { img: img1,   caption: "Electrical drawings and layout planning",         category: "Drawings" },
  { img: design, caption: "AutoCAD electrical drawing in progress",          category: "Drawings" },
  { img: img2,   caption: "Residential wiring installation",                 category: "Electrical" },
  { img: img6,   caption: "Distribution board room",                        category: "Electrical" },
  { img: img9,   caption: "Panel rows and switchgear setup",                category: "Electrical" },
  { img: img5,   caption: "Distribution board close-up",                    category: "Electrical" },
  { img: setup,  caption: "MCB maintenance board",                          category: "Electrical" },
  { img: img3,   caption: "Solar panel installation on rooftop",            category: "Solar" },
  { img: img10,  caption: "Solar panels powering a residential property",   category: "Solar" },
  { img: cctv,   caption: "Outdoor CCTV camera installation",               category: "CCTV" },
  { img: cctv1,  caption: "CCTV outdoor mount",                            category: "CCTV" },
  { img: cctv2,  caption: "CCTV pole-mounted camera",                      category: "CCTV" },
  { img: cctv3,  caption: "Ceiling-mounted dome camera",                   category: "CCTV" },
  { img: cctv4,  caption: "Ceiling tile camera installation",              category: "CCTV" },
  { img: ctrl,   caption: "CCTV control room setup",                       category: "CCTV" },
  { img: img7,   caption: "Video intercom system installation",            category: "Access Control" },
  { img: img8,   caption: "Interior ceiling fittings",                     category: "Electrical" },
  { img: img4,   caption: "Electric perimeter fence installation",         category: "Fencing" },
  { img: setup2, caption: "Outdoor site installation",                     category: "Electrical" },
  { img: srv,    caption: "Server room cabling and rack setup",            category: "Networking" },
  { img: srvs,   caption: "Server rack and intercom infrastructure",       category: "Networking" },
];

export default function Media() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <div className="media-page">

      {/* ── BANNER ── */}
      <section className="page-banner">
        <img src={img4} alt="Misawa Electrical project work" className="page-banner__bg" />
        <div className="page-banner__overlay" />
        <div className="page-banner__content container">
          <p className="page-banner__eyebrow">Photo Gallery</p>
          <h1 className="page-banner__title">
            Our Work,<br />
            <span className="page-banner__title--gold">In Pictures</span>
          </h1>
          <p className="page-banner__sub">
            A visual record of electrical, CCTV, solar, and security installations
            completed across Kenya by our certified engineers.
          </p>
          <div className="page-banner__stats">
            <div className="page-banner__stat">
              <strong>{photos.length}+</strong>
              <span>Photos</span>
            </div>
            <div className="page-banner__stat">
              <strong>500+</strong>
              <span>Projects</span>
            </div>
            <div className="page-banner__stat">
              <strong>10+</strong>
              <span>Years</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="media-gallery">
        <div className="container">
          <SectionHeader eyebrow="Our Gallery" title="Photo Gallery" />
          <div className="media-grid">
            {photos.map((p, i) => (
              <div className="media-card" key={i} onClick={() => setLightbox(p)}>
                <img src={p.img} alt={p.caption} loading="lazy" />
                <span className="media-card__tag">{p.category}</span>
                <div className="media-card__overlay">
                  <span>🔍</span>
                  <p>{p.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div className="lightbox__inner" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox__close" onClick={() => setLightbox(null)}>✕</button>
            <img src={lightbox.img} alt={lightbox.caption} />
            <p className="lightbox__caption">{lightbox.caption}</p>
          </div>
        </div>
      )}

      {/* ── CTA ── */}
      <section className="about-cta">
        <div className="container about-cta__inner">
          <div>
            <h2 className="about-cta__title">Want to See More?</h2>
            <p className="about-cta__sub">Contact us to discuss your project requirements.</p>
          </div>
          <Link to="/contact" className="btn btn--gold">Contact Us</Link>
        </div>
      </section>

    </div>
  );
}