import { groupingItems } from "../../../groupdata";
import Item from "./Item";
import Row from "../../modules/row/Row";
import ZoomBanner from "../../modules/zoomBanner/ZoomBanner";


export default function GroupingSection(){
    return(
        <div className="mt-10">
            <h1 className="text-center text-xl pt-4 ">بر اساس دسته بندی </h1>
        
            <div className="flex flex-wrap justify-center mt-4 mb-6 px-32">
                {
                    groupingItems.map((item, index )=> <Item data={item} key={index}/>)
                }
            </div>
            <Row>
                <ZoomBanner img={"/img/home-banner-b1.webp"} imgAlt={"banner2"} width={"49%"}/>
                <ZoomBanner img={"/img/home-banner-bb2.webp"} imgAlt={"banner1"} width={"49%"}/>
            </Row>
        
          
        </div>
    )
}