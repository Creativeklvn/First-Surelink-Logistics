import { Routes, Route } from "react-router-dom";
import "./App.css"; // Global styles (Header, Footer, etc.)
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import SeaFreight from "./pages/SeaFreight";
import AirFreight from "./pages/AirFreight";
import LandFreight from "./pages/LandFreight";

import RouteAfrica from "./pages/route-africa";
import RouteAsia from "./pages/route-asia";
import RouteNorthAmerica from "./pages/route-northAmerica";
import RouteSouthAmerica from "./pages/route-southAmerica";
import RouteEurope from "./pages/route-europe";

import AboutUs from "./pages/about-us";
import GlobalReach from "./pages/global-reach";
import WhyChooseUs from "./pages/why-choose-us";


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seafreight" element={<SeaFreight />} />
        <Route path="/airfreight" element={<AirFreight />} />
        <Route path="/landfreight" element={<LandFreight />} />

        <Route path="/route-africa" element={<RouteAfrica />} />
        <Route path="/route-asia" element={<RouteAsia />} />
        <Route path="/route-northamerica" element={<RouteNorthAmerica />} />
        <Route path="/route-southamerica" element={<RouteSouthAmerica />} />
        <Route path="/route-europe" element={<RouteEurope />} />

        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/global-reach" element={<GlobalReach />} />
        <Route path="/why-choose-us" element={<WhyChooseUs />} />
        
        

        <Route path="/Home" element={<Home />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;