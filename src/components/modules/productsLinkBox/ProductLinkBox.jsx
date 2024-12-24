import { FaAngleDoubleLeft } from "react-icons/fa";

export default function ProductsLinkBox({icon , title , desc }){
    return(
        <div className="h-[50%] px-5 py-3 bg-[#f5f8ff] flex flex-col items-start">
                <div className="text-[#356ee8] my-4 text-6xl">
                    {icon}
                </div>

                <h6 className="text-[#235bd5] mb-4 text-xl">{title}</h6>
                <p className="text-[#235bd5] text-base">
                    {desc}
                </p>
                <a href="#" className="w-full justify-end my-3 flex items-center">
                    <span>مشاهده همه</span>
                    <FaAngleDoubleLeft/>
                </a>
        </div>
    )
}