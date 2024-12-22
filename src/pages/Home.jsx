import ArticlesSection from "../components/Homepage/articlesSection/ArticlesSection"
import NewProductsSection from "../components/Homepage/articlesSection/newProductsSection/NewProductsSection"
import PopularBrandsSection from "../components/Homepage/popularbrandssection/PopularBrandsSection"

export default function Home(){
    return(
        <>
            <PopularBrandsSection/>
            <NewProductsSection/>
            <ArticlesSection/>
        </>
    )
}