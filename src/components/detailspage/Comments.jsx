export default function Comments(){
    return(
        <div className="px-5 bg-white">
            <div className="px-2 w-full flex items-center justify-start mb-8">

                <div className="flex flex-col">
                    <h1 className="text-xl pb-3 bakh-bold">دیدگاه کاربران</h1>
                    <div className="h-[4px] w-[73px] bg-orange-400"></div>
                </div>
            </div>

            <form
             className="flex flex-col m-4 gap-4 w-[70%]"
            >
                <div className="flex flex-col gap-3">
                    <label className="text-gray-500" htmlFor="">دیدگاه شما</label>
                    <textarea  className="h-[240px] p-3 bakh-reg outline-none rounded-md border border-gray-300" name="" id=""></textarea>
                </div>
                <div className="flex flex-col gap-3">
                    <label className="text-gray-500"  htmlFor="">نام</label>
                    <input type="text" className="outline-none h-[50px] p-2 border border-gray-300 rounded-md"/>
                </div>
                <div className="flex flex-col gap-3">
                    <label className="text-gray-500"  htmlFor="">ایمیل</label>
                    <input type="text"  className="outline-none h-[50px] p-2 border border-gray-300 rounded-md"/>
                </div>
                
                <div className="flex gap-2 items-center justify-start my-4">
                    <input type="checkbox" />
                    <span className="bakh-medium">
                    ذخیره نام، ایمیل و وبسایت من در مرورگر برای زمانی که دوباره دیدگاهی می‌نویسم.
                    </span>
                </div>

                <div className="">
                    <button className="bg-sky-400 w-[220px] h-[50px] rounded-sm text-white" type="submit">
                        ثبت
                    </button>
                </div>
            </form>
        </div>
    );
}