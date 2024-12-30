import { useRef, useState } from "react";
import Info from "./Info";
import Help from "./Help";
import InterduceProduct from "./InterduceProduct";


export default function ProductDescBox(){
    const [menuIndex , setMenuIndex ] = useState(1);
    const interduce = useRef(null);
    const info = useRef(null);
    const help = useRef(null);

    const scrolltoSection = (elementRef)=>{
        window.scrollTo({
            top:elementRef.current.offsetTop-60 , 
            behavior:'smooth',
        });
        console.log(elementRef);
        console.log(window);
    }

    const interduceHandler = ()=>{
        scrolltoSection(interduce);
        setMenuIndex(1);
    }
    const helpHandler = ()=>{
        scrolltoSection(help);
        setMenuIndex(3);
    }

    const infoHandler= ()=>{
        scrolltoSection(info);
        setMenuIndex(2);
    }

    return(
        <div>
            <ul className="h-14 shadow-xl px-6 bg-white  sticky top-0 flex items-center gap-7 text-sm text-gray-500  mb-5">
                <li  className={`${menuIndex===1 ? "text-blue-400 border-b-4 border-blue-400":"text-gray-500 border-none"} cursor-pointer h-full flex items-center`} onClick={interduceHandler}>
                    معرفی
                </li>
                <li  className={`${menuIndex===2 ? "text-blue-400 border-b-4 border-blue-400":"text-gray-500 border-none"} cursor-pointer h-full flex items-center`} onClick={infoHandler}>
                بررسی تخصصی
                </li>
                <li  className={`${menuIndex===3 ? "text-blue-400 border-b-4 border-blue-400":"text-gray-500 border-none"} cursor-pointer h-full flex items-center`} onClick={helpHandler}>
                پرسش و پاسخ
                </li>  
            </ul>

            <InterduceProduct interduceRef={interduce}/>
            <Info infoRef={info}/>
            <Help helpRef={help}/>

        </div>
    )
}

