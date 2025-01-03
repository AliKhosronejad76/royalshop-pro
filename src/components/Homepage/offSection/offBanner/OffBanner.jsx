import { useState , useRef } from "react";
import {data} from "../data";
import { FaArrowLeft } from "react-icons/fa6";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { RiArrowLeftDoubleLine } from "react-icons/ri";

export default function OffBanner(){
    const [bannerData , setBannerData] = useState(data);    
    const containerRef = useRef(null);
    const itemRef = useRef(null);
    
    
    const sliderSwitcher=(data)=>{
       
        if(containerRef.current){
            const width = itemRef.current.offsetWidth;
            console.log(containerRef.current);
            containerRef.current.scrollTo(
                containerRef.current.scrollLeft+width*data,0
                // 0,0
            );
            // console.log("end");
         
        }
    }
    
    return(
        <div className="w-[90%] h-[38rem]  flex my-7">
                {/* col  */}
                <div className="bg-red-500 h-full w-[25%] rounded-tr-xl rounded-br-xl py-7 flex flex-col items-center justify-center gap-32">
                    <img src="/img/offer-home-01.png" />
                   
                    <a href="/" className="flex items-center gap-4 text-white">
                        <span className="text-white">مشاهده همه</span>
                        <FaArrowLeft/>
                    </a>
                </div>

                {/* col  */}

                <div className="w-[75%] flex-col flex h-full bg-white rounded-tl-xl rounded-bl-xl">
                    {/* header c */}
                    <div className="px-5 h-[4rem] flex  justify-between ">
                        <div className="w-[50%] flex  justify-between">
                            <div  onClick={()=>sliderSwitcher(1)} className="text-sm flex items-center">
                            <RiArrowRightDoubleLine />
                                <span>
                                    بعدی
                                </span>
                            </div>
                            <div className="items-center flex">
                                2/1
                            </div>
                            <div  onClick={()=>sliderSwitcher(-1)} className="text-sm flex items-center">
                                <span>
                                    قبلی
                                </span>
                                <RiArrowLeftDoubleLine />
                            </div>
                        </div>

                        <div className="w-[50%] h-[3rem] flex  justify-center">
                            <h1 className="rounded-br-[1rem] rounded-bl-[1rem] text-white bg-red-500 h-full text-xl text-center px-8 flex items-center w-max bakh-reg">
                            پیشنهادهای ویژه
                            </h1>
                        </div>
                    </div>
                 
                    {/* header c */}

                    {/* slider  */}
                    <div ref={containerRef} className="w-full max-w-[1950px] overflow-scroll scroll-container ">
                            <div   className="w-full  flex  ">
                                {bannerData.map((item)=><Item key={item.id} data={item} itemRef={itemRef} />)}
                            </div>
                    </div>
                    {/* slider  */}

                </div>
        </div>
    );
}


function Item({itemRef , data}){
    return(
        <div ref={itemRef}  className="min-w-full flex justify-between py-5 px-9">
           <div className="w-[52%] ">
                <div className="flex justify-between w-full bakh-reg">
                    <div  className=" text-2xl flex ">
                        <h4 className="tracking-widest">
                             {data.price} تومان 
                        </h4>
                    </div>

                    <div className="flex items-center bg-red-500 py-2 px-4 text-white text-sm rounded-tr-full rounded-br-full rounded-bl-xl rounded-tl-sm">
                        <span className="ml-2 text-white">{data.off}%</span>
                        تخفیف
                    </div>

                </div>

                {/* title  */}
                <div className="mx-7 py-10 bakh-light text-center ">
                    <a className="text-2xl leading-loose transition duration-500 hover:text-sky-500"  href="/">{data.fullName}</a>
                </div>

                {/* title  */}
                {/* details  */}
                <ul className="list-disc">
                    {data.details.map((item , index)=>(
                        <li key={index} className="text-sm mb-3 text-gray-500">
                            <span className="text-gray-500 bakh-reg">{item.title} :</span>
                            <span className="text-gray-700 bakh-bold mr-2">{item.desc}</span>
                        </li>
                    ))}
                </ul>

                {/* details  */}


           </div>
            {/* imgs */}
            <div className="w-[45%] flex justify-between">
                <div className="flex flex-col gap-5 w-[24%] px-1">
                    {data.imgs.map((item)=>
                        (<div className="w-full h-20 border bg-white">
                            <img src={item.src} className="p-2 w-full h-full object-fill " />
                         </div>
                        ))
                        }
                </div>
                
                
                <div className="w-[75%]  bg-red-600">
                    <img src={data.cover} className="w-full h-full object-cover"/>
                </div>
            </div>


            {/* imgs */}
        </div>
    )
}