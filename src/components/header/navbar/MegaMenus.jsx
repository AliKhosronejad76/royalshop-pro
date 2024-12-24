import MegaMenu from "../megamenu/MegaMenu"
import ProductsCategoriesMenu from "../megamenu/productscategoriesmenu/ProductsCategoriesMenu";


export default function MegaMenus(){
    return(
        <div className="h-full  flex ">
            <ProductsCategoriesMenu/>
            <MegaMenu/>
        </div>
    )
}

