import par1 from "../../../assets/par1.png";
import par2 from "../../../assets/par2.png";
import par3 from "../../../assets/par3.png";
import par4 from "../../../assets/par4.png";
import par5 from "../../../assets/par5.png";
import par6 from "../../../assets/par6.png";
import par7 from "../../../assets/par7.png";
import par8 from "../../../assets/par8.png";
import par9 from "../../../assets/par9.png";
import par10 from "../../../assets/par10.png";
import par11 from "../../../assets/par11.png";
import par12 from "../../../assets/par12.png";
import "./partners.css";

function Partners() {
  return (
    <div className="partners">
      <p className="uperp">SOME OF OUR</p>
      <h1 className="uperh">Partners</h1>
      <div className="parlist">
        <img src={par1} alt="" className="par" id="par1" />
        <img src={par2} alt="" className="par" id="par2" />
        <img src={par3} alt="" className="par" id="par3" />
        <img src={par4} alt="" className="par" id="par4" />
        <img src={par5} alt="" className="par" id="par5" />
        <img src={par6} alt="" className="par" id="par6" />
        <img src={par7} alt="" className="par" id="par7" />
        <img src={par8} alt="" className="par" id="par8" />
        <img src={par9} alt="" className="par" id="par9" />
        <img src={par10} alt="" className="par" id="par10" />
        <img src={par11} alt="" className="par" id="par11" />
        <img src={par12} alt="" className="par" id="par12" />
      </div>
    </div>
  );
}

export default Partners;
