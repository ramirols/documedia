{/*import { Link, Events } from "react-scroll";
import { useEffect, useState } from "react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const handleSetActive = (to) => setActiveSection(to);

  return (
    <nav className="navigation">
      <Link
        to="section1"
        smooth={true}
        duration={500}
        className={activeSection === "section1" ? "active" : ""}
        onSetActive={handleSetActive}
      >
        Sección 1
      </Link>
      <Link
        to="section2"
        smooth={true}
        duration={500}
        className={activeSection === "section2" ? "active" : ""}
        onSetActive={handleSetActive}
      >
        Sección 2
      </Link>
      <Link
        to="section3"
        smooth={true}
        duration={500}
        className={activeSection === "section3" ? "active" : ""}
        onSetActive={handleSetActive}
      >
        Sección 3
      </Link>
    </nav>
  );
};

export default Navigation;*/}