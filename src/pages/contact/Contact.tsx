import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="cont con1">
        <h4>Contact Details</h4>
        <p>Georgia / Tbilisi</p>
        <p className="email">info@webfeatures.co</p>
        <h4>+995 598 55 44 20</h4>
      </div>

      <div className="intouch con2">
        <h4>Follow Us</h4>
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
  );
}

export default Contact;
