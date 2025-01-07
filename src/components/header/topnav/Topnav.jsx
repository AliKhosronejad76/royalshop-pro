import Logo from "./Logo"
import Search from "./Search"
import Phone from "./Phone"
import LoginButton from "./LoginButton"
import ShopCardButton from "./ShopCardButton"

export default function Topnav(){
    return(
        <div className="flex justify-between px-5 py-2.5 border-2 border-b-[#f1f1f1]">
            <div className="w-full flex items-center justify-between md:w-[60%] md:px-2">
              <Logo/>
              <Search/>
            </div>
            <div className="hidden opacity-0 text-gray-700 md:opacity-100 md:flex items-center justify-end md:w-[50%] lg:w-[40%]">
                <Phone/>
                <LoginButton/>
                <ShopCardButton/>
            </div>
           
        </div>
    )
} 