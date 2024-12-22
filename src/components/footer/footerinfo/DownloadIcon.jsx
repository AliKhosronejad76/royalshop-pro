export default function DownloadIcon({ img }){
    return(
        <div  >
            <a href="#">
                <img src={img}
                className={`border border-gray-200 hover:shadow-[0px_2px_12px_1px_rgba(0,0,0,.6)] rounded-md transition-all duration-500`}
                />
            </a>    
        </div>
    )
}