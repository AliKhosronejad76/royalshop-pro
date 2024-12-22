export default function ArticlesSection(){
    return(
        <div className="px-8 py-6 ">
            <div className="flex justify-between  my-6">
                <h2 className="text-xl">مقالات اخیر</h2>
                <a href="#" className="text-lg hover:text-red-600 transition-all duration-700   ">
                    مشاهده بیشتر
                </a>
            </div>

            <ArticleSlider/>

        </div>
    )
}