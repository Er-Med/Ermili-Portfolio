import Image from "next/image";
import MainButton from "./components/MainButton";
import Link from "next/link";
import { personalInfo } from "./data/contact";
export default function Home() {
  return (
    <div className='bg-background relative'>
      {/* Main content with left margin to account for fixed sidebar */}
      <div className='bg-background p-4 pt-8 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:pl-20 pb-32 sm:pb-18 md:pb-28 xl:pb-24 xl:ml-[var(--left-sidebar-width)] min-h-screen grid items-center xl:items-start'>
        {/* Added lg:ml-12 for sidebar width */}
        <div className='flex gap-8 flex-col lg:flex-row items-center h-full bgd-red-50 flex-1'>
          <div className='bg-acdcent flex-1 '>
            <div className='flex items-center lg:items-start flex-col gap-4  lg:gap-5'>
              {/* <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold"> Ermili<br className="hidden lg:block" /> Mohamed </h1> */}
              <div className="flex flex-col  gap-3">
                {/* <h1 className=' text-center md:text-start  text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-[12rem] 4xl:text-[14rem]  font-bold leading-[1.3] relative font-orbitron'>
                  I&apos;m Ermili <br className="hidden lg:block" /> Mohamed
                </h1> */}
                <h1 className='text-center md:text-start font-bold leading-[1.3] relative font-orbitron'
                  style={{ fontSize: 'clamp(2rem, 5vw, 8rem)' }}>
                  I&apos;m Ermili <br className="hidden lg:block" /> Mohamed
                </h1>
                <h2 className='text-center lg:text-start font-semibold text-xl text-display font-display'>
                  <span className="hidden md:inline-block text-muted font-medium">
                    And I&apos;m a
                    {/* Creative */}
                  </span>
                  <span className='w-8 h-0.5 bg-dark me-2 group-hover:bg-primary transition-all duration-300 '></span>
                  <strong className='text-xl lg:text-2xl  py-0.5 rounded-sm rounded-tl-none text-primary'>
                    {personalInfo.title}
                  </strong>
                  {/* <strong className='text-2xl text-[#f0f0ff] bg-primary px-2 py-0.5 rounded-sm rounded-tl-none'>
                    {personalInfo.title}
                  </strong> */}
                </h2>
              </div>
              <p className='text-center  2xl:text-lg text-muted  sm:text-center  lg:text-left xl:max-w-[80%]'>
                {personalInfo.description}
              </p>

              <div className='flex items-center  mt-6'>
                <div className='flex items-center group'>
                  <MainButton label="Download My CV" href={personalInfo.resume} download={true} as="a" />
                  <span className='w-8 h-0.5 bg-dark me-2 group-hover:bg-primary transition-all duration-300 max-sm:hidden'></span>
                </div>
                <Link href={'/about'} className='font-display font-bold hover:text-primary transition-colors duration-300 hover:cursor-pointer text-lg max-sm:hidden'>
                  About me
                </Link>
              </div>
            </div>
          </div>
          {/* Image  */}
          <div className='bg-ambedr-200 flex-1 -order-1 lg:order-1 flex justify-center items-end  '>
            <Image
              src={"/ermedhero.png"}
              unoptimized
              quality={100}
              priority={true}
              alt={`${personalInfo.name} profile image`}
              width={300}
              height={200}
              // priority
              className="w-[200px] h-[300px] max-sm:h-[200px] max-sm:w-[200px] lg:w-[350px] lg:h-[400px] xl:h-[550px] xl:w-[550px] object-contain rounded-xl rounded-tl-none "
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
