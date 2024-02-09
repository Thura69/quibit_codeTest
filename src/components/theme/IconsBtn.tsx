import { LucideProps } from 'lucide-react'
import React from 'react'

function IconsBtn({icon:Icon,cln}:{icon:(props: LucideProps) => JSX.Element,cln?:string}) {
  return (
    <button className={`rounded-full duration-300 hover:bg-gray-200 p-2 ${cln}`}>
    <Icon stroke='#ffffff' fill='#ffffff' className='h-7 w-7 '/>
    </button>
  )
}

export default IconsBtn