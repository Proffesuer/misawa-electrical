import "./Media.css";
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

const photos = [
  { img: img1,  caption: "Electrical drawings and layout planning"         },
  { img: img2,  caption: "Residential wiring installation"                 },
  { img: img3,  caption: "Solar panel installation on rooftop"             },
  { img: img6,  caption: "CCTV cameras installed at commercial premises"   },
  { img: img7,  caption: "Video intercom system installation"              },
  { img: img8,  caption: "Electric perimeter fence installation"           },
  { img: img9,  caption: "Distribution board and switchgear setup"        },
  { img: img10, caption: "Solar panels powering a residential property"    },
];

export default function Media() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <div className="media-page">

      {/* ── BANNER ── */}
      <section className="page-banner">
        <div className="page-banner__overlay" />
        <div className="page-banner__content container">
          <p className="page-banner__eyebrow">Photo Gallery</p>
          <h1 className="page-banner__title">Media</h1>
          <p className="page-banner__sub">
            A visual record of our installations and completed works across Kenya.
          </p>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="media-gallery">
        <div className="container">
          <SectionHeader eyebrow="Our Gallery" title="Photo Gallery" />
          <div className="media-grid">
            {photos.map((p, i) => (
              <div className="media-card" key={i} onClick={() => setLightbox(p)}>
                <img src={p.img} alt={p.caption} />
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
          <a href="/contact" className="btn btn--gold">Contact Us</a>
        </div>
      </section>

    </div>
  );
}