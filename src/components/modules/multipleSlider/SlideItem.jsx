import AddToCardButton from "../../modules/addtoCardButton/AddToCardButton";


export default function SlideItem({data}){
    return(
        <div className="w-full  flex flex-col justify-between bg-white  border border-[#e6e6e6] rounded-2xl bakh-reg leading-loose text-gray-800">
            <img src={data.img} alt="" className="w-full rounded-2xl object-contain"/>
            <p className="mt-3 text-center text-sm text-gary-400 text-wrap p-3">{data.title}</p>
           
            <div className="w-full  flex p-3 justify-between items-center mt-6">
                <AddToCardButton 
                  bgColor={"#eceff1"} 

                />
                <span className="text-sm ">1,234,500تومان</span>
            </div>
       
        </div>
    )
}