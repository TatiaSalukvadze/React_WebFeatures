import woman from "../../../assets/woman.webp";
import xeyes from "../../../assets/xeyes.png";
import bluec from "../../../assets/bluec.png";
import redc from "../../../assets/redc.png";
import darkcs from "../../../assets/darkcs.png";
import lightcs from "../../../assets/lightcs.png";
import fullc from "../../../assets/fullc.png";
import halfc from "../../../assets/halfc.png";

import { NavLink } from "react-router-dom";
import "./header.css";
import { useState } from "react";

function Header() {
  const [p, setp] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: any) => {
    const { clientX: x, clientY: y } = event;
    const ww = window.innerWidth;
    const wh = window.innerHeight;
    let translateX = 0;
    let translateY = 0;
    if (x > ww / 2) {
      translateX = Math.round(((x - ww / 2) * 10) / (ww / 2));
    } else {
      translateX = Math.round(-(10 - (Math.max(1, x) * 10) / (ww / 2)));
      console.log(translateX);
    }
    if (y > wh / 2) {
      translateY = Math.round(((y - wh / 2) * 10) / (wh / 2));
    } else {
      translateY = Math.round(-(10 - (y * 10) / (wh / 2)));
    }

    setp({ x: translateX, y: translateY });
  };
  return (
    <div className="header" onMouseMove={handleMouseMove}>
      <div className="htexts">
        <p className="hn">
          {" "}
          {"80+".split("").map((char, index) => (
            <span
              key={index}
              style={{
                animationDelay: `${1 + index * 0.07}s`,
              }}
            >
              {char}
            </span>
          ))}
        </p>
        <p className="hp">
          {"Websites we created".split("").map((char, index) => (
            <span
              key={index}
              style={{
                animationDelay: `${1.2 + index * 0.07}s`,
              }}
            >
              {char}
            </span>
          ))}
        </p>
        <p className="hn">
          {"57+".split("").map((char, index) => (
            <span
              key={index}
              style={{
                animationDelay: `${1.4 + index * 0.07}s`,
              }}
            >
              {char}
            </span>
          ))}
        </p>
        <p className="hp">
          {"Monthly support".split("").map((char, index) => (
            <span
              key={index}
              style={{
                animationDelay: `${1.6 + index * 0.07}s`,
              }}
            >
              {char}
            </span>
          ))}
        </p>
        <button className="hb">
          <NavLink to="projects">See works</NavLink>
        </button>
      </div>

      <div className="hpics">
        <div className="withwoman">
          <img src={woman} alt="woman" className="woman" />
          <img
            src={xeyes}
            alt="eyes"
            className="xeyes"
            style={{
              transform: `translate(calc(${p.x}px - 50%), ${p.y}px)`,
            }}
          />
          <img
            src={darkcs}
            alt="circles"
            className="darkcs"
            style={{
              transform: `translate(${p.x}px, ${p.y}px)`,
            }}
          />
          <img
            src={lightcs}
            alt="circles"
            className="lightcs"
            style={{
              transform: `translate(${p.x}px, ${p.y}px)`,
            }}
          />
        </div>
        <div className="circles">
          <img
            src={bluec}
            alt="circle"
            className="bluec"
            style={{
              transform: `translate(${p.x}px, ${p.y}px)`,
            }}
          />
          <img
            src={redc}
            alt="circle"
            className="redc"
            style={{
              transform: `translate(${p.x}px, ${p.y}px)`,
            }}
          />
          <img src={fullc} alt="circle" className="fullc" />
          <img src={halfc} alt="half circle" className="halfc" />
        </div>
      </div>
    </div>
  );
}

export default Header;
