export default function TabButton({ index , name , sliderIndex , setSliderIndex }){
   
    return(
        <button 
          className={`mx-4 text-bold pb-1.5`}
          onClick={()=>setSliderIndex(index)}
        >
            <span className="w-full text-sm text-nowrap">{name}</span>
        </button>
    )
}