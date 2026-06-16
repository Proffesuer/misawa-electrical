export default function SectionHeader({ eyebrow, title, light = false, centered = true }) {
  return (
    <div className={`section-header${centered ? " section-header--centered" : ""}${light ? " section-header--light" : ""}`}>
      {eyebrow && <p className="section-header__eyebrow">{eyebrow}</p>}
      <h2 className="section-header__title">{title}</h2>
      <div className="section-header__bolt-line">
        <span className="section-header__line" />
        <span className="section-header__bolt-icon">⚡</span>
        <span className="section-header__line" />
      </div>
    </div>
  );
}