import logoImg from "../../../assets/img/proshop-logo.svg"

export default function Logo(){
    return(
        <div className="w-[40%] md:w-[33%] lg:w-[22%]">
            <img src={logoImg} alt="logo-proshop" className="object-cover w-full" />
        </div>
    )
}