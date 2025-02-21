import { watchsSliderData } from "../../sliderData";
import Slider from "react-slick";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import AddToCardButton from "../modules/addtoCardButton/AddToCardButton";
import { e2p } from "../../e2p";


export default function RelatedProductSlider(){
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
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2.5,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    }



    return(
        <div className="bg-white px-4 py-6 ">
            <div className="bg-transparent border border-gray-200 rounded-md">
                <div className="pt-3 pb-2">
                    <h3 className="text-xl px-2 pb-2">محصولات مرتبط</h3>
                    <div className="h-[2px] bg-red-300 w-[120px]"></div>
                </div>

                {/* slider */}
                <Slider {...settings}>
                    {watchsSliderData.map((item , index)=><SlideItem key={index} data={item}/>)}
                </Slider>

                {/* slider */}

            </div>
        
        </div>
    );
} 



function SampleNextArrow(props) {
    const {onClick} = props
     return (
       <div onClick={onClick} className="text-white w-[35px] h-[55px]  cursor-pointer absolute z-20  bg-[rgba(0,0,0,0.5)] flex items-center justify-center text-3xl right-0 top-[44%]">
         <MdKeyboardArrowRight/>
       </div>
     );
}


function SamplePrevArrow(props) {
    const {onClick} = props;
    return (
    <div onClick={onClick} className="text-white w-[35px] h-[55px]  cursor-pointer absolute z-20 bg-[rgba(0,0,0,0.5)]  flex items-center justify-center text-3xl left-0 top-[44%]">
           <MdKeyboardArrowLeft/>
      </div>
    )
}


function SlideItem({data}){
    return(
        <div className="bg-white mx-3  rounded-2xl pb-12">
            <img src={data.img} alt="" className="rounded-2xl "/>
            <p className="mt-3 text-center text-sm text-gary-400">{e2p(data.title)}</p>
           
            <div className="flex px-4 justify-between items-center mt-6">
                <AddToCardButton 
                  bgColor={"#eceff1"} 
  
                />
                <span className="text-sm ">{e2p('1,234,500تومان')}</span>
            </div>
       
        </div>
    )
  }