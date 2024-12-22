import { tabsData , mobileSliderData , cameraSliderData , watchsSliderData, fashionSliderData } from "../../../../sliderData";
import MultipleSlider from "../../../modules/multipleSlider/MultipleSlider";

export default function NewProductsSection(){
    return(
        <div className="bg- mt-12 mb-6">
        
              <MultipleSlider 
                title={"جدیدترین ها در هر دسته"}
                tabsData={tabsData}
                sliderOneData={mobileSliderData}
                sliderTwoData={cameraSliderData}
                sliderTreeData={watchsSliderData}
                sliderFourData={fashionSliderData}
            />
        </div>
    );
}