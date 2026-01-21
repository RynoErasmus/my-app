import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Landing from "./pages/landing/landing";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Qualifications from "./pages/qualifications/qualifications";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/qualifications" element={<Qualifications />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
