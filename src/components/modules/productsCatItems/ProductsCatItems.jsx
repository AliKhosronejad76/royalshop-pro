import { TbPoint } from "react-icons/tb";
import {e2p} from "../../../e2p";


export default function ProductsCatItems({ data }){
    console.log(data)
    return(
        <div className="flex flex-col items-start">
            <img src={data.imgCat} alt="" />
            <div style={{color:data.orgColor} } className="flex justify-center items-center">
              <TbPoint className="text-3xl"/>
              <h1  className="my-3">{data.catName}</h1>
            </div>
            <ul className="my-2">
                {
                    data.items.map((item , i )=>(<li style={{borderColor : data.orgColor }} className="my-2.5 border-r-2 px-2">
                        <a href="#">
                         {e2p(item.name)}
                        </a>                        
                        </li>
                        ))
                }
            </ul>
        </div>
    )
}