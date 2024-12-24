import { useState } from "react"
import { IoMenu } from "react-icons/io5"
import SubMenu from "./SubMenu"


export default function ProductsCategoriesMenu(){
    const [ display , setDisplay ] = useState(false)
    
    return(
        <div className="relative">
            <a 
            href="#"
            onMouseEnter={()=>setDisplay(true)}
            onMouseLeave={()=>setDisplay(false)}
            className="flex items-center h-full px-3 bg-[#f5f5f7] border-l-2 border-[#d7dfe3] text-gray-700">
                
                <IoMenu className="text-xl text-gray-600"/>
                <span className="w-max text-sm mr-3">دسته بندی کالا ها </span>
            </a>

            <SubMenu display={display} setDisplay={setDisplay}/>
       
       
       
       
        </div>
    )
}