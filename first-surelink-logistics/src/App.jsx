import { Routes, Route } from "react-router-dom";
import "./App.css"; // Global styles (Header, Footer, etc.)
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import SeaFreight from "./pages/SeaFreight";
import Airreight from "./pages/AirFreight";
import AirFreight from "./pages/AirFreight";


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seafreight" element={<SeaFreight />} />
        <Route path="/airfreight" element={<AirFreight />} />
        <Route path="/Home" element={<Home />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;