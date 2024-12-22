export default function ZoomBanner({width , imgAlt , img }){
    return(
        <div 
         style={{width:width}}
         className="rounded-2xl shadow-2xl overflow-hidden"
        >
            <a href="#">
              <img 
              src={img} 
              alt={imgAlt} 
              className="rounded-2xl  w-full h-full transition-all duration-1000 ease-in-out hover:scale-110"/>
            </a>
        </div>
    )
}