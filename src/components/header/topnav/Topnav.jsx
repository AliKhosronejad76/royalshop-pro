import Logo from "./Logo"
import Search from "./Search"
import Phone from "./Phone"
import LoginButton from "./LoginButton"
import ShopCardButton from "./ShopCardButton"

export default function Topnav(){
    return(
        <div className="flex justify-between px-5 py-2.5 border-2 border-b-[#f1f1f1]">
            <div className=" flex items-center justify-between w-[60%] px-2">
              <Logo/>
              <Search/>
            </div>
            <div className="text-gray-700 flex items-center justify-end w-[40%]">
                <Phone/>
                <LoginButton/>
                <ShopCardButton/>
            </div>
           
        </div>
    )
} 