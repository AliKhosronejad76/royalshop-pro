export default function Row({children}){
    return(
        <div className="flex items-center justify-between px-6 my-8">
            {children}
        </div>
    )
}