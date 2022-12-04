import React from 'react'
import Logo from '../images/logo.svg'
import BackgroundPattern from '../images/bg-pattern-intro-desktop.svg'
import NavBar from './NavBar'

function Header() {
  return (
    <>
      <header className='bg-[#FF876F] h-96 relative overflow-hidden'>
        <img src={BackgroundPattern} alt="" className='absolute -top-[28rem] z-0' />
        <div className='w-11/12 m-auto z-10 text-black p-14 relative'>
          <div className='flex gap-8'>
            <div>
              <img className='w-20' src={Logo} alt="logo"/>
            </div>
            <div>
              <NavBar/> 
            </div>
          </div>
          <div>
            
          </div>
        </div>  
      </header>
    </>
  )
}

export default Header

console.log(BackgroundPattern, Logo)