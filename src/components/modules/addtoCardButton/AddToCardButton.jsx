import { TbShoppingBagPlus } from "react-icons/tb"


export default function AddToCardButton({bgColor}){
    return(
        <button
          style={{ background: bgColor }}
         className="w-[33px] h-[33px] rounded-full text-2xl  text-gray-500 flex items-center justify-center"
        >
            <TbShoppingBagPlus/>
        </button>
    )
}