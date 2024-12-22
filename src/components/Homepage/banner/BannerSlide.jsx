export default function BannerSlide({img}){
    return(
        <div className="relative z-5">
            <a href="#">
              <img src={img} className="object-contain relative z-10"/>
            </a>
        </div>
    )
}