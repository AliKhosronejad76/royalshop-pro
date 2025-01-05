import ScrollToTop from "../scrollToTop/ScrollToTop";
import FooterMenus from "./footerMenus/FooterMenus";
import FooterInfo from "./footerinfo/FooterInfo";


export default function Footer(){
    return(
        <footer>
            <ScrollToTop/>
            <FooterMenus/>
            <FooterInfo/>
            <div className="bg-gray-100 py-6 flex items-center justify-center text-sm text-gray-500">
                <p className="text-center px-2 leading-loose ">
                با قالب فروشگاهی پروشاپ رویال، رویاهات رو به واقعیت تبدیل کن ! پروشاپ رویال ، منعطف‌ترین قالب فروشگاهی ایران.
                </p>
            </div>
        </footer>
    )
}