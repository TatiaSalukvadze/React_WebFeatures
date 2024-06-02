import Partners from "../../components/home/partners/Partners";
import "./about.css";
function About() {
  return (
    <div className="about">
      <div className="abt">
        <p className="uperp">WE APPRECIATE YOUR TRUST GREATLY!</p>
        <h1 className="uperh">
          What makes us <span>Happy</span>
        </h1>
        <p className="abp">
          Web Features’s main goal is to offer an exceptional experience to its
          customers, a service that is different and outstanding.
        </p>
      </div>
      <Partners />
    </div>
  );
}

export default About;
