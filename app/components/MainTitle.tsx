interface MainTitleProps {
 title: string,
 className?: string,
}
const MainTitle = ({ title, className }: MainTitleProps) => {
 return (
  <h3 className={`text-3xl md:text-4xl font-bold relative w-fit after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-4/5 after:h-[3px] after:bg-dark mb-8 ${className}`}>
   {title}
  </h3>
 );
}

export default MainTitle;