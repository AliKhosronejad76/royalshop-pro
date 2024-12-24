import ProductsBox from "../../../modules/productsBox/ProductsBox";

export default function SubList({ hover , setHover , data }){
    return(
        <div 
         onMouseEnter={()=>setHover(true)}
         onMouseLeave={()=>setHover(false)}

        className={` scroll-container ${hover ? "visible block" : "invisible hidden" } w-screen h-screen  px-8 pt-4 fixed bottom-0 right-[150px] l  z-20 bg-white`}
        >
            <div className="w-full flex flex-wrap">
                {data?.map((item , index )=> <ProductsBox key={index} data={item}/>)}
            </div>
        </div>
    )
}