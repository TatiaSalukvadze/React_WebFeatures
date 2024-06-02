import logo from "../../assets/whitelogo.png";
import { NavLink } from "react-router-dom";
import "./menu.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

interface MenuProps {
  setshow: React.Dispatch<React.SetStateAction<boolean>>;
}

function Menu({ setshow }: MenuProps) {
  const [close, setclose] = useState(false);
  let links = [
    ["", "Home"],
    ["about", "About"],
    ["services", "Services"],
    ["projects", "Projects"],
    ["contact", "Contact"],
  ];

  function closef() {
    setclose(true);

    //2 second delay before setting setshow to false
    setTimeout(() => {
      setshow(false);
    }, 2100);
  }
  return (
    <div className="menudiv">
      <div className="div1">
        <img src={logo} className={`menulogo ${close ? "closed" : ""}`} />
        {links.map((el, ind) => (
          <NavLink
            to={el[0]}
            className="menul"
            onClick={() => closef()}
            key={ind + el[0]}
          >
            {el[1].split("").map((char, index) => (
              <span
                key={index}
                className={`fade-in-char ${close ? "closed" : ""}`}
                style={{
                  animationDelay: `${
                    close
                      ? 0.1 + (4 - index) * 0.1 + 0.2 * (4 - ind)
                      : index * 0.1 + 0.9 + 0.1 * ind
                  }s`,
                }}
              >
                {char}
              </span>
            ))}
          </NavLink>
        ))}

        <div className={`div1b ${close ? "closed" : ""}`}>
          <FaFacebookF
            className={`icon ${close ? "closed" : ""}`}
            style={{ animationDelay: close ? "0.9s" : "1.2s" }}
          />
          <FaInstagram
            className={`icon ${close ? "closed" : ""}`}
            style={{ animationDelay: close ? "0.6s" : "1.5s" }}
          />
          <FaLinkedinIn
            className={`icon ${close ? "closed" : ""}`}
            style={{ animationDelay: close ? "0.3s" : "1.8s" }}
          />
        </div>
      </div>
      <div className="div2">
        <div
          className={`div2d div2in ${close ? "closed" : ""}`}
          style={{ animationDelay: close ? "0.9s" : "1.2s" }}
        >
          <div>
            <p className="q">Have a Project?</p>
            <p className="ans an1">info@website.com</p>
          </div>
          <div
            className={`div2d ${close ? "closed" : ""}`}
            style={{ animationDelay: close ? "0.6s" : "1.5s" }}
          >
            <p className="q">Want to Work With Me?</p>
            <p className="ans">
              Send Brief <FaLongArrowAltRight className="ar" />
            </p>
          </div>
          <div
            className={`div2d ${close ? "closed" : ""}`}
            style={{ animationDelay: close ? "0.3s" : "1.8s" }}
          >
            <p className="q">Want to Buy Illustrations?</p>
            <p className="ans">
              Go to Shop <FaLongArrowAltRight className="ar" />
            </p>
          </div>
        </div>
      </div>
      <div
        className={`close ${close ? "closed" : ""}`}
        onClick={() => closef()}
      >
        <p>close</p>
        <IoClose className={`icon ${close ? "closed" : ""}`} />
      </div>
    </div>
  );
}

export default Menu;
