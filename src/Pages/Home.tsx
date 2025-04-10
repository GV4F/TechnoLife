import React from "react";
import "../Style/Home.css";

// * COMPONENTS 
import SliderHome from "../Components/SliderHome";
function Home(): React.ReactElement {
  return (
    <section className="home text-white">
      <SliderHome />
    </section>
  )
}

export default Home