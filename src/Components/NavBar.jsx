import React from 'react';
import {Links} from '../data.js';
import {RiArrowDropDownLine, RiArrowDropUpLine} from 'react-icons/ri'
import {useState} from 'react';
import { useEffect } from 'react';
import Button from './Button.jsx';



function NavBar() {

  const [newLinks, setNewLinks] = useState([...Links])

  function handleShowNavLink(id, action) {
    const newCheckLinks = [...newLinks]
    const link = newCheckLinks.find(a => a.id === id);
    action? link.show = true: link.show=false;
    setNewLinks(newCheckLinks)
    
  }

  useEffect(() => {
   

  }, )
  
  return (
    <div className='flex items-center justify-between'>
      <ul className='flex gap-10'>
        {newLinks.map((link) => {
          return (
            <li key={link.id} className="flex items-center cursor-pointer relative" onMouseOver={() => {handleShowNavLink(link.id, true)}} onMouseLeave={()=> {handleShowNavLink(link.id, false)}}>
              <span className='text-white font-bold'>{link.name}</span>
              <span>{link.show? <RiArrowDropUpLine className='text-white text-3xl'/> : <RiArrowDropDownLine className='text-white text-3xl' />}</span>
              <ul className={`${link.show? 'block': 'hidden'} cursor-pointer absolute top-10 -left-8 bg-white rounded-2xl shadow-2xl w-40  p-4 `} >
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
    </div>
  )
}

export default NavBar

