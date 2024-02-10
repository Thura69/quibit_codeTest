import { ArrowDownToLine } from 'lucide-react'
import React from 'react'

function InforBlock({title}:{title:string}) {
  return (
   <li className=' border lg:border-l-[1px] lg:border-t-0 lg:border-b-0 lg:border-r-0 lg:rounded-none p-3 h-full lg:px-3 lg:py-0 rounded-md items-center lg:w-[33%] flex lg:flex-col justify-between lg:items-start px-4 '>
          <h3 className='text-[16px] hidden lg:block font-bold'>2023년 3분기<br/>
              하나금융지주회사 현황</h3>
          <h3 className='text-[16px] lg:hidden font-bold'>{title}</h3>
            
          <p className=' flex items-center gap-3 font-bold text-sm cursor-pointer'><span className='hidden lg:block'>PDF</span><ArrowDownToLine  className='w-4 h-4 font-extrabold' color="#000000" /></p>
            </li>
  )
}

export default InforBlock