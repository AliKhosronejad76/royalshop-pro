import List from "./List";
import ListItem from "./ListItem";
import { listData } from "../../../../data";


export default function SubMenu({ display , setDisplay }){
    return(
        <div 
        onMouseEnter={()=> setDisplay(true)} 
        onMouseLeave={()=> setDisplay(false)} 
        className={` flex ${display?"visible translate-y-[0px]":"invisible translate-y-[6px]"} absolute z-40 right-[-20px] left-0 bg-white w-full h-screen transition-[transform,visibility]  [duration:1000ms_200ms]`}>
            <List>
                {
                    listData.map((item,index)=><ListItem key={index} name={item.name} icon={<item.icon/>} subData={item?.subData}/>)
                }
            </List>
            
        </div>
    )
}