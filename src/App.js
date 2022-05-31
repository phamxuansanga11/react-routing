import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import ContactPage from "./Components/ContactPage";
import AboutPage from "./Components/AboutPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
