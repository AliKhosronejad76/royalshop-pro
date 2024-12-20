import { FaAngleUp } from "react-icons/fa6"


export default function ScrollToTop(){
    const handler = ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }
   
    return(
        <div  className="bg-gray-100 flex justify-center mt-8 py-8 gap-3 border-b border-[#cfd8dc]">
            <div onClick={handler} className="h-full gap-2  cursor-pointer flex items-center">
                <div className="bg-gray-400 text-white text-base flex items-center justify-center rounded-md w-[30px] h-[30px]">
                    <FaAngleUp/>          
                </div>
                <div>
                    <span className="text-2xl text-gray-400 bakh-bold">بازگشت به بالا</span>
                </div>
            </div>
           
        </div>
    );
}