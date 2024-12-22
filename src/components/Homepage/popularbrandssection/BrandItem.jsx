export default function BrandItem({ logo , name }){
    return(
        <div className="bg-white flex flex-col justify-between items-center  min-h-max max-h-max  rounded-xl mx-2 border-2 border-[#cecece]">
            <img src={logo} alt={name} className="w-full max-h-[75px] min-h-[75px] p-2 object-contain rounded-xl"/>
            <p className="text-center text-sm">{name}</p>
        </div>
    )
}