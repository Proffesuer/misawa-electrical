import "./Contact.css";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdEmail, MdPhone, MdLocationOn, MdAccessTime, MdCheckCircle, MdError } from "react-icons/md";
import SectionHeader from "../components/SectionHeader";

// ── Replace these with your EmailJS dashboard values ──
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";

const contactInfo = [
  { icon: <MdEmail />,      title: "Email Us",      lines: ["info@misawaelectricals.co.ke"],                    link: "mailto:info@misawaelectricals.co.ke" },
  { icon: <MdPhone />,      title: "Call Us",        lines: ["+254 732 062005", "+254 724 877573"],              link: "tel:+254732062005" },
  { icon: <MdLocationOn />, title: "Find Us",        lines: ["Box 95738 – 80100", "Mombasa GPO, Kenya"] },
  { icon: <MdAccessTime />, title: "Working Hours",  lines: ["Mon – Fri: 8:00am – 6:00pm", "Sat: 9:00am – 2:00pm"] },
];

const INITIAL = { name: "", phone: "", email: "", subject: "", service: "", message: "" };

export default function Contact() {
  const formRef             = useRef();
  const [form, setForm]     = useState(INITIAL);
  const [status, setStatus] = useState(null); // null | "loading" | "success" | "error"
  const [errMsg, setErrMsg] = useState("");

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrMsg("");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm(INITIAL);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrMsg("Failed to send. Please call us directly or email info@misawaelectricals.co.ke");
    }
  };

  return (
    <div className="contact-page">

      {/* ── BANNER ── */}
      <section className="page-banner">
        <div className="page-banner__overlay" />
        <div className="page-banner__content container">
          <p className="page-banner__eyebrow">Get In Touch</p>
          <h1 className="page-banner__title">Contact Us</h1>
          <p className="page-banner__sub">Reach out for a free quote, site assessment, or any enquiry.</p>
        </div>
      </section>

      {/* ── CONTACT CARDS ── */}
      <section className="contact-cards">
        <div className="container contact-cards__grid">
          {contactInfo.map((c) => (
            <div className="contact-card" key={c.title}>
              <div className="contact-card__icon">{c.icon}</div>
              <h3 className="contact-card__title">{c.title}</h3>
              {c.lines.map((line) =>
                c.link
                  ? <a key={line} href={c.link} className="contact-card__line">{line}</a>
                  : <p key={line} className="contact-card__line">{line}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── FORM + MAP ── */}
      <section className="contact-main">
        <div className="container contact-main__inner">

          {/* Form */}
          <div className="contact-main__form-wrap">
            <SectionHeader eyebrow="Send a Message" title="Let's Work Together" centered={false} />

            {status === "success" && (
              <div className="cfull__feedback cfull__feedback--success">
                <MdCheckCircle />
                <div>
                  <strong>Message sent!</strong>
                  <p>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                </div>
              </div>
            )}

            {status === "error" && (
              <div className="cfull__feedback cfull__feedback--error">
                <MdError />
                <div>
                  <strong>Failed to send</strong>
                  <p>{errMsg}</p>
                </div>
              </div>
            )}

            {/* input name= must match your EmailJS template variables */}
            <form ref={formRef} className="contact-form-full" onSubmit={handleSubmit}>
              <div className="contact-form-full__row">
                <div className="cfull__group">
                  <label htmlFor="name">Full Name *</label>
                  <input id="name" name="name" type="text" placeholder="John Doe" value={form.name} onChange={handleChange} required />
                </div>
                <div className="cfull__group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input id="phone" name="phone" type="tel" placeholder="+254 700 000000" value={form.phone} onChange={handleChange} required />
                </div>
              </div>

              <div className="cfull__group">
                <label htmlFor="email">Email Address *</label>
                <input id="email" name="email" type="email" placeholder="john@example.com" value={form.email} onChange={handleChange} required />
              </div>

              <div className="cfull__group">
                <label htmlFor="subject">Subject</label>
                <input id="subject" name="subject" type="text" placeholder="e.g. CCTV Installation Quote" value={form.subject} onChange={handleChange} />
              </div>

              <div className="cfull__group">
                <label htmlFor="service">Service Needed</label>
                <select id="service" name="service" value={form.service} onChange={handleChange}>
                  <option value="">Select a service...</option>
                  <option>Electrical Drawings &amp; BQ</option>
                  <option>CCTV Installation</option>
                  <option>Intercoms &amp; Access Control</option>
                  <option>Electrical Works</option>
                  <option>Solar Installation</option>
                  <option>Electric Fencing</option>
                  <option>General Maintenance</option>
                  <option>Structured Cabling / Server Room</option>
                </select>
              </div>

              <div className="cfull__group">
                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" rows="5" placeholder="Describe your project or enquiry..." value={form.message} onChange={handleChange} required />
              </div>

              <button type="submit" className="btn btn--gold cfull__submit" disabled={status === "loading"}>
                {status === "loading" ? "Sending…" : "Send Message →"}
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="contact-main__map-wrap">
            <SectionHeader eyebrow="Our Location" title="Find Us in Mombasa" centered={false} />
            <div className="contact-map">
              <iframe
                title="Misawa Electrical Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126904.50554050497!2d39.60920715!3d-4.0434771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184012e75b0842e7%3A0x4b2c4b5c3ed87e7d!2sMombasa%2C%20Kenya!5e0!3m2!1sen!2ske!4v1700000000000"
                width="100%" height="360"
                style={{ border: 0, borderRadius: "12px" }}
                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="contact-map__info">
              <p><strong>Postal Address:</strong> Box 95738 – 80100, Mombasa GPO</p>
              <p><strong>Email:</strong> info@misawaelectricals.co.ke</p>
              <p><strong>Phone:</strong> +254 732 062005 / +254 724 877573</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}