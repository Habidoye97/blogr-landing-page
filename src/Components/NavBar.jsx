import React from 'react';
import {Links} from '../data.js';
import {RiArrowDropDownLine, RiArrowDropUpLine} from 'react-icons/ri'
import {useState} from 'react';


function NavBar({navIsShowing}) {

  const [newLinks, setNewLinks] = useState([...Links])
  

  function handleShowNavLink(id, action) {
    const newCheckLinks = [...newLinks]
    const link = newCheckLinks.find(a => a.id === id);
    action? link.show = true: link.show=false;
    setNewLinks(newCheckLinks)
    
  }

  function handleClick (id) {
    const newCheckLinks = [...newLinks];
    for(let i=0; i< newCheckLinks.length; i++) {
       newCheckLinks[i].show = false;
    }
    const link = newCheckLinks.find(a => a.id === id);
    link.show? link.show = false: link.show=true;
    setNewLinks(newCheckLinks)

  }
  
  return (
    <div className='flex items-center justify-between'>
      <nav className={`lg:flex lg:justify-between animate-slide_in_out flex-1 ${navIsShowing? 'fixed block top-28 bg-white rounded-2xl p-8':'hidden'}`}>
        <ul className='lg:flex lg:text-white lg:gap-10 '>
          {newLinks.map((link) => {
            return (
              <li key={link.id} className={`lg:flex justify-center items-center cursor-pointer relative transition-all duration-1000 mb-4 lg:mb-0`} onMouseOver={() => {handleShowNavLink(link.id, true)}} onMouseLeave={()=> {handleShowNavLink(link.id, false)}} onClick={() => {handleClick(link.id)}}>
                <div className='flex items-center justify-center'>
                  <span className='font-bold'>{link.name}</span>
                  <span >{link.show? <RiArrowDropUpLine className='text-3xl transition-all duration-1000'/> : <RiArrowDropDownLine className='text-3xl transition-all duration-1000'/>}</span>

                </div>
                <ul onMouseEnter={() => {handleShowNavLink(link.id, true)}} className={`${link.show? 'block': 'hidden'} md:static md:shadow-none vsm:static vsm:shadow-none sm:static sm:shadow-none lg:animate-slide_in_out lg:absolute rounded-xl cursor-pointer absolute bg-slate-100 top-8 -left-8 lg:bg-white lg:rounded-2xl lg:shadow-2xl  lg:w-40 lg:p-4`} >
                  {
                    link.categories.map((categories) => {
                      return (
                        <li key={categories.id} className='p-2 text-slate-500  hover:text-slate-900 hover:font-bold '> {categories.name}</li> 
                      )
                    })
                  }
                </ul>
              </li>
            )
          })}
        </ul>
        <div className='flex gap-4'>
          <button className='font-bold rounded-3xl border-2 p-1 w-28 border-transparent text-white mmd:text-white bg-[#FF6563] mmd:bg-transparent'>Login</button>
          <button className='font-bold rounded-3xl border-2 p-1 w-28 border-transparent text-white bg-[#FF6563] mmd:text-white'>Sign Up</button>
        </div>
      </nav>
    </div>
  )
}

export default NavBar

