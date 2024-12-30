import Header from "../header/Header";
import Footer from "../footer/Footer";


export default function Layout({children}){
    return(

        <div className="">
            <div>
                {/* modals */}
            </div>
            <Header/>
                {children}
            <Footer/>
        </div>
    )
}