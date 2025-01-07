import ProductBox from "./ProductBox";
import ProductSlider from "./ProductSlider";

export default function DetailsSection(){
    return(
        <div className="pt-9 flex flex-col md:flex-row gap-10 justify-between px-3 lg:px-6 pb-16 bg-[#e6e6e6]">
            <ProductSlider/>
            <ProductBox/>

        </div>
    );
}