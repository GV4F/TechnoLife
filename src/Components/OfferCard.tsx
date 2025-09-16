// import React from "react";
import "../Style/OfferCard.css";
import Atropos from "atropos/react";
import { AllImages as Images } from "../assets/Exports/Images";

function OfferCard() {
  return (
    <section className="relative desktop-width grid gap-3 text-dark md:grid-cols-1 lg:grid-cols-2">

      <Atropos 
        className="card" shadow={false}
        activeOffset={30}
      > 
        <img src={Images.iphone_offer} alt="Iphone" className="card_img" />
        <h3 className="text-base">Up to <span className="text-xl font-bold">30%</span> discount</h3>
        <button className="text-sm">See all offers</button>
      </Atropos>
      <Atropos 
        className="card" shadow={false}
        activeOffset={30}
      >
        <img src={Images.Offer} alt="Iphone" className="card_img" />
        <h3 className="text-base">Participate to win an <span className="text-xl font-bold">Iphone</span></h3>
        <button className="text-sm">Go to the draw</button>
      </Atropos>
      
    </section>
  )
}

export default OfferCard;