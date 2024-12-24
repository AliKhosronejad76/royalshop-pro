import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import SubMenu from "./SubMenu";

export default function ListItem({data}){
    const [ show , setShow  ] = useState(false)
    const [hover , setHover ] = useState(false)
    const setTrue = ()=>{
        setShow(true)
        setHover(true)
    }
    const setFalse=()=>{
        setShow(false)
        setHover(false)
    }
    return(
        <li 
         onMouseEnter={setTrue}
         onMouseLeave={setFalse}
        className=" mx-4 h-full flex items-center justify-center ">
            <a href="#" className={`h-full flex items-center pb-2 ${hover ?  "after:w-full" : "after:w-[0px]"} relative after:content-[''] after:h-[2px] after:absolute after:bottom-0 after:right-0 after:bg-sky-500 after:transiton-all  after:duration-300 w-max   duration-300 hover:text-sky-500`}>
                {data.title}
            </a>
           { data.subMenu && <FaAngleDown className="mr-2"/> }
           { data.subMenu ?  <SubMenu show={show} setShow={setShow} type={data.type} data={data.subMenu}/> : null }
        </li>
    )
}


 