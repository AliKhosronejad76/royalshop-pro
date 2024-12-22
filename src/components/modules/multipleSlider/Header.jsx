import SliderTabs from "./SliderTabs";

export default function Header({
    sliderIndex,
    setSliderIndex,
    tabsData,
    title, 
}){
    return(
        <div className="flex items-center justify-between px-7">
            <h1 className="text-lg bakh-med text-right ">{title}</h1>
            <SliderTabs tabsData={tabsData} sliderIndex={sliderIndex} setSliderIndex={setSliderIndex} />
            <div className="w-[43%] h-[2px] bg-[#cdd3d7] px-8"></div>

            <a href="#" className="text-base text-nowrap mx-3 transition-all duration-500 hover:text-sky-400">
                مشاهده همه
            </a>
        </div>
    );
}