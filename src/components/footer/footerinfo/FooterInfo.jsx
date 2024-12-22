import AboutUs from "./AboutUs"
import Downloads from "./Downloads"
import Enamad from "./Enamad"

export default function FooterInfo(){
    return(
        <div className="bg-[#f0f5f8] px-8 h-auto flex justify-between py-6">  
            <AboutUs/>
            <Downloads/>
            <Enamad/>
        </div>
    )
}