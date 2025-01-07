export default function Item({data}){
    
    return(
        <div className="mt-9 w-[49%] sm:w-[32%] md:w-[15%] lg:w-[13%] ">
            <a href="#" className="flex flex-col items-center">
               <img src={data.img} alt={data.title} className="w-full object-contain px-6  sm:p-9 md:p-[0px] transiton-all duration-700 hover:scale-110" />
               <p className="text-sm text-gray-700 mt-2">{data.title}</p>
            </a>
        </div>
    )
}