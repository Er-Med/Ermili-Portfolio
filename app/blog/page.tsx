
const page = () => {
  return (
    <div className='xl:ml-[var(--left-sidebar-width)]'>
      {/* <section className='grid grid-cols-1 lg:grid-cols-[40%_1fr] min-h-screen '> */}
      {/* LEFT SECTION  */}
      {/* <div className='lg:sticky top-0 bg-primary/10 text-dark  pt-12 px-4 lg:px-8 flex flex-col gap-6 lg:h-screen  pb-[calc(var(--bottom-navbar-height))] lg:pb-[calc(var(--bottom-navbar-height)+5rem)]'>
          <div className="flex flex-col justify-between gap-6 h-full">
            <div className='flex flex-col gap-2'>
              <span className='text-primary font-medium'>Talk About Ideas</span>
              <h2 className='font-display text-3xl sm:text-4xl lg:text-5xl font-bold'>Contact Me</h2>
              <p className='text-muted mt-4 leading-8'>
                UI/UX services encompass a range of offerings aimed at enhancing user
                experiences and interfaces across digital products. Here are some key
                services typically provided by UI/UX designers
              </p>
            </div>
            <div>
              <MainButton label="Any Question" />
            </div>
          </div>
        </div> */}
      {/* RIGHT section*/}
      {/* <div className="px-4  py-[calc(var(--bottom-navbar-height))] pb-[calc(var(--bottom-navbar-height)+2rem)] lg:px-6 lg:pr-8 ">
    
          <div className="space-y-8">
            {blogs.map((blog, index) => (
              <div key={blog.id} className={`flex gap-4 xl:items-center flex-col md:flex-row ${index < blogs.length - 1 ? 'pb-10 border-b border-muted/20' : ''}`}>
                <div className="md:shrink-0">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={300}
                    height={300}
                    className="object-cover rounded-xl min-w-[200px] h-auto w-full  max-h-[300px]" />
                </div>

                <div className='flex flex-col gap-2'>
                  <span className='text-primary font-medium'>By {blog.author} • {blog.category}</span>
                  <h2 className='font-display text-xl font-bold'>{blog.title}</h2>
                  <p className='text-base lg:text-sm text-muted mt-2 leading-7 max-w-[90%]'>
                    {blog.excerpt}
                  </p>
                  <Link href={`/blog/${blog.slug}`} className="flex gap-1 items-center font-medium text-primary underline hover:underline-offset-1 underline-offset-2 transition-all duration-75">
                    View Details <MoveRight stroke="1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-20">
            <MainButton label="Load More" />
          </div>
        </div> */}

      {/* </section> */}
      <p className=" w-full h-full flex justify-center items-center text-xl lg:text-3xl mx-auto text-display">Coming soon</p>
    </div>
  );
}

export default page;