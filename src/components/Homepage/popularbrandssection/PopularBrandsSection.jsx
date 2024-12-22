import BrandsSlider from "./BrandsSlider";
import Row from "../../modules/row/Row";
import ZoomBanner from "../../modules/zoomBanner/ZoomBanner";
import { FaSun } from "react-icons/fa6";


export default function PopularBrandsSection(){
    return(
        <div className="mt-12 ">
             <div className="flex items-center  mx-auto w-max">
                <FaSun className="text-5xl p-1.5 text-yellow-500 transition-all duration-700 hover:text-red-600"/>
                <h1 className="text-2xl mr-3">محبوب ترین برند ها</h1>
             </div>

             <BrandsSlider/>

             <Row>
                <ZoomBanner width="48%" img="./img/home-banner-bb4.webp" />
                <ZoomBanner width="48%" img="./img/home-banner-bb3.webp" />
             </Row>
        </div>
    )
}