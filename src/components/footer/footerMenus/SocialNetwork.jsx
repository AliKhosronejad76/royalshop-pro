import FooterColTitle from "../FooterColTilte";
import SocialIcon from "../SocialIcon";
import Logo from "../../logo/Logo";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaPinterestP } from "react-icons/fa6";

export default function SocialNetwork(){
    return(
        <div className="flex flex-col items-start">
            <FooterColTitle title="شبکه های اجتماعی ما"/>
           
            <div className="flex  my-1">
                <SocialIcon href="#" icon={<FaInstagram/>} />
                <SocialIcon href="#" icon={<FaPinterestP/>} />
                <SocialIcon href="#" icon={<FaLinkedinIn/>} />
                <SocialIcon href="#" icon={<IoLogoYoutube/>} />
            </div>
            <div className="my-6 ">
              <Logo/>
            </div>
        </div>
    )
}