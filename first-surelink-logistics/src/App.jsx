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

        <Route path="/Home" element={<Home />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;