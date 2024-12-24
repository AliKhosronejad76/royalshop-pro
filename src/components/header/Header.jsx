import TopNav from "./topnav/Topnav";
import Navbar from "./navbar/Navbar";

export default function Header(){
    return(
        <header className="relative z-30">
            <TopNav/>
            <Navbar/>            
        </header>
    );
}