import Slider from "react-slick";
import { watchsSliderData } from "../../../sliderData";
import { useState , useEffect , useRef } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import ImageZoomSlider from "./ImageZoomSlider";

export default function ProductSlider(){
   const [data , setData] = useState(watchsSliderData);
   const [selectedItem , setSelectedItem] = useState([]);
   const containerRef = useRef(null); 
   const itemRef = useRef(null); 

    useEffect(()=>{
        setSelectedItem(data[0]);
    },[])

   const sliderSwitcher=(data)=>{
    console.log(containerRef);
    if(containerRef.current){
        const width = itemRef.current.offsetWidth;
        console.log(containerRef.current);
        containerRef.current.scrollTo(
            containerRef.current.scrollLeft+width*data,0
            // 0,0
        );
        console.log("end");
    }
}


   return(
        <div className="relative flex flex-col justify-between py-8 w-full md:w-[48%] bg-white rounded-lg">
            <div className="w-full h-[70%] ">
                <ImageZoomSlider 
                    className="w-full h-full transition-all duration-300"
                    src={selectedItem.img}
                />
            </div>
            
             <div ref={containerRef} className="relative max-w-[1990px] scroll-container overflow-scroll">
                <div className="w-full flex  mx-10" >
                    {data.map((item  ,index)=><ItemBox itemRef={itemRef} key={index} data={item} selectedItem={selectedItem} setItem={setSelectedItem}/>)}
                </div>   
            </div>
             <button 
             className="bg-[rgba(0,0,0,0.5)] w-6 h-16 flex items-center justify-center text-white text-sm absolute bottom-[80px] z-40"
              onClick={()=>sliderSwitcher(1)}>
               <MdKeyboardArrowRight className="text-xl"/>
            </button>
            <button 
               className="bg-[rgba(0,0,0,0.5)] w-6 h-16 flex items-center justify-center text-white text-sm absolute bottom-[80px] left-[0px] z-40"
               onClick={()=>sliderSwitcher(-1)}>
               <MdKeyboardArrowLeft className="text-xl"/>
                
            </button>
                
        </div>
    );
}

function ItemBox({data , setItem , selectedItem , itemRef}){

    console.log(data);
    const handler = ()=>{
      
        setItem(data);
        
    } 
    return(
        <div ref={itemRef} onClick={handler} className={`p-1 min-w-24 min-h-32  max-w-24 max-h-32 cursor-pointer rounded-xl  ${selectedItem == data ? "border-2 border-blue-500":"border-none"}`}>
            <img src={data.img} className="w-full h-full"/>
        </div>
    );
}

