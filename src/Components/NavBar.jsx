import React from 'react';
import {Links} from '../data.js';
import {RiArrowDropDownLine, RiArrowDropUpLine} from 'react-icons/ri'
import {useState} from 'react';

import Button from './Button.jsx';



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
      <nav className={`justify-between    ${navIsShowing? 'fixed top-28 right-0 w-1/2 animate-roll_in_blurred_right  bg-white flex-col gap-8 p-8 rounded-xl justify-center items-center md:flex vsm:flex sm:flex': 'md:hidden max:animate-roll_out_blurred_right flex-1 flex lg:flex xl:flex 2xl:flex vsm:hidden sm:hidden mmd:flex'}`} >
        <ul className={`flex gap-10 text-white ${navIsShowing? 'flex-col justify-center text-[#333333]':''}`}>
          {newLinks.map((link) => {
            return (
              <li key={link.id} className="flex justify-center items-center cursor-pointer relative transition-all duration-1000" onMouseOver={() => {handleShowNavLink(link.id, true)}} onMouseLeave={()=> {handleShowNavLink(link.id, false)}} onClick={() => {handleClick(link.id)}}>
                <span className='font-bold'>{link.name}</span>
                <span>{link.show? <RiArrowDropUpLine className='text-white text-3xl transition-all duration-1000'/> : <RiArrowDropDownLine className='text-3xl transition-all duration-1000' />}</span>
                <ul onMouseEnter={() => {handleShowNavLink(link.id, true)}} className={`${link.show? 'block': 'hidden'}  ${navIsShowing? 'static shadow-none':''}animate-slide_in_out  transition-all cursor-pointer absolute top-8 -left-8 bg-white rounded-2xl shadow-2xl w-40  p-4 `} >
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
        <div>
          <Button value='Login'/>
          <Button value='Sign Up' color={true}/>
        </div>

      </nav>
    
    </div>
  )
}

export default NavBar

