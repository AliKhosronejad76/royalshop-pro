import Header from "../header/Header";
import Footer from "../footer/Footer";


export default function Layout({children}){
    return(
        <>
            <div>
                {/* modals */}
            </div>
            <Header/>
                {children}
            <Footer/>
        </>
    )
}