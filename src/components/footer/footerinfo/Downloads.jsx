import DownloadIcon from "./DownloadIcon"

export default function Downloads(){
    return(
        <div className=" w-[19%] flex flex-col items-center ">
            <div className="my-2">
              <DownloadIcon  img={"/img/coffe-bazzar.svg"}/>
            </div>
            <div className="my-2">
              <DownloadIcon img={"/img/sib-app.svg"}/>            
            </div>
            <div className="my-2">
              <DownloadIcon  img={"/img/google-play.svg"}/>            
            </div>
        </div>
    )
}