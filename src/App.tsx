import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";

import RootLayout from "./layouts/RootLayout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="projects" element={<Projects />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
