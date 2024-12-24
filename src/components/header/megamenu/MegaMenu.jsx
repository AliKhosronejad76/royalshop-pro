import { menuData } from "./data"
import ListItem from "./ListItem"


export default function MegaMenu(){
    return(
        <ul className="flex  items-center justify-between text-sm h-full">
            {
                menuData.map(( item , index )=><ListItem key={index} data={item}/> )
            }
        </ul>
    )
} 