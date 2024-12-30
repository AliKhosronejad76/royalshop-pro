import Main from "../components/serachPage/main/Main";
import Aside from "../components/serachPage/aside/Aside";


export default function Search(){
    return(
        <div className="p-6 flex justify-between">
          <Aside />
          <Main />

        </div>
    )
}