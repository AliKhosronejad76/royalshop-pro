import { FaHeadphonesSimple } from "react-icons/fa6"
export default function Phone(){
    return(
        <div className="mx-4 flex items-center py-2 transition-hover duration-700 hover:text-green-600">
            <FaHeadphonesSimple/>
            <span className="mr-2">09190263900</span>
        </div>
    )
}