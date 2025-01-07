import AddToCardButton from "../../modules/addtoCardButton/AddToCardButton";
import { e2p } from "../../../e2p";
import { Link } from "react-router-dom";


export default function SlideItem({data}){
    return(
        <div className="w-full  flex flex-col justify-between bg-white  border border-[#e6e6e6] rounded-2xl bakh-reg leading-loose text-gray-800">
            <Link to="/products/demo123">
                <img src={data.img} alt="" className="w-full rounded-2xl object-contain"/>
            </Link>
            <Link to="/product/demo123">
                <p className="mt-3 text-center text-sm text-gary-400 text-wrap p-3">{data.title}</p>
            </Link>
           
            <div className="w-full  flex p-3 justify-between items-center mt-6">
                <AddToCardButton 
                  bgColor={"#eceff1"} 

                />
                <span className="text-sm ">{e2p('1,234,500')}تومان</span>
            </div>
       
        </div>
    )
}