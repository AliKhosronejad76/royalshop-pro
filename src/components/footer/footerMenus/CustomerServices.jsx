// import ListItemLink from "../ListItemLink";
import FooterColTitle from "../FooterColTilte";
import { GoDot } from "react-icons/go";



export default function CustomerServices(){
    return(
        <div>

            <FooterColTitle title="خدمات مشتریان" />
            
            <ul>

                <ListItemLink href="#" linkText={"پاسخ به پرسشهای متداول"}/>
                <ListItemLink href="#" linkText={"رویه‌های بازگردانی کالا"}/>
                <ListItemLink href="#" linkText={"شرایط استفاده"}/>
                <ListItemLink href="#" linkText={"حریم خصوصی"}/>
                
            </ul>
        </div>
)
}

export default function ListItemLink({linkText , href }){
    return(
        <li className="flex text-sm text-gray-600 py-2">
            <GoDot/>
            <a href={href} className="mr-3">
                {linkText}
            </a>
        </li>
    )
}