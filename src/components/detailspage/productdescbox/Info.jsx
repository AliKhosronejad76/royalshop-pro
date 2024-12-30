import InfoTitle from "../../modules/infoTitle/InfoTitle";
import InfoItem from "../../modules/infoItem/InfoItem";

export default function Info({infoRef}){
    return(
        <div ref={infoRef} className="bg-white p-7 mt-9 mb-20">
            <div className="flex flex-col gap-2 py-4 px-5">
                <h1 className="text-xl">بررسی تخصصی</h1>
                <h4 className="text-sm text-gray-400">Albert Riley Men Watch</h4>
                <div className="bg-amber-500 h-[2px] w-[100px]"></div>
            </div>

            <div className="my-8 px-5">
                <div className="mb-4">
                    <InfoTitle title={"مشخصات کلی"}/>
                </div>
                <div className="mb-2">
                  <InfoItem 
                    title="وزن"
                    desc="53 گرم"
                  />
                </div>
                <div className="mb-2">
                    <InfoItem 
                      title="جنس بدنه"
                      desc="فلز"
                    />
                </div>
                <div className="mb-2">
                    <InfoItem 
                      title="جنس شیشه"
                      desc="گوریلا گلس DX+"
                    />
                </div>
                <div className="mb-2">
                    <InfoItem
                      title="فرم صفحه"
                      desc="گرد"
                    />
                </div>
                <div className="mb-2">
                    <InfoItem
                      title="نوع قفل بند"
                      desc="سگکی ساده"
                    />
                </div>
            </div>
        </div>
    );
}