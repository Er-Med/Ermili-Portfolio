
import MainTitle from "../components/MainTitle";
import { contactInfo, contactFormConfig } from "../data/contact";
import { submitContactForm } from "./actions";


export default function ContactPage() {
  return (
    <main className='bg-background/5  xl:ml-[var(--left-sidebar-width)]'>
      {/* <section className='pb-[calc(var(--bottom-navbar-height)+2rem)]'> */}
      <section className='grid grid-cols-1 lg:grid-cols-2 h-full xl:h-screen'>
        {/* Left info panel */}
        <div className='bg-primary/10 text-dark  lg:pt-12 px-4 lg:px-8 flex flex-col gap-6 pb-[calc(var(--bottom-navbar-height)+1rem)] py-[var(--bottom-navbar-height)] max-lg:order-1'>
          <div className="flex flex-col gap-24">
            <div className='flex flex-col gap-2'>
              <span className='text-primary font-medium'>Talk About Ideas</span>
              <h2 className='font-display text-3xl sm:text-4xl lg:text-5xl font-bold'>Let's Connect</h2>
              <p className='text-muted mt-4 leading-8'>
                {contactFormConfig.description}
              </p>
            </div>


            {/* contact info */}
            <div className='flex flex-col gap-6 '>
              {contactInfo.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.id} className="w-fit border-b last:border-b-0 pb-6">
                    <p className='text-sm font-semibold mb-5'>{item.title}</p>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center border rounded-none border-s-[3px] border-b-[3px] rounded-tl-none border-dark p-2 w-10 h-10">
                        <IconComponent className=""
                          absoluteStrokeWidth={true} strokeWidth={1} />
                      </div>
                      <div className='flex flex-col gap-1'>
                        <p className='text-sm'>{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className='font-medium hover:text-primary transition-colors duration-300'
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className='font-medium'>{item.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right form panel */}
        <div className='bg-background px-4 lg:px-10 xl:px-14 xl:pr-14 pt-[var(--bottom-navbar-height)] pb-[calc(var(--bottom-navbar-height)+2rem)] '>
          <MainTitle title="Contact Me" />
          <form className='flex flex-col gap-8 lg:gap-10 mt-12 ' action={submitContactForm}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10'>
              {contactFormConfig.fields.slice(0, 2).map((field) => (
                <div key={field.name} className='flex flex-col gap-2'>
                  <label className='text-sm font-medium text-dark'>{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    required={field.required}
                    className='h-12 rounded-sm shadow-[_-2px_2px_0px_var(--muted)] border border-muted bg-background px-3 text-sm outline-none focus:border-primary focus:shadow-primary'
                  />
                </div>
              ))}
            </div>

            {contactFormConfig.fields.slice(2).map((field) => (
              <div key={field.name} className='flex flex-col gap-2'>
                <label className='text-sm font-medium text-dark'>{field.label}</label>
                {field.type === 'textarea' ? (
                  <textarea
                    name={field.name}
                    rows={field.rows}
                    placeholder={field.placeholder}
                    required={field.required}
                    className='rounded-sm shadow-[_-2px_2px_0px_var(--muted)] border border-muted bg-background p-3 text-sm outline-none focus:border-primary focus:shadow-primary resize-y'
                  />
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    required={field.required}
                    className='h-12 rounded-sm shadow-[_-2px_2px_0px_var(--muted)] border border-muted bg-background px-3 text-sm outline-none focus:border-primary focus:shadow-primary'
                  />
                )}
              </div>
            ))}

            <div className='pt-2 mt-4 lg:mt-6'>
              <button
                type='submit'
                className=" rounded-tr-[10px] rounded-bl-[10px] px-6 py-3 bg-primary text-white shadow-[-4px_4px_0px_var(--foreground)]  font-display font-bold hover:cursor-pointer   transition-all duration-200 hover:shadow-[_-2px_2px_0px_var(--foreground)]"
              >
                {contactFormConfig.submitButton.text}
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

