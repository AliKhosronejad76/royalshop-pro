import { useState } from "react";
import { FaShareNodes } from "react-icons/fa6";
import { IoIosHeart } from "react-icons/io";
import { GrCompare } from "react-icons/gr";
import { FaCheck } from "react-icons/fa";
import { RiShoppingBag4Line } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";

export default function ProductBox(){
    return(
        <div className="w-full md:w-[48%] bg-white rounded-lg bakh-medium py-7 px-7 shadow-sm">
            <h4 className="text-lg mb-2">
                ساعت مردانه آلبرت ریه
            </h4>


            <div className="flex justify-between mb-6">
                <p className="text-sm flex text-gray-300">
                Albert Riley Men Watch
                </p>

                <div className="text-xl text-gray-600 flex items-center gap-3">
                    <div>
                     <FaShareNodes/>
                    </div> 

                    <div>
                     <IoIosHeart/>
                    </div>  
                    <div>
                     <GrCompare/>
                    </div>
                </div>
            </div>
            
            
            <div className="flex items-center gap-2">
                <TbTruckDelivery className="text-red-600 text-3xl"/>
                <h4>ارسال رایگان برای خرید بالای 1,000,000 تومان </h4>
            </div>

            
            
            <p className="text-sm my-7 text-justify leading-loose">
            ساعت فوق دارای شرایط فروش اقساطی می‌باشد و شما با چک یا سفته می‌توانید اقدام به خرید اقساطی این دوربین نمایید. همچنین از لینک‌های زیر می‌توانید استفاده کنید تا مشکلی در کارکرد با ساعت نداشته باشی
            </p>

            <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-4">
                    <FaCheck className="text-xl text-sky-500"/>
                    <span>
                    درباره این ساعت بیشتر بدانید
                    </span>
                </li>
                
                <li className="flex items-center gap-4">
                    <FaCheck className="text-xl text-sky-500"/>

                    <span>
                    آموزش استفاده از این ساعت
                    </span>
                </li>
                <li className="flex items-center gap-4">
                  <FaCheck className="text-xl text-sky-500"/>
                  <span>
                  امکانات ساعت‌های هوشمند
                  </span>
                </li>


            </ul>

            <div className="my-8 px-3">
                <p className="text-2xl bakh-medium text-sky-500">
                4,620,000 تومان
                </p>
            </div>

            {/* action */}
            <div className="w-full flex flex-col gap-3 md:flex-row items-center justify-between text-lg text-gray-700">
                <div className="w-full flex md:w-[30%] border rounded-md h-[50px]">
                    <button className="w-[33%] flex items-center justify-center h-full">
                        +
                    </button>
                    <div className="border-r border-l w-[33%] flex items-center justify-center h-full">
                        0
                    </div>
                    <button className="w-[33%] flex items-center justify-center h-full">
                        -
                    </button>
                </div>
                <div className="w-full md:w-[67%]">
                <AddToCard/>
                </div>
               
            </div>
            {/* action */}

        </div>
    );
}

function AddToCard(){
    const [hover , setHover] = useState(false);
    return(
        <button 
        onMouseEnter={()=>setHover(true)}
        onMouseLeave={()=>setHover(false)}
        className="w-full h-[55px] bg-[#00c095] relative rounded-md">
            <div className={`${hover ?"w-full transition-all duration-500 rounded-md opacity-100":"w-[66px] opacity-80"} right-0 h-full top-0 flex items-center justify-center text-3xl  bg-[#67ced1] absolute rounded-tr-md rounded-br-md `}>
                <RiShoppingBag4Line className="text-white "/>
            </div>
            <span className={`text-center mr-12 text-white text-base`}>افزودن به سبد خرید</span>
        </button>
    );
}