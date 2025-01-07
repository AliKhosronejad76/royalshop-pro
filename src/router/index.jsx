import { useEffect } from "react";
import {Route , Routes} from "react-router-dom";
import Home from "../pages/Home";
import Search from "../pages/Search";
import ProductDetails from "../pages/ProductDetails";
import { useLocation } from "react-router-dom";



export default function Router(){
    const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
   useEffect(() => {
     window.scrollTo(0, 0);
   }, [pathname]);
   useEffect(()=>{
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
    },[])
    return(
        <Routes>
            <Route index path="/" element={<Home/>}/>
            <Route  path="/result" element={<Search/>}/>
            <Route path={`/products/:id`} element={<ProductDetails/>} />
        </Routes>
    )
}