import React from "react";
import Slider from "react-slick";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

import SlideItem from "./SlideItem";

function SampleNextArrow(props) {
   const {onClick} = props
    return (
      <div onClick={onClick} className="text-gray-600 w-[35px] h-[35px] rounded-full cursor-pointer absolute z-20 bg-white border border-gray-400 flex items-center justify-center text-3xl right-0 top-[44%]">
        <MdKeyboardArrowRight/>
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const {onClick} = props;
    return (
    <div onClick={onClick} className="text-gray-600 w-[35px] h-[35px] rounded-full cursor-pointer absolute z-20 bg-white border border-gray-400 flex items-center justify-center text-3xl left-0 top-[44%]">
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
      }

      console.log(data)


    return(
        <div className="mt-8 px-4">
            <Slider {...settings}>
                {
                    data.map((item , index )=> <SlideItem key={index} data={item}/>)
                }
            </Slider>
        </div>
    
    )
}

