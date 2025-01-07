import { useState } from "react"
import Item from "./Item"
import { MdKeyboardArrowLeft } from "react-icons/md"
import {e2p} from "../../../e2p";


export default function Column({data}){
    const [ hover , setHover ] = useState(false)
    return(
        <div className="w-full h-full md:w-[33%]  px-3 py-5">
            <h3 className="pb-4">{data.title}</h3>

            <div className="w-full  flex justify-between flex-wrap py-2 [&>:first-child]:border-l  [&>:first-child]:border-b [&>:first-child]:border-[#e2e2e2] [&>:last-child]:border-t [&>:last-child]:border-r [&>:last-child]:border-[#e2e2e2] ">
              {data.products.map((item ,index)=><Item data={item} key={index} />)}
              
              
              
            </div>
 
        </div>
    )
}