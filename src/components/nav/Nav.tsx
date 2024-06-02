import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { CgMenuGridO } from "react-icons/cg";
import Menu from "../menu/Menu";

import "./nav.css";
import { useState } from "react";
function Nav() {
  const [show, setshow] = useState<boolean>(false);
  return (
    <div className="gen nav">
      <NavLink to="">
        <img src={logo} alt="logo" className="logo" />
      </NavLink>
      <div className="justls">
        <NavLink to="about" className="navl">
          About
        </NavLink>
        <NavLink to="services" className="navl">
          Services
        </NavLink>
        <NavLink to="projects" className="navl">
          Projects
        </NavLink>
        <NavLink to="contact" className="navl">
          Contact
        </NavLink>
      </div>
      <CgMenuGridO className="menu" onClick={() => setshow(true)} />
      {show && <Menu setshow={setshow} />}
    </div>
  );
}

export default Nav;
