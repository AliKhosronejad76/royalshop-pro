import ListItemLink from "../ListItemLink";
import FooterColTitle from "../FooterColTilte";



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