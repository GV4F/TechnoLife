import React, { lazy, Suspense } from "react"
import "./App.css"
import Navbar from "./Pages/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom";

// * PAGES
const Home = lazy(() => import("./Pages/Home"));
const Contact = lazy(() => import("./Pages/Contact"));
import Footer from "./Pages/Footer";

function App(): React.ReactElement {

  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<div>Cargando página...</div>}></Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;