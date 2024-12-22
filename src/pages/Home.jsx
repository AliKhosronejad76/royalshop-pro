import ArticlesSection from "../components/Homepage/articlesSection/ArticlesSection"
import NewProductsSection from "../components/Homepage/articlesSection/newProductsSection/NewProductsSection"
import PopularBrandsSection from "../components/Homepage/popularbrandssection/PopularBrandsSection"
import Bestselling from "../components/Homepage/besetselling/Bestselling";


export default function Home(){
    return(
        <>
            <Bestselling/>
            <PopularBrandsSection/>
            <NewProductsSection/>
            <ArticlesSection/>
        </>
    )
}