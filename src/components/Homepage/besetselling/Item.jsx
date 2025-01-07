import { e2p } from "../../../e2p";
import { Link } from "react-router-dom";


export default function Item({data}){
    return(
        <div className="w-[50%] pt-2 min-h-[10rem] max-h-[10rem]">
            <Link to="/products/demo123">
                <div className="overflow-hidden">
                <img src={data.img} className="w-full px-5 transiton-all duration-700  hover:scale-110" />
                </div>
                <p className="bakh-light py-2  hover:text-clip text-[13px] text-center mt-3 pb-2 leading-relaxed px-1">
                {e2p(data.title)}
                </p>
            </Link>
           
        </div>
    )
}