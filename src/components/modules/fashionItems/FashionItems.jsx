export default function FashionItems({data}){
    return(
        <div className="pl-[99px] pr-4">
            <h4 className="text-xl text-sky-800">{data.header}</h4>
            <ul className="px-2">
               {
                data.items.map((item , index )=>(
                    <li key={index} className="text-sm my-3">
                    <a href="#">
                        {item.name}
                    </a>
                </li>
                ))
               }
            </ul>
        </div>
    )
}