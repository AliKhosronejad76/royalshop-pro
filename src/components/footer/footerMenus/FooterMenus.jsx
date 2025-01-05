import ContactUs from "./Contactus"
import SocialNetwork from "./SocialNetwork"
import CustomerServices from "./CustomerServices"
import ProshopServices from "./ProshopServices"

export default function FooterMenus(){
    return(
        <div className="flex flex-col gap-10 md:gap-0 md:flex-row md:justify-between py-16 px-8 bg-[#f7fafd]">
            <ContactUs/>
            <CustomerServices/>
            <ProshopServices/>
            <SocialNetwork/>
        </div>
    )
}