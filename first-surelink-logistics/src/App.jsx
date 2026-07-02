import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import "./App.css"; // Global styles (Header, Footer, etc.)
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import SeaFreight from "./pages/sea-freight";
import AirFreight from "./pages/air-freight";
import LandFreight from "./pages/land-freight";

import RouteAfrica from "./pages/route-africa";
import RouteAsia from "./pages/route-asia";
import RouteNorthAmerica from "./pages/route-northamerica";
import RouteSouthAmerica from "./pages/route-southamerica";
import RouteEurope from "./pages/route-europe";

import AboutUs from "./pages/about-us";
import GlobalReach from "./pages/global-reach";
import WhyChooseUs from "./pages/why-choose-us";
import ContactUs from "./pages/contact-us";
import TermsAndConditions from "./pages/terms-and-conditions";
import PrivacyPolicy from "./pages/privacy-policy";

import Tracking from "./pages/tracking";


function App() {
  return (
    <>
      

      <ScrollToTop />
      <Header />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/sea-freight" element={<SeaFreight />} />
        <Route path="/air-freight" element={<AirFreight />} />
        <Route path="/land-freight" element={<LandFreight />} />

        <Route path="/route-africa" element={<RouteAfrica />} />
        <Route path="/route-asia" element={<RouteAsia />} />
        <Route path="/route-northamerica" element={<RouteNorthAmerica />} />
        <Route path="/route-southamerica" element={<RouteSouthAmerica />} />
        <Route path="/route-europe" element={<RouteEurope />} />

        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/global-reach" element={<GlobalReach />} />
        <Route path="/why-choose-us" element={<WhyChooseUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        <Route path="/tracking" element={<Tracking />} />
        
        

        <Route path="/Home" element={<Home />} />
         </Routes>
<Footer />

      
    </>
  );
}

export default App;