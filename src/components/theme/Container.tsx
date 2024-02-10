import React, { ReactNode } from 'react'

function Container({children}:{children:ReactNode}) {
  return (
      <div className='px-[20px] relative lg:px-[20px] xl:px-0  z-[60]  max-w-[1200px]  mx-auto'>{children}</div>
  )
}

export default Container