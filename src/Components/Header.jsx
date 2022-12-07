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
      <header className='bg-[#FF876F] h-96 relative overflow-hidden'>
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
          
        </div>  
      </header>
    </>
  )
}

export default Header

console.log(BackgroundPattern, Logo)