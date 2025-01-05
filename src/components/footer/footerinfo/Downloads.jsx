import DownloadIcon from "./DownloadIcon"

export default function Downloads(){
    return(
        <div className="w-full md:w-[47%] lg:w-[19%] flex flex-col items-center sm:items-start">
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