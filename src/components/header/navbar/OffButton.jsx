import { RiTimer2Line } from "react-icons/ri"
export default function OffButton(){
    return(
        <button className="flex items-center mx-4 transition-all durationi-700 hover:text-green-700">
            <RiTimer2Line className="text-2xl" />
            <span className="text-md mr-2">تخفیف ویژه</span>
        </button>
    )
}