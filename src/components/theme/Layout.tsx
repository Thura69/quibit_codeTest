import React, { ReactNode } from 'react'

function Layout({children}:{children:ReactNode}) {
  return (
      <div className='px-[20px] lg:px-[40px] w-full  mx-auto'>{
          children
      }</div>
  )
}

export default Layout