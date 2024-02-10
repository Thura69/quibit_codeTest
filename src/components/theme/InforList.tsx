import React from 'react'

function InforList({title,date}:{title:string,date:string}) {
  return (
      <li className='flex justify-between gap-3'><p className='text-[16px] truncate lg:text-lg font-bold'>{title}</p> <p className='text-[#222222ae]    font-medium text-sm'>{date}</p></li> 
  )
}

export default InforList