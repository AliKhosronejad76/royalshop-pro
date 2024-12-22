import {useState} from "react";
import Header from "./Header";
import ProductsSlider from "./ProductsSlider";

export default function MultipleSlider({
    title , 
    tabsData ,
    sliderOneData , 
    sliderTwoData , 
    sliderTreeData ,
    sliderFourData ,
}){
    const [sliderIndex , setSliderIndex] = useState(1);
    return(
        <div className="bg-transparent">
           <Header sliderIndex={sliderIndex} setSliderIndex={setSliderIndex} title={title} tabsData={tabsData} />

            {sliderIndex === 1 && <ProductsSlider data={sliderOneData}/>}
            {sliderIndex === 2 && <ProductsSlider data={sliderTwoData}/>}
            {sliderIndex === 3 && <ProductsSlider data={sliderTreeData}/>}
            {sliderIndex === 4 && <ProductsSlider data={sliderFourData}/>}
        </div>
    )
}