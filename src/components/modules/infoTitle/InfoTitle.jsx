export default function InfoTitle({title}){
    return(
        <div className="flex items-center justify-start gap-4 ">
           <div className="w-3 h-3 bg-amber-500 rotate-45"></div>
           <h1>{title}</h1>
        </div>
    );
}