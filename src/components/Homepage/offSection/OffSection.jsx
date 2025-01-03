import { useState , useRef, useEffect } from "react";

import OffBanner from "./offBanner/OffBanner";


export default function OffSection(){

    return(
        <div className="bg-[#e9e9e9] flex flex-col items-center py-16 gap-5">
                <div className="mb-20">
                    <img src="/img/home-off-banner-02.webp"/>
                </div>

                <div className="w-[80%] flex flex-wrap justify-between ">
                    <Box category={"ساعت مچی"} img={"/img/watch-cat.webp"} quntity={40}/>
                    <Box category={"گوشی موبایل"} img={"/img/apple_cat.webp"} quntity={60}/>
                    <Box category={'دوربین عکاسی'} img={"/img/photography-cat.webp"} quntity={30}/>
                    <Box category={"مد و بوشاک"} img={"/img/shirt-cat.webp"} quntity={500}/>
                    <Box category={"تجهیزات عکاسی"} img={"/img/Tripod-cat.webp"} quntity={20}/>
                    <Box category={"تجهیزات گوشی"} img={"/img/moderm-phone-cat.webp"} quntity={320}/>
               </div>
               <OffBanner/>
        </div>
    );
}




function Box({img , quntity , category}){
    const [hover , setHover] = useState(false);
    return(
        <a 
            className={`${hover ?"translate-y-[-6px]":"translate-y-[0px]"} transition duration-300 gap-4 w-[31%] flex flex-col items-center justify-center mb-16`}
            onMouseEnter={()=>setHover(true)}
            onMouseLeave={(()=>setHover(false))}
            href="/"
        >
            <div className="mx-auto h-[7rem] bg-white rounded-2xl p-1 w-[100px]">
                <img 
                 src={img}
                 className="mx-auto max-w-[6rem] max-h-[7rem] rounded-2xl"
                />

            </div>
            <h1 className="mx-auto text-lg bakh-medium text-blue-600 text-center">{category}</h1>
            <p className="text-sm text-center ">
                بیش از{quntity}محصول
            </p>
        </a>
    )

}


