import AddToCardButton from "../../modules/addtoCardButton/AddToCardButton";


export default function SlideItem({data}){
    return(
        <div className="bg-white mx-3 border border-[#e6e6e6] rounded-2xl">
            <img src={data.img} alt="" className="rounded-2xl "/>
            <p className="mt-3 text-center text-sm text-gary-400">{data.title}</p>
           
            <div className="flex px-4 justify-between items-center mt-6">
                <AddToCardButton 
                  bgColor={"#eceff1"} 

                />
                <span className="text-sm ">1,234,500تومان</span>
            </div>
       
        </div>
    )
}