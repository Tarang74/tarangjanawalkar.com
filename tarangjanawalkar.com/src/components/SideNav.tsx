import { useEffect, useState } from "react";
import "./SideNav.css";

const sections = [
  { id: "hero", label: "Hero", icon: "⌂" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "awards", label: "Awards" },
  { id: "contact", label: "Contact" },
];

export function SideNav() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    // Show nav between hero and contact
    const hero = document.getElementById("hero");
    const contact = document.getElementById("contact");

    const heroObs = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.15 },
    );
    if (hero) heroObs.observe(hero);

    const contactObs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(false);
        } else {
          // When leaving contact, restore nav visibility based on hero position
          const hero = document.getElementById("hero");
          if (hero) {
            const heroRect = hero.getBoundingClientRect();
            setVisible(heroRect.bottom < 0);
          }
        }
      },
      { threshold: 0.1 },
    );
    if (contact) contactObs.observe(contact);

    // Track active section via scroll position
    function updateActive() {
      const scrollMid = window.scrollY + window.innerHeight * 0.45;
      let current = "";
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollMid) current = id;
      }
      setActive(current);
    }

    window.addEventListener("scroll", updateActive, { passive: true });
    updateActive();

    return () => {
      heroObs.disconnect();
      contactObs.disconnect();
      window.removeEventListener("scroll", updateActive);
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`side-nav${visible ? " side-nav--visible" : ""}`}
      aria-label="Page sections"
    >
      {sections.map((section, i) => (
        <div key={section.id} className="side-nav-group">
          {i > 0 && <span className="side-nav-connector" aria-hidden="true" />}
          <button
            className={`side-nav-item${active === section.id ? " side-nav-item--active" : ""}`}
            onClick={() => scrollTo(section.id)}
            aria-label={section.label}
          >
            <span className="side-nav-label">{section.label}</span>
            {"icon" in section ? (
              <span className="side-nav-icon" aria-hidden="true">
                {section.icon}
              </span>
            ) : (
              <span className="side-nav-dot" />
            )}
          </button>
        </div>
      ))}
    </nav>
  );
}
