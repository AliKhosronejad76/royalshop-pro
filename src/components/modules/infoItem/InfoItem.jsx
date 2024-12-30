export default function InfoItem({title , desc}){
    return(
        <div className="w-full flex justify-between gap-2 h-[40px] text-gray-500">
            <div className="w-[20%] h-full flex items-center px-3 text-sm rounded bg-gray-100">
                {title}
            </div>
            <div className="w-[79.5%] h-full px-3 flex items-center rounded text-sm bg-gray-100">
                {desc}
            </div>
        </div>
    )
}