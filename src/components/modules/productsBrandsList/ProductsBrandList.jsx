import { FaCanadianMapleLeaf } from "react-icons/fa6"
import { FaChevronLeft } from "react-icons/fa"
export default function ProductsBrandsList({img , title , brands }){
    return(
        <div className="w-[49%]">
            <img className="w-full" src={img} alt={title} />

            <div className="flex my-2 text-sky-700 pt-1">
                <FaCanadianMapleLeaf className="text-2xl"/>    
                <span className="text-lg mr-2">{title}</span>
            </div>
            <ul className="px-1 pt-2">
                {
                    brands.map((brand , index )=>(<li key={index} className="my-2">
                    <a href="#" className="flex items-center  text-sm">
                        <FaChevronLeft className="text-gray-400"/>
                        <span className="mr-2 text-gray-600">
                         {brand.name}
                        </span>
                    </a>
                    </li>))
                }
            </ul>
        </div>
    )
}