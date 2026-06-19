import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingActions() {
  const whatsappNumber = "254724877573";
  const whatsappMessage = "Hi, I'd like a quote for electrical/CCTV/solar work.";

  return (
    <div className="floating-actions">
      <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="floating-actions__btn floating-actions__btn--whatsapp" aria-label="Chat on WhatsApp">
        <FaWhatsapp />
        <span className="floating-actions__tooltip">Chat on WhatsApp</span>
      </a>
      <Link to="/contact" className="floating-actions__btn floating-actions__btn--quote" aria-label="Get a Quote">
        <span className="floating-actions__quote-text">Get a Quote</span>
      </Link>
    </div>
  );
}
