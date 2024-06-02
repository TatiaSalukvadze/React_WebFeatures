import "./footer.css";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="up">
        <div className="mc">
          <div className="men">
            <h4>Menu</h4>
            <NavLink to="about" className="ab">
              About
            </NavLink>
            <NavLink to="services" className="serv">
              Services
            </NavLink>
            <NavLink to="projects" className="prj">
              Projects
            </NavLink>
            <NavLink to="contact" className="contp">
              Contact
            </NavLink>
          </div>
          <div className="cont">
            <h4>Contact</h4>
            <p>Georgia / Tbilisi</p>
            <p className="email">info@webfeatures.co</p>
            <h4>+995 598 55 44 20</h4>
          </div>
        </div>
        <div className="intouch">
          <h4>Get In Touch</h4>
          <div className="ics">
            <div>
              <FaFacebookF className="ic" />
            </div>
            <div>
              <FaInstagram className="ic" />
            </div>
            <div>
              <FaLinkedinIn className="ic" />
            </div>
          </div>
        </div>
      </div>
      <div className="bot">
        <p>Developed By Web Features © 2023. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
