import Header from "../../components/home/header/Header";
import Three from "../../components/home/three/Three";
import Four from "../../components/four/Four";
import Slideshow from "../../components/home/slideshow/slideshow";
import Partners from "../../components/home/partners/Partners";

function Home() {
  return (
    <div className="home">
      <Header />
      <br />
      <Three />
      <Four />
      <Slideshow />
      <Partners />
    </div>
  );
}

export default Home;
