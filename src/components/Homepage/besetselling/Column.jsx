import { useState } from "react"
import Item from "./Item"
import { MdKeyboardArrowLeft } from "react-icons/md"

export default function Column({data}){
    const [ hover , setHover ] = useState(false)
    return(
        <div className="w-[33%]  px-3 py-5">
            <h3 className="pb-4">گوشی موبایل</h3>

            <div className="w-full  flex justify-between flex-wrap py-2 [&>:first-child]:border-l  [&>:first-child]:border-b [&>:first-child]:border-[#e2e2e2] [&>:last-child]:border-t [&>:last-child]:border-r [&>:last-child]:border-[#e2e2e2] ">
              <Item/>
              <Item/>
              <Item/>
              <Item/>
            </div>
            {/* <div className="py-3 bg-red-500 flex items-center justify-center">
               <div className="max-h-[25px]">
                  <div className="flex flex-col">
                    <span >1مشاهده بیشتر</span>
                    <span>2مشاهده بیشتر</span>
                  </div>
                

               </div> */}
            {/* </div> */}
        </div>
    )
}