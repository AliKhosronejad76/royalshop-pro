import Actions from "./Actions"
import MegaMenus from "./MegaMenus"

export default function Navbar(){
    return(
        <nav className="hidden relative sticky top-0 z-900 px-5 h-[50px] bg-white lg:flex justify-between shadow-2xl ">
           <MegaMenus/>
           <Actions/>
        </nav>
    )
} 








