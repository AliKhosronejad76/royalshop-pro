export default function SocialIcon({ icon , href }){
    return(
        <div className="text-3xl  text-gray-700 w-[44px] h-[44px] flex items-center justify-center ">
            <a href={href}>
              {icon}
            </a>
        </div>
    )
}