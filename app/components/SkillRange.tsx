import Image from "next/image";

type SkillRangeProps = {
 number?: number;
 tool?: string;
 percent?: number; // 0-100
 iconSrc?: string;
};

const SkillRange = ({
 tool = "React",
 percent = 85,
 iconSrc = "/tools/react.svg",
}: SkillRangeProps) => {
 return (
  <div className="flex gap-4 w-full relative">
   <span className="absolute w-0.5 h-1/2 -left-2 top-1/2 -translate-y-1/2 bg-primary rounded-lg rounded-tl-none"></span>
   <Image
    src={iconSrc}
    width={50}
    height={50}
    alt={`${tool} logo`}
    className="bg-white p-2 rounded-lg rounded-tl-none w-12 h-12"
   />
   <div className="flex flex-col justify-between  w-full pb-0.5">
    <div className="flex items-center justify-between font-medium text-sm font-display uppercase">
     <span>{tool}</span>
     <span>{percent}%</span>
    </div>
    <div className=" relative w-full h-1 bg-gray-200">
     <div
      className="absolute left-0 bottom-0 h-full bg-dark"
      style={{ width: `${Math.max(0, Math.min(100, percent))}%` }}
     />
     <div
      className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-sm border"
      style={{ left: `calc(${Math.max(0, Math.min(100, percent))}% - 0.5rem)` }}
     />
    </div>
   </div>
  </div>
 );
}

export default SkillRange;