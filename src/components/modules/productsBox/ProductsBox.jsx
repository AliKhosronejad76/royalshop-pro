import { e2p } from "../../../e2p";

export default function ProductsBox({data}){
    // console.log(`productsBox:${data} `)
    return(
        <div  className="flex flex-col items-start mx-8  w-max">
            <h4 className="mb-2 text-bold text-base">{data.header}</h4>
            <ul className="px-2">
                {data.items.map((item , index )=><li key={index} className={`  px-2 mb-3 text-sm border-r-2`} style={{borderColor:data.orgColor}}>{e2p(item.name)}</li> )}
            </ul>
        </div>
    )
}