import React from 'react'
// text-[#444444]
function HeaderLink({title}:{title:string}) {
  return (
     <li><button className=' outline-none duration-300 hover:text-[#009178] px-[20px] xl:px-[30px] font-extrabold text-lg'>{title}</button></li>
  )
}

export default HeaderLink