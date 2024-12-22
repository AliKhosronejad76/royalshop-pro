import ArticlesSection from "../components/Homepage/articlesSection/ArticlesSection"
import NewProductsSection from "../components/Homepage/articlesSection/newProductsSection/NewProductsSection"
import PopularBrandsSection from "../components/Homepage/popularbrandssection/PopularBrandsSection"
import Bestselling from "../components/Homepage/besetselling/Bestselling";
import SpecialProducts from "../components/Homepage/specialproducts/SpecialProducts";
import GroupingSection  from "../components/Homepage/groupingSection/GroupingSection";

export default function Home(){
    return(
        <>
            <GroupingSection />
            <SpecialProducts />
            <Bestselling/>
            <PopularBrandsSection/>
            <NewProductsSection/>
            <ArticlesSection/>
        </>
    )
}