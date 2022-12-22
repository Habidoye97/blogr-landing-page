import React from 'react';
import Logo from '../images/logo.svg';
import {Links} from '../data.js';

function Footer() {
  return (
    <>
      <footer className='bg-[#333438]'>
        <div className='container  mx-auto px-20 py-20 '>
          <div className='flex justify-center mmd:justify-start flex-wrap gap-32'>
            <div>
              <img className='w-20' src={Logo} alt="logo"/>
            </div>
            <div>
              <div className='flex flex-wrap gap-24 mmd:gap-32 text-white text-sm text-semibold'>
                {
                  Links.map((link) => {
                    return (
                      <ul key={link.id}>
                        <li className='font-bold pb-12'>{link.name}</li>
                        {link.categories.map((category) => {
                          return (
                            <li className='py-2' key={category.id}>{category.name}</li>
                          )
                        })}
                      </ul>
                    )
                  })
                }
              </div>
            </div>
            
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
