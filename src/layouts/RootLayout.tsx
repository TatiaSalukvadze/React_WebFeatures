import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";

function RootLayout() {
  // const [p, setp] = useState({ x: 0, y: 0 });
  // const handleMouseMove = (event: any) => {
  //   const { clientX: x, clientY: y } = event;
  //   setp({ x, y });
  // };

  // useEffect(() => {
  //   document.addEventListener("mousemove", handleMouseMove);
  //   return () => {
  //     document.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
      {/* <div
        className="mouse-tracker"
        style={{ left: p.x - 4, top: p.y - 4 }}
      ></div> */}
    </div>
  );
}

export default RootLayout;
