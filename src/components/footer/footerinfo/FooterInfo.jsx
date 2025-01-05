import AboutUs from "./AboutUs"
import Downloads from "./Downloads"
import Enamad from "./Enamad"

export default function FooterInfo(){
    return(
        <div className="bg-[#f0f5f8] px-8 h-auto flex flex-col gap-12 md:gap-0 md:flex-row md:flex-wrap md:justify-between py-6">  
            <AboutUs/>
            <Downloads/>
            <Enamad/>
        </div>
    )
}