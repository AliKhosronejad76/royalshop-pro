import React , { useState } from "react"
import Slider from "react-slick"
import BannerSlide from "./BannerSlide"
import { MdKeyboardArrowRight } from "react-icons/md"
import { MdKeyboardArrowLeft } from "react-icons/md"


  
 

export default function Banner(){
    const [arrow , setArrow ] = useState(false)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1 ,
        nextArrow: <SampleNextArrow arrow={arrow}/>,
         prevArrow: <SamplePrevArrow arrow={arrow}/>,
    }
    return(
      <div className="hidden opacity-0 md:opacity-100 md:block" onMouseEnter={()=>setArrow(true)} onMouseLeave={()=>setArrow(false)}>
            <Slider {...settings} className="">
               <BannerSlide img="/img/home-slide-18.webp"/>
               <BannerSlide img="/img/home-slide-15.webp" />
           </Slider>
      </div>
      

    )
}

function SampleNextArrow(props) {
  const {  onClick , arrow} = props;
  return (
    <div
      className={`${arrow  ? "opacit-1" : "opacity-0"}  flex bg-white w-[37px] h-[37px]  items-center justify-center rounded-full absolute bottom-[30px] right-[22px] z-20 text-3xl text-gray-700 transition-opacity duration-300 ease-in`}    
      onClick={onClick}
    >
      <MdKeyboardArrowRight/>
  </div>
  );
}

function SamplePrevArrow(props) {
  const {   onClick  , arrow } = props;
  return (
      <div
      className={`${arrow ?"opacity-1":"opacity-0"} flex bg-white w-[37px] h-[37px] rounded-full flex items-center justify-center absolute bottom-[30px] right-[74px] z-20 text-3xl text-gray-700 transition-opacity duration-300 ease-in`}    
      onClick={onClick}
    >
      <MdKeyboardArrowLeft/>
  </div>
  );
}
