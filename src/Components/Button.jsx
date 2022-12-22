import React from 'react'

function Button({value, color}) {
  return (
    <button className={`font-bold rounded-3xl border-2 p-1 w-28 border-transparent text-yellow-900 mmd:text-white ${color? 'bg-[#FF6563]': ''}`}>
      {value}
    </button>
  )
}

export default Button