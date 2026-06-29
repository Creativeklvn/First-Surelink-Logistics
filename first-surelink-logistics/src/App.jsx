import { Routes, Route } from "react-router-dom";
import "./App.css"; // Global styles (Header, Footer, etc.)
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import SeaFreight from "./pages/SeaFreight";


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sea-freight" element={<SeaFreight />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;