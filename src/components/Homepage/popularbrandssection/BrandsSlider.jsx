import React from "react"
import Slider from "react-slick"
import BrandItem from "./BrandItem"
import { MdKeyboardArrowRight } from "react-icons/md"
import { MdKeyboardArrowLeft } from "react-icons/md"
export default function BrandsSlider(){
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
      }

    return(
        <div className="h-max bg-[#f0f0f1] rounded-lg py-8 px-3 w-[96%] mx-auto mb-8">
            <Slider {...settings}>
                <BrandItem name="Apple" logo="img/brands/Apple-brand.webp"/>
                <BrandItem name="Canon" logo="img/brands/canon-brand.webp"/>
                <BrandItem name="Fossil" logo="img/brands/fossil-brand.webp"/>
                <BrandItem name="Ingersoll" logo="img/brands/Ingersoll-brand.webp"/>
                <BrandItem name="jamry" logo="img/brands/jamry-brand.webp"/>
                <BrandItem name="Walkiki"logo="img/brands/LC-walkiki-brand.webp"/>
                <BrandItem name="Lumix" logo="img/brands/Lumix-brand.webp"/>
                <BrandItem name="nikon" logo="img/brands/nikon-brand.webp"/>
                <BrandItem name="Samsung" logo="img/brands/samsung-brand.webp"/>
               

            </Slider>

        </div>
    )

}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className="bg-white rounded-full w-[44px] h-[44px] text-gray-600 text-4xl flex items-center justify-center absolute z-30 top-[35%] bottom-[35%] right-[-5px] border-3 border-gray-800 shadow-[0px_0px_1px_1px_rgba(0,0,0,0.5)]"
        onClick={onClick}
      >
        <MdKeyboardArrowRight/>       
    </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="bg-white rounded-full w-[40px] h-[40px] text-gray-600 text-4xl flex items-center justify-center absolute z-30 top-[35%] bottom-[35%] left-[-5px] border-3 border-gray-700 shadow-[0px_0px_1px_1px_rgba(0,0,0,0.5)]"
        onClick={onClick}
      >
        <MdKeyboardArrowLeft/>       
    </div>
    );
  }