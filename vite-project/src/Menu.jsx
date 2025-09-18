
import { useState } from "react";
import Style from "./Menu.module.css";
import Profile from './assets/image.png';

function Menu({ scrollToSection, refs }) {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  const handleScroll = (ref) => {
    scrollToSection(ref);
    setSidebar(false); 
  };

  return (
    <header className={Style.header}>
      <nav>
        <div className={Style.hamburger} onClick={toggleSidebar}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img
            src={Profile}
            alt="Usama"
            className={Style.profileImg}
            style={{ height: "60px", width: "60px", borderRadius: "50%" }}
          />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: "1.2" }}>
            <span style={{ fontSize: "1.3rem", color: "white" }}>Usama</span>
            <span style={{ fontSize: "1rem", color: "white" }}>Web Developer</span>
          </div>
        </div>

        <ul>
          <li><button onClick={() => handleScroll(refs.homeRef)}>About</button></li>
          <li><button onClick={() => handleScroll(refs.skillsRef)}>Skills</button></li>
          <li><button onClick={() => handleScroll(refs.resumeRef)}>Education</button></li>
          <li><button onClick={() => handleScroll(refs.projectsRef)}>Projects</button></li>
          <li><button onClick={() => handleScroll(refs.contactRef)}>Contact Us</button></li>
        </ul>

        <div className={`${Style.sidebar} ${sidebar ? Style.active : ""}`}>
          <img
            src={Profile}
            alt="Usama"
            className={Style.profileImg}
            style={{ height: "120px", width: "120px", borderRadius: "50%" }}
          />
          <li><button onClick={() => handleScroll(refs.homeRef)}>Profile</button></li>
          <li><button onClick={() => handleScroll(refs.skillsRef)}>Skills</button></li>
          <li><button onClick={() => handleScroll(refs.resumeRef)}>Education</button></li>
          <li><button onClick={() => handleScroll(refs.projectsRef)}>Projects</button></li>
          <li><button onClick={() => handleScroll(refs.contactRef)}>Contact Us</button></li>
        </div>
      </nav>
    </header>
  );
}

export default Menu;
