export default function Row({children}){
    return(
        <div className="flex flex-col md:flex-row gap-5 items-center justify-between px-6 my-8">
            {children}
        </div>
    )
}