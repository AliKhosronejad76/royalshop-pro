import React from "react";
import Slider from "react-slick";
import ArticleItem from "./ArticleItem";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
       className="w-[35px] h-[35px] rounded-full text-white text-3xl flex items-center justify-center bg-[#000] opacity-45 absolute right-[-25px] top-[45%] cursor-pointer"
       onClick={onClick}
      >
        <MdKeyboardArrowRight/>
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
         className="w-[35px] h-[35px] rounded-full text-white text-3xl flex items-center justify-center bg-[#000] opacity-45 absolute z-20 left-[-25px] top-[45%] cursor-pointer"
         onClick={onClick}
        >
            <MdKeyboardArrowLeft/>
        </div>
    );
  }




export default function ArticleSlider(){
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "ease",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
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
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]

      }
    return(
        <div>
            <Slider {...settings}>
               <ArticleItem text="راز تازه نگه داشتن میوه و سبزیجات"  img="/img/articleslider/blog-1-400x272.webp" />
               <ArticleItem text="دراستایل های مختلف زیر کت چه ببوشیم؟" img="/img/articleslider/blog-2-400x272.webp" />
               <ArticleItem text="13 نوع ارچه ای که هیچگاه از مد نمی افتند" img="/img/articleslider/blog-4-400x272.webp" />
               <ArticleItem text="بهترین ایده ها برای استایل زمستانی " img="/img/articleslider/blog-7-400x272.webp" />
               <ArticleItem text="راهنمای خرید لوازم آرایشی بهداشتی " img="/img/articleslider/blog-9-400x272.webp" />
               <ArticleItem text="عنوان مقاله تستی می باشد" img="/img/articleslider/blog-1-400x272.webp" />
               <ArticleItem text="عنوان مقاله تستی می باشد" img="/img/articleslider/blog-2-400x272.webp" />
               <ArticleItem text="عنوان مقاله تستی می باشد" img="/img/articleslider/blog-4-400x272.webp" />
              
            </Slider>
        </div>
    )
}