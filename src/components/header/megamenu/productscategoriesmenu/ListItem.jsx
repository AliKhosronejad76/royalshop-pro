import { useState } from "react"
import { MdKeyboardArrowLeft } from "react-icons/md"
import SubList from "./SubList"


export default function ListItem({name , icon  , subData}){
    const [hover , setHover ] = useState(false)
    return(
        <li 
         onMouseEnter={()=>setHover(true)}
         onMouseLeave={()=>setHover(false)}
        className="w-[155px]  flex items-center justify-between px-3 py-3 bg-[#f5f5f7] inline text-base text-gray-700">
            <a href="#" className="flex items-center justify-between w-full inline">
                <div className="flex items-center">
                    {icon}
                    <span className="text-sm mr-3">{name}</span>
                </div>

                <MdKeyboardArrowLeft className="mr-1"/>
            </a>
           {subData && <SubList data={subData} hover={hover} setHover={setHover}/>}
        </li>
    )
}