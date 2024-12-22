import TabButton from "./TabButton";

export default function SliderTabs({tabsData , setSliderIndex , sliderIndex }){
    const activeTab = (sliderIndex)=>{
        if(sliderIndex === 1){
            return "[&>:nth-child(1)]:border-b-2 [&>:nth-child(1)]:border-sky-400 [&>:nth-child(1)]:text-sky-400"
        }else if(sliderIndex === 2){
            return "[&>:nth-child(2)]:border-b-2 [&>:nth-child(2)]:border-sky-400 [&>:nth-child(2)]:text-sky-400"
        }else if(sliderIndex === 3){
            return "[&>:nth-child(3)]:border-b-2 [&>:nth-child(3)]:border-sky-400 [&>:nth-child(3)]:text-sky-400"
        }else if(sliderIndex === 4){
            return "[&>:nth-child(4)]:border-b-2 [&>:nth-child(4)]:border-sky-400 [&>:nth-child(4)]:text-sky-400"
        }else{
            return ""
        }

    }    
    return(
        <div className={`flex mx-4 ${activeTab(sliderIndex)}`}>
           {tabsData.map((tab , index )=> <TabButton key={index} index={tab.index} name={tab.name} sliderIndex={sliderIndex} setSliderIndex={setSliderIndex}/>)}
        </div>
    )
}