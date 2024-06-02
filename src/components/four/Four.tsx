import { FaLongArrowAltRight } from "react-icons/fa";
import "./four.css";
import { useState } from "react";

function Four() {
  const [hoveredChild, setHoveredChild] = useState<number>(1);

  const handleChildHover = (childNumber: number) => {
    setHoveredChild(childNumber);
  };

  const handleChildLeave = () => {
    setHoveredChild(hoveredChild);
  };

  return (
    <div className="servs">
      <h1>
        <span>Services</span> Which we Offer
      </h1>
      <div className={`spics ser${hoveredChild}`}>
        <div
          className="ser one"
          onMouseEnter={() => handleChildHover(1)}
          onMouseLeave={handleChildLeave}
        >
          <p className="snum">01.</p>
          <div className="nr">
            <p className="sname">Web Development</p>
            <p className="readm">
              Read More <FaLongArrowAltRight className="ic" />
            </p>
          </div>
        </div>
        <div
          className="ser two"
          onMouseEnter={() => handleChildHover(2)}
          onMouseLeave={handleChildLeave}
        >
          <p className="snum">02.</p>
          <div className="nr">
            <p className="sname">SEO Optimization</p>
            <p className="readm">
              Read More <FaLongArrowAltRight className="ic" />
            </p>
          </div>
        </div>
        <div
          className="ser thre"
          onMouseEnter={() => handleChildHover(3)}
          onMouseLeave={handleChildLeave}
        >
          <p className="snum">03.</p>
          <div className="nr">
            <p className="sname">Support</p>
            <p className="readm">
              Read More <FaLongArrowAltRight className="ic" />
            </p>
          </div>
        </div>
        <div
          className="ser four"
          onMouseEnter={() => handleChildHover(4)}
          onMouseLeave={handleChildLeave}
        >
          <p className="snum">04.</p>
          <div className="nr">
            <p className="sname">Cyber Security</p>
            <p className="readm">
              Read More <FaLongArrowAltRight className="ic" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Four;
