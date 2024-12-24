import { FaRegHeart } from "react-icons/fa"
export default function FavButton(){
    return(
        <button className="mx-4 ">
            <FaRegHeart className="text-xl transition-hover duration-700 hover:text-green-700" />
        </button>
    )
}