import React from 'react';
import illustration from '../images/illustration-editor-desktop.svg';
import phone from '../images/illustration-phones.svg'
import patternCircle from '../images/bg-pattern-circles.svg'
import illustrationLaptop from '../images/illustration-laptop-desktop.svg'

function Main() {
  return (
    <>
      <section className='relative overflow-hidden box-border my-20'>
        <div className='container mx-auto box-border mmd:py-32 text-[#3F4164]'>
          <div className='bg-transparent  box-border'>
            <h1 className='text-center text-3xl bg-transparent'>Designed for the future</h1>
          </div>
          <div className='flex flex-col-reverse mmd:flex-row border-box'>
            <div className='flex-1 text-center mmd:text-left border-box'>
              <div className='px-16  mmd:px-24 py-20'>
                <h2 className='text-xl pb-4 font-medium'>Introducing an extensible editor</h2>
                <p>Blogr features are extremely intuitive interface which let you to focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy way to add functionality or change the look of a blog </p>
              </div>
              <div className='px-16 mmd:px-24'>
                <h2 className='text-xl pb-4 font-medium'>Robust content management</h2>
                <p >Flexible content management enables users to easily move through posts, increase the usability of your blog by adding customized categories, sections, format, or flow. with this functionality, you're in full control. </p>
              </div>
            </div>
            <div className='flex-1 border-box'>
              <div className='mt-8'>
                <img className='mmd:absolute mmd:top-20 mmd:h-[75%] lg:h-[90%] mmd:-right-52 z-20' src={illustration} alt="" />
              </div>
              
            </div>
          </div>
        </div>
      </section>
      <section className='bg-[#3A3B59] my-52 mmd:mt-4 relative rounded-tr-[8rem] rounded-bl-[8rem]'>
        <img className='absolute z-10 -top-[10rem] mmd:-top-[4.7rem] mmd:left-12' src={phone} alt="phone" />
        <div className='mmd:flex mmd:gap-12 relative overflow-hidden'>
          <div className='flex-1'>
            <img className='relative mmd:absolute -top-[10rem] -left-[5rem] mmd:-top-[35rem] mmd:-left-[13rem]' src={patternCircle} alt="patternCircle" />
          </div>
          <div className='flex-1 relative text-center  mmd:px-28 py-32 text-white'>
            <div className='absolute mmd:relative -top-[10rem] mmd:top-0 px-20'>
              <h1 className='text-2xl font-medium pb-8'>State of Art Infrastructure</h1>
              <p >With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive</p>
            </div>
          </div>
        </div>
      </section>
      <section className='relative my-52 box-border'>
        <div className='container  mx-auto'>
          <div className='flex flex-col mmd:flex-row border-box'>
              <div className='flex-1 border-box'>
                <div className=''>
                  <img className='mmd:absolute mmd:-top-20 mmd:-left-[17rem] z-20' src={illustrationLaptop} alt="" />
                </div>
              </div>
              <div className='flex-1 text-center mmd:text-left border-box'>
                <div className='px-16  mmd:px-24 py-20'>
                  <h2 className='text-xl pb-4 font-medium'>Free, Open, Simple </h2>
                  <p>Blogr features are extremely intuitive interface which let you to focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy way to add functionality or change the look of a blog </p>
                </div>
                <div className='px-16 mmd:px-24'>
                  <h2 className='text-xl pb-4 font-medium'>Powerful Tooling</h2>
                  <p >Flexible content management enables users to easily move through posts, increase the usability of your blog by adding customized categories, sections, format, or flow. with this functionality, you're in full control. </p>
                </div>
              </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Main
