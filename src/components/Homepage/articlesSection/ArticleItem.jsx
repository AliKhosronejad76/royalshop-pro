export default function ArticleItem({ img , text }){
    return(
        <div className="min-h-[14rem] max-h-[14rem] flex flex-col justify-between border border-gray-300 rounded-2xl mx-1 md:max-4">
            <a href="#" className="h-max  flex flex-col">
                <img 
                className="object-cover rounded-tr-2xl rounded-tl-2xl h-[9rem]"
                src={img} 
                alt="" 
                />

                <p className="py-4 px-2 text-base text-wrap text-gray-700 text-center transiton-all duration-400 ease-in-out hover:text-sky-700">
                    {text}
                </p>
            </a>
        </div>
    )
}