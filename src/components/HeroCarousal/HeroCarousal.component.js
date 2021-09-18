import React from "react";
import HeroSlider from "react-slick"; //lSider ,HeroSlider endu pottan

//here we are export two things. so we ant to destructure it
import { NextArrow,PrevArrow } from "./Arrows.component";



// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//lets create a component
const HeroCarousel = ()=>{

    const SettingsLg = {
        arrows:true,
        autoplay:true,
        centerMode:true,
        slidesToShow:1,
        slidesToScroll:1,
        centerPadding:"300px",
        infinite:true,
        nextArrow:<NextArrow />,
        prevArrow:<PrevArrow />


    }
    //paste it
    const settings = { //vat to const: We have not change it dynamically throughout our program
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:<NextArrow />,
        prevArrow:<PrevArrow />
      };

      const images = [
          "https://images.unsplash.com/photo-1631630259742-c0f0b17c6c10?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
          "https://images.unsplash.com/photo-1631613062045-fc7626a6f7e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
          "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=828&q=80",
          "https://images.unsplash.com/photo-1628191078830-c83475b88183?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
          "https://images.unsplash.com/photo-1631593455795-0bd6c1395251?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
      ]

      return (
          <>
          <div className="lg:hidden">
          <HeroSlider {...settings}>
              {
                  images.map((image)=>(
                      <div className="w-full h-64 md:h-80 py-3">
                          <img src={image} alt="Testing" className="w-full h-full rounded-md"></img>
                      </div>
                  ))
              }
          </HeroSlider>
          </div>

          <div className="hidden lg:block">
          <HeroSlider {...SettingsLg}>
              {
                  images.map((image)=>(
                      <div className="w-full h-96 px-2 py-3">
                          <img src={image} alt="Testing" className="w-full h-full rounded-md"></img>
                      </div>
                  ))
              }
          </HeroSlider>
          </div>
          </>
      )
}

export default HeroCarousel;