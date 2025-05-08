import React from "react";
import "../Style/Home.css";

// * COMPONENTS 
import SliderHome from "../Components/SliderHome";
import OfferCard from "../Components/OfferCard";

function Home(): React.ReactElement {
  return (
    <section className="home text-light flex flex-col items-center gap-[50px]">
      <SliderHome />
      <OfferCard />
      <section className="offer_banner border-main"></section>
    </section>
  )
}

export default Home