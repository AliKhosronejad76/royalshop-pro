import { TbShoppingBag } from "react-icons/tb"
// import { useDrawerContext } from "../../../context/DrawerContextProvider"

export default function ShopCardButton(){
    // const { drawer , setDrawer} = useDrawerContext()
    // onClick={()=>setDrawer(true)} this line add to button
    return(
        <button  className=" mx-4 bg-transparent flex items-center justify-center">
            <TbShoppingBag className="text-5xl p-2.5 transition-hover duration-700 linear hover:text-green-600" />
        </button>
        

    )
}