import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";


export default function Accordion({ title , desc }){
    const [open , setOpen] = useState(false);
    
    function handler(){
        setOpen(((prev)=> !prev))
    }

    return(
        <div className={` border-b border-gray-300 pb-2 text-gray-700 transition-all duration-700`}>
            <div onClick={(()=>handler())} className="flex h-16 items-center gap-3 cursor-pointer px-3 ">
               <div className="bg-amber-500 w-7 h-7 rounded text-white flex items-center justify-center text-sm ">
                    { open ? <FaMinus/> : <FaPlus/> }
               </div>
               <p className="bakh-light text-blue-800 ">{title}</p> 
            </div>

            <div className={`${open ? "h-17 transition-all duration-700" : "max-h-[0px] overflow-hidden" } transition-all duration-500 `}>
                <p className="leading-loose text-sm px-2 text-justify">
                    {desc}
                </p>
            </div>
        </div>
    );
}