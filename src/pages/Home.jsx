import ArticlesSection from "../components/Homepage/articlesSection/ArticlesSection"
import NewProductsSection from "../components/Homepage/articlesSection/newProductsSection/NewProductsSection"
import PopularBrandsSection from "../components/Homepage/popularbrandssection/PopularBrandsSection"
import Bestselling from "../components/Homepage/besetselling/Bestselling";
import SpecialProducts from "../components/Homepage/specialproducts/SpecialProducts";
import GroupingSection  from "../components/Homepage/groupingSection/GroupingSection";
import Banner from "../components/Homepage/banner/Banner";
import OffSection from "../components/Homepage/offSection/OffSection";

export default function Home(){
    return(
        <>
            <Banner/>
            <GroupingSection />
            <SpecialProducts />
            <Bestselling/>
            <PopularBrandsSection/>
            <NewProductsSection/>
            <OffSection/>
            <ArticlesSection/>
        </>
    )
}