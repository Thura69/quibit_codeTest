import { ArrowRight } from 'lucide-react'
import React from 'react'

function InformationHeader({title}:{title:string}) {
  return (
   <div className='flex justify-between mb-[35px]  text-black'>
          <h3 className='text-lg lg:text-3xl font-extrabold'>{title}</h3> 
           <p className='flex items-center justify-center cursor-pointer gap-2 font-bold text-sm '><span className='hidden font-bold lg:block'>More</span> <ArrowRight className='w-5 h-5'/> </p>
  </div> 
  )
}

export default InformationHeader