import FashionItems from "../../modules/fashionItems/FashionItems";
import ProductsBrandList from "../../modules/productBrandList/ProductsBrandList";
import { brands } from "./data";

export default function FashionMenu({ data }){
    console.log(data)
    return(
        <div className=" px-1 py-3 flex justify-between">
            <div className="w-[63%] flex flex-wrap [&>:nth-child(2)]:border-r [&>:nth-child(2)]:border-gray-300 [&>:nth-child(3)]:border-r [&>:nth-child(3)]:border-gray-300">
                {data.map((item , index )=> <FashionItems key={index} data={item}/>)}
            </div>

            <div className="w-[38%] pr-3 flex border-r border-gray-300 h-full">
              <ProductsBrandList img="/img/menu-shop-women.webp" brands={brands} title="برترین برند زنان"/>
              <ProductsBrandList img="/img/menu-shop-men.webp" brands={brands}  title="برترین برند های مزدانه"/>
            </div>
        </div>
    )
}