import React, { useEffect, useState } from 'react'
import { headerContent } from '../libs/contants/header';
import Layout from './theme/Layout';
import { Icons } from '../libs/icons/icons';
import IconsBtn from './theme/IconsBtn';
import HeaderLink from './theme/HeaderLink';
import LogoW from '../assets/logo-w.svg';
import Logo from '../assets/logo.svg';


function Header() {

  const [content] = useState(headerContent);
  
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      if (scrollY > 5) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <header className={`z-[1000] fixed top-0 bg-transparent left-0 right-0 h-[72px] lg:h-[84px]  flex items-center border-b-[0.5px] drop-shadow-xl text-white  border-[#ffffff43] ${isScrolled && 'bg-white text-black'}`}>
        {/* container */}
        <Layout>
         <div className='w-full flex justify-between items-center'>
        {/* LogoStart */}
         <div>
          {
            isScrolled ?   <img  alt='logo' className='w-[110px]  h-[22px] lg:w-[140px] lg:h-[28px]' src={Logo} /> :  <img  alt='logo' className='w-[110px]  h-[22px] lg:w-[140px] lg:h-[28px]' src={LogoW} />
          }
         
        
          </div>
        {/* LogoEnd */}
        {/* NavStart */}
        <nav className='hidden lg:block'>
         <ul className={`flex  ${isScrolled ? 'text-black':'text-white'}`}>
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
            <IconsBtn isScrolled={isScrolled}  icon={Icons.add}/>
            <IconsBtn isScrolled={isScrolled} cln='hidden lg:block' icon={Icons.hanaNetwork}/>
            <IconsBtn isScrolled={isScrolled} cln='hidden lg:block' icon={Icons.global}/>
            <IconsBtn isScrolled={isScrolled} icon={Icons.menu}/>
          </div>
        {/* IconsEnd */}
        
        </div>  
        </Layout>
    </header>
  )
}

export default Header