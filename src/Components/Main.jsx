import React from 'react';
import illustration from '../images/illustration-editor-desktop.svg';

function Main() {
  return (
    <>
      <section className='relative overflow-hidden box-border mb-20'>
        <div className='container mx-auto box-border py-32 text-[#3F4164]'>
          <div className='bg-transparent  box-border'>
            <h1 className='text-center text-3xl bg-transparent'>Designed for the future</h1>
          </div>
          <div className='flex flex-col-reverse mmd:flex-row border-box'>
            <div className='flex-1 border-box'>
              <div className='px-24 py-20'>
                <h2 className='text-xl pb-4 font-medium'>Introducing an extensible editor</h2>
                <p>Blogr features are extremely intuitive interface which let you to focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy way to add functionality or change the look of a blog </p>
              </div>
              <div className='px-24'>
                <h2 className='text-xl pb-4 font-medium'>Robust content management</h2>
                <p >Flexible content management enables users to easily move through posts, increase the usability of your blog by adding customized categories, sections, format, or flow. with this functionality, you're in full control. </p>
              </div>
            </div>
            <div className='flex-1 border-box'>
              <div className=''>
                <img className='mmd:absolute mmd:top-20 mmd:h-[75%] lg:h-[90%] mmd:-right-52 z-20' src={illustration} alt="" />
              </div>
              
            </div>
          </div>
        </div>
      </section>
      <section className='bg-[#3F4164]'>
      
        this is me
      </section>
    </>
  )
}

export default Main
