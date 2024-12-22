export default function ArticleItem({ img , text }){
    return(
        <div className="border rounded-2xl mx-4">
            <a href="#" className="flex flex-col">
                <img 
                className="object-cover rounded-tr-2xl rounded-tl-2xl"
                src={img} 
                alt="" 
                />

                <p className="py-4 text-gray-700 text-center transiton-all duration-400 ease-in-out hover:text-sky=700">
                    {text}
                </p>
            </a>
        </div>
    )
}