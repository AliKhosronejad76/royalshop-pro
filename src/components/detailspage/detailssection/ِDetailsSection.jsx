import ProductBox from "./ProductBox";
import ProductSlider from "./ProductSlider";

export default function DetailsSection(){
    return(
        <div className="pt-9 flex justify-between px-6 pb-16 bg-[#e6e6e6]">
            <ProductSlider/>
            <ProductBox/>

        </div>
    );
}