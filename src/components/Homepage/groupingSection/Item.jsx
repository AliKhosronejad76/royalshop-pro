export default function Item({data}){
    
    return(
        <div className=" mt-9  w-[165px] ">
            <a href="#" className="flex flex-col items-center">
               <img src={data.img} alt={data.title} className="w-full object-contain px-6   transiton-all duration-700 hover:scale-110" />
               <p className="text-sm text-gray-700 mt-2">{data.title}</p>
            </a>
        </div>
    )
}