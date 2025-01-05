import SliderTabs from "./SliderTabs";

export default function Header({
    sliderIndex,
    setSliderIndex,
    tabsData,
    title, 
}){
    return(
        <>
            <div className="hidden  opacity-0 lg:flex lg:opacity-100 items-center justify-between px-7">
                <h1 className="text-lg bakh-med text-right ">{title}</h1>
                <SliderTabs tabsData={tabsData} sliderIndex={sliderIndex} setSliderIndex={setSliderIndex} />
                <div className="w-[43%] h-[2px] bg-[#cdd3d7] px-8"></div>

                <a href="#" className="text-base text-nowrap mx-3 transition-all duration-500 hover:text-sky-400">
                    مشاهده همه
                </a>
           </div>
           <div className="flex flex-col  gap-4 lg:hidden lg:opacity-0">
                <div className="flex items-center justify-between px-4">
                 <h1 className="text-xl bakh-med text-right ">{title}</h1>
                 <a href="#" className="text-lg text-nowrap mx-3 transition-all duration-500 hover:text-sky-400">
                    مشاهده همه
                </a>
                </div>
                <div className="w-full h-max px-5">
                 <SliderTabs tabsData={tabsData} sliderIndex={sliderIndex} setSliderIndex={setSliderIndex} />
                   
                </div>
           </div>
        </>
        
    );
}