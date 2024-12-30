import Comments from "../components/detailspage/Comments";
import ProductDescBox from "../components/detailspage/productdescbox/ProductDescBox";
import DetailsSection from "../components/detailspage/detailssection/ِDetailsSection";
import RelatedProductSlider from "../components/detailspage/RelatedProductSlider";

export default function ProductDetails(){
    return(
        <div className="">
            <DetailsSection/>
            <RelatedProductSlider/>
            <ProductDescBox/>
            <Comments/>
        </div>
    );
}