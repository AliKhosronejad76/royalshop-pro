// import { useUserModal } from "../../../context/UserModalProvider"
import { FaRegUser } from "react-icons/fa"

export default function LoginButton(){
    // const {display , setDisplay } = useUserModal()
    // console.log({ display , setDisplay })
    //this line add to button
    // onClick={()=>setDisplay(!display)}

    return(
        <button   className="min-w-max flex items-center mx-4 text-base">
            <FaRegUser className="ml-2" />
            <span>ورود/ثبت نام</span>
        </button>
    )
}