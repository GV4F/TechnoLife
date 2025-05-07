import React, { useState } from "react";
import "../Style/SliderHome.css";
import { SliderItems }  from "../assets/Exports/SliderItems";

// * ICONS
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";

function SliderHome(): React.ReactElement {

  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = ()=> {
    if (currentIndex < SliderItems.length - 1) { 
      setCurrentIndex(currentIndex + 1);
    }
    else { setCurrentIndex(0); }
  };
  const prevSlide = ()=> {
    if (currentIndex >= 1) { 
      setCurrentIndex(currentIndex - 1);
    }
    if (currentIndex === 0) { setCurrentIndex(SliderItems.length - 1); }
  };

  return (
    <section className={`carousel overflow-hidden relative`}>
      <div className={`list relative w-full h-full`}>
        {
          SliderItems.map((item, index)=> {
            return (
              <div className={`item absolute inset-0 w-full h-full ${currentIndex == index ? "item_active" : ""}`} key={index}>
                <img src={item.img} alt={item.title} className={`opacity-50 absolute left-[50%] bottom-[50px] border-main`} />
                <div className={`item_content absolute top-[40%] left-[7%] z-10 flex flex-col justify-center items-center gap-5 select-none`}>
                  <h2 className={`item_title text-mint text-3xl font-bold`}>{item.title}</h2>
                  <p className={`text-sm font-semibold`}>{item.description}</p>
                  <button className={`bg-color-mint text-dark font-semibold p-2 rounded-[8px] cursor-pointer text-xs`}>
                    {item.buttonText}
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>

      <div className={`thumbnails absolute bottom-[50px] left-[50%] z-[100] flex gap-4`}>
        {
          SliderItems.map((item, index) => {
            return (
              <div 
                className={`thumbnail_item border-main bg-color-dark relative cursor-pointer ${currentIndex === index ? "active" : ""}`} 
                key={index}
                onClick={() => setCurrentIndex(index)}
              >
                <img src={item.img} alt={item.title} className={`w-full h-full border-main opacity-40`} />
              </div>
            )
          })
        }
      </div>

      <div className={`carousel_arrows absolute bottom-[5%] left-[50%] text-xl`}>
        <button className="carousel_arrows-btn cursor-pointer" onClick={prevSlide}><BiSolidLeftArrow /></button>
        <button className="carousel_arrows-btn cursor-pointer" onClick={nextSlide}><BiSolidRightArrow /></button>
      </div>
    </section>
  )
}

export default SliderHome;