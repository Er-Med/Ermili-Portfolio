import Image from "next/image";
import LeftSideBar from "./components/LeftSideBar";
import Link from "next/link";
import FooterNavBar from "./components/FooterNavBar";
export default function Home() {
  return (
    <div className='bg-background relative'>
      {/* Main content with left margin to account for fixed sidebar */}
      <div className='bg-background p-4 pt-8 sm:p-6 md:p-8 lg:p-10 xl:p-12 pb-32 sm:pb-18 md:pb-28 xl:pb-24 xl:ml-[var(--left-sidebar-width)] min-h-screen grid items-center xl:items-start'>
        {/* Added lg:ml-12 for sidebar width */}
        <div className='flex gap-8 flex-col lg:flex-row items-center h-full bgd-red-50 flex-1'>
          <div className='bg-acdcent flex-1 '>
            <div className='flex items-center lg:items-start flex-col gap-4  lg:gap-5'>
              {/* <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold"> Ermili<br className="hidden lg:block" /> Mohamed </h1> */}
              <div className="flex flex-col  gap-3">
                <h1 className=' text-center md:text-start font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-6xl font-bold leading-[1.3]'>
                  Hello!👋🏻<br />
                  I’m Mohamed
                  {/* <br className='hidden lg:block' /> Mohamed{" "} */}
                </h1>
                <h2 className='text-center md:text-start font-semibold text-xl text-display font-display'>
                  <span className="hidden md:inline-block">And I’m a, </span>{" "}
                  <strong className='text-2xl text-white bg-primary px-2 py-0.5 rounded-sm rounded-tl-none'>
                    Front End Developer
                  </strong>
                </h2>
              </div>
              <p className='text-center  lg:text-lg text-muted  sm:text-center  lg:text-left font-display'>
                {/* From Morocco, Casablanca. I have rich experience in front-end{" "}
                <br className='hidden sm:block' />
                with pixel perfect development, also good at UI/UX design. */}
                I contribute to the web by building <strong>fast</strong>, <strong>accessible</strong>,<br className="hidden lg:block" /> and <strong>pretty</strong> web application
              </p>

              <div className='flex items-center  mt-6'>
                <div className='flex items-center group'>
                  <button className='px-8 py-4 border drop-shadow-[-4px_4px_0px_black] bg-background rounded-br-md font-display font-bold hover:cursor-pointer hover:text-primary hover:drop-shadow-[-4px_4px_0px_#5249e5] transition-all duration-300'>
                    Download My CV
                  </button>
                  <span className='w-8 h-0.5 bg-black me-2 group-hover:bg-primary transition-all duration-300'></span>
                </div>
                <button className='font-display font-bold hover:text-primary transition-colors duration-300 hover:cursor-pointer'>
                  About me
                </button>
              </div>
            </div>
          </div>
          {/* Image  */}
          <div className='bg-ambedr-200 flex-1 -order-1 lg:order-1 flex justify-center items-end  '>
            <Image
              src='/imgme.jpeg'
              alt='profile-image'
              width={400}
              height={400}
              className='object-cover object-top-left lg:object-contain max-h-[200px]  w-[200px] lg:w-[440px] lg:max-h-[440px] xl:max-h-[500px]  lg:drop-shadow-[-8px_8px_0px_black] rounded-4xl rounded-tl-none lg:bg-primary'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <LeftSideBar />
      <main className="bg-red-200 px-32 h-screen">
        <div className="border-2 w-full h-full"></div>
      </main>
      <ButtomNav /> */
}
