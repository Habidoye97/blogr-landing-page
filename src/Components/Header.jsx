import React, {useState}from 'react'
import Logo from '../images/logo.svg'
import BackgroundPattern from '../images/bg-pattern-intro-desktop.svg'
import NavBar from './NavBar';
import {HiOutlineMenuAlt1} from 'react-icons/hi';
import {MdOutlineClose} from 'react-icons/md';


function Header() {

  const [navIsShowing, setNavIsShowing] = useState(false)

  return (
    <>
      <header className='bg-[#FF876F] relative overflow-hidden rounded-bl-[6rem]'>
        <img src={BackgroundPattern} alt="" className='absolute -top-[28rem] z-0' />
        <div className='w-11/12 m-auto z-10 text-black p-14 relative'>
          <div className='flex gap-8 justify-between'>
            <div className='flex items-center'>
              <img className='w-20' src={Logo} alt="logo"/>
            </div>
            <div className='flex-1'>
              <NavBar navIsShowing={navIsShowing}/> 
            </div>
            <div className='cursor-pointer mmd:hidden lg:hidden md:block sm:block' onClick={() => setNavIsShowing(!navIsShowing)}>
              {navIsShowing?  <MdOutlineClose className='text-white text-4xl'/> : <HiOutlineMenuAlt1 className='text-white text-4xl'/>}
            </div>
          </div>
          <div className='flex flex-col items-center justify-center text-white pt-16'>
            <h1 className='font-mono text-6xl mb-5 text-center'>A modern publishing platform</h1>
            <p className='text-xl text-center mb-5'>Grow your audience and build your online brand</p>
            <div className='flex gap-4'> 
              <button className='font-bold rounded-3xl px-4 py-1 bg-white text-[#FF876F]'>Start for Free</button>
              <button className='font-bold rounded-3xl px-4 py-1 bg-transparent border-2 border-white'>Learn More</button>
            </div>
          </div>
        </div>  
      </header>
    </>
  )
}

export default Header

console.log(BackgroundPattern, Logo)