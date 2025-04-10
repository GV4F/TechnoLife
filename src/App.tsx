import "./App.css"
import Navbar from "./Pages/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom";

// * PAGES
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App