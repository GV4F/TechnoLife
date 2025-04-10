import React from "react";
import "../Style/SliderHome.css";
import { AllImages } from "../assets/Exports/Images";

// * ICONS
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";



function SliderHome(): React.ReactElement {
  return (
    <section className="slider_home">
      <div className="list">
        <div className="item">
          <img src={AllImages.bg_1} alt="Slider 1" />
          <div className="content"></div>
        </div>
        <div className="item">
          <img src={AllImages.bg_2} alt="Slider 2" />
          <div className="content"></div>
        </div>
        <div className="item">
          <img src={AllImages.bg_3} alt="Slider 3" />
          <div className="content"></div>
        </div>
        <div className="item">
          <img src={AllImages.bg_4} alt="Slider 4" />
          <div className="content"></div>
        </div>
      </div>

      <div className="thumbnail">
        <div className="item">
          <img src={AllImages.bg_1} alt="Slider 1" />
        </div>
        <div className="item">
          <img src={AllImages.bg_2} alt="Slider 2" />
        </div>
        <div className="item">
          <img src={AllImages.bg_3} alt="Slider 3" />
        </div>
        <div className="item">
          <img src={AllImages.bg_4} alt="Slider 4" />
        </div>
      </div>

      <div className="arrows">
        <button><BiSolidLeftArrow /></button>
        <button><BiSolidRightArrow /></button>
      </div>
    </section>
  )
}

export default SliderHome