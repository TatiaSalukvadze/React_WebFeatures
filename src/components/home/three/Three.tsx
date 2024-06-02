import { PiPenNibStraightLight } from "react-icons/pi";
import { CgWebsite } from "react-icons/cg";
import { SlLayers } from "react-icons/sl";
import "./three.css";
function Three() {
  return (
    <div className="three">
      <p className="uperp">WHO WE ARE</p>
      <h1 className="uperh">
        We are a team focused on <span>WordPress</span>
      </h1>
      <div className="thflex">
        <div className="thdiv">
          <PiPenNibStraightLight className="thicon" />
          <h3>Responsibility</h3>
          <p>
            We develop digital strategies, products and services that will
            matter.
          </p>
        </div>
        <div className="thdiv">
          <CgWebsite className="thicon" />
          <h3>Super Clean Website</h3>
          <p>
            We are extremely proud to offer our clients the cleanest products
            possible.
          </p>
        </div>
        <div className="thdiv">
          <SlLayers className="thicon" />
          <h3>Updates & Support</h3>
          <p>
            Our professional support team is always ready to assist you 24/7
            during the project.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Three;
