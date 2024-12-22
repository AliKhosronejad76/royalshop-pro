export default function ListItem ({ text , icon }){
    return(
        <li className="text-gray-600 text-sm flex  py-2">
            <div className="flex items-center  h-full">
             {icon}
            </div>
           <span className="mr-3 ">
             {text}
           </span>
        </li>
    )
}