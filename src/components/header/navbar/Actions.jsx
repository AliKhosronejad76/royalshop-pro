import FavButton from "./FavButton"
import OffButton from "./OffButton"


export default function Actions(){
    return(
        <div className="w-[40%] flex justify-end text-gray-700">
                <FavButton/>
                <OffButton/>
            </div>
    )
}