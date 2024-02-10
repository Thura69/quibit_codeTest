import { LucideProps } from 'lucide-react'
import React from 'react'

function IconsBtn({icon:Icon,isScrolled,cln}:{icon:(props: LucideProps) => JSX.Element,cln?:string,isScrolled:boolean}) {
  return (
    <button className={`rounded-full duration-300 hover:bg-gray-500/30 p-2 ${cln}`}>
    <Icon stroke={`${isScrolled ? '#000000':'#ffffff'}`} fill={`${isScrolled ? '#000000':'#ffffff'}`} className={`h-7 w-7  ${isScrolled ? 'text-black':'text-white'}`}/>
    </button>
  )
}

export default IconsBtn