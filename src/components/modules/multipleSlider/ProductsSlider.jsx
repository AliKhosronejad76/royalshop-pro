import React from "react";
import Slider from "react-slick";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

import SlideItem from "./SlideItem";

function SampleNextArrow(props) {
   const {onClick} = props
    return (
      <div onClick={onClick} className="text-gray-600 w-[35px] h-[35px] rounded-full cursor-pointer absolute z-20 bg-white border border-gray-400 flex items-center justify-center text-3xl right-[-10px] top-[44%]">
        <MdKeyboardArrowRight/>
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const {onClick} = props;
    return (
    <div onClick={onClick} className="text-gray-600 w-[35px] h-[35px] rounded-full cursor-pointer absolute z-20 bg-white border border-gray-400 flex items-center justify-center text-3xl left-[-10px] top-[44%]">
           <MdKeyboardArrowLeft/>
      </div>
    )
  }



export default function ProductsSlider({data}){
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: "ease-in-out",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow /> ,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
             
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow:2.3,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2.2,
              slidesToScroll: 1
            }
          }
        ]
      }

      console.log(data)


    return(
        <div className="mt-8 px-4">
            <Slider {...settings} className="multipleslider gap-6">
                {
                    data.map((item , index )=> <SlideItem key={index} data={item}/>)
                }
            </Slider>
        </div>
    
    )
}

