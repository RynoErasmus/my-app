import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Landing from "./pages/landing/landing";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Qualifications from "./pages/qualifications/qualifications";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#121212",
            color: "#ffffff",
            border: "2px solid #8a0000",
            boxShadow: "0px 0px 15px rgba(255,0,0,0.5)",
            borderRadius: "16px",
            fontWeight: "bold",
          },
        }}
      />
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
