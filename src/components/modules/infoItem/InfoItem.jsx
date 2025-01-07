export default function InfoItem({title , desc}){
    return(
        <div className="w-full flex flex-col md:flex-row lg:flex-row lg:justify-between gap-3 h-auto lg:h-[40px] text-gray-500">
            <div className="w-full md:w-[20%] h-full py-3 flex items-center px-3 text-sm rounded bg-gray-100">
                {title}
            </div>
            <div className="w-full md:w-[79.5%] py-4 md:py-3 h-full px-3 flex items-center rounded text-sm bg-white md:bg-gray-100">
                {desc}
            </div>
        </div>
    )
}