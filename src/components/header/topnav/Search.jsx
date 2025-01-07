import { FaSearch } from "react-icons/fa"
export default function Search(){
    return(
            <div className="w-[60%] md:w-[75%] px-2.5  bg-[#f0f0f1] rounded-lg h-max  mr-2">
             <form className="flex items-center w-max">
                <button>
                <FaSearch className="text-sm" />
                </button>
                <input 
                className="bg-transparent h-[43px] text-[14px] md:text-sm focus:outline-none px-4 py-2"
                type="text" 
                placeholder="جست و جو محصول"
                />
                
            </form>
          
        </div>
    )
}