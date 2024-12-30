import {Route , Routes} from "react-router-dom";
import Home from "../pages/Home";
import Search from "../pages/Search";
import ProductDetails from "../pages/ProductDetails";

export default function Router(){
    return(
        <Routes>
            <Route index path="/" element={<Home/>}/>
            <Route  path="/result" element={<Search/>}/>
            <Route path={`/products/:id`} element={<ProductDetails/>} />
        </Routes>
    )
}