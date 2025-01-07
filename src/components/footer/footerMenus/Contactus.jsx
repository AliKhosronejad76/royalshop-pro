import ListItem from "../ListItem";
import FooterColTitle from "../FooterColTilte";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaMobileScreenButton } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import {e2p} from "../../../e2p";



export default function ContactUs(){
    return(
        <div>
            <FooterColTitle title={e2p("پشتیبانی 24 ساعته")}/>
            <ul>
                <ListItem icon={<FaPhone/>} text={e2p("021-22220000")} />
                <ListItem icon={<FaMobileScreenButton/>} text={e2p("0912-22440055")}/>
                <ListItem icon={<HiOutlineMail/>} text="youremail@gmail.com"/>
                <ListItem icon={<FaLocationDot/>} text={e2p("تهران، خ سرافراز، پلاک 334")}/>
            </ul>
        </div>
    )
}