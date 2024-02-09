import React, { useState } from 'react'
import { headerContent } from '../libs/contants/header';
import Layout from './theme/Layout';
import Logo from '../assets/logo.svg';
import { Icons } from '../libs/icons/icons';
import IconsBtn from './theme/IconsBtn';
import HeaderLink from './theme/HeaderLink';
import LogoW from '../assets/logo-w.svg';


function Header() {
    const [content] = useState(headerContent);


  return (
    <header className=' z-50 fixed top-0 bg-transparent left-0 right-0 h-[72px] lg:h-[84px]  flex items-center border-b-[0.5px] border-[#ffffff43]'>
        {/* container */}
        <Layout>
         <div className='w-full flex justify-between items-center'>
        {/* LogoStart */}
         <div>
          {/* <img  alt='logo' className='w-[110px]  h-[22px] lg:w-[140px] lg:h-[28px]' src={Logo} /> */}
          <img  alt='logo' className='w-[110px]  h-[22px] lg:w-[140px] lg:h-[28px]' src={LogoW} />
          </div>
        {/* LogoEnd */}
        {/* NavStart */}
        <nav className='hidden lg:block'>
         <ul className='flex '>
            <HeaderLink title={content.aboutUs}/>
            <HeaderLink title={content.corporate}/>
            <HeaderLink title={content.esgManagement}/>
            <HeaderLink title={content.ir}/>
            <HeaderLink title={content.prCenter}/>
         </ul>
        </nav>
        {/* NavEnd */}
        
        {/* IconsStart */}
          <div className='flex items-center gap-1 lg:gap-2'>
            <IconsBtn icon={Icons.add}/>
            <IconsBtn cln='hidden lg:block' icon={Icons.hanaNetwork}/>
            <IconsBtn cln='hidden lg:block' icon={Icons.global}/>
            <IconsBtn icon={Icons.menu}/>
          </div>
        {/* IconsEnd */}
        
        </div>  
        </Layout>
    </header>
  )
}

export default Header