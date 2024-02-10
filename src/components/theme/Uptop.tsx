import React, { useEffect, useState } from 'react'
import { MoveUp } from 'lucide-react';

export const UpTop = () => {
const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      if (scrollY > 100) {
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
    
 const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional smooth scrolling behavior
    });
  };
    if (isScrolled) return <button onClick={scrollToTop} className={` ${isScrolled ? "translate-y-0 opacity-1":'translate-y-[-100px] opacity-0'} hover:scale-105 h-[56px] transition-all duration-500 w-[56px] rounded-full  fixed  z-[100]  bottom-[40px] lg:bottom-[70px] right-[10px] lg:right-[30px] flex items-center justify-center drop-shadow-2xl bg-[#cac9c9e0]`}>
    <MoveUp className='w-4 h-4' color="black"  />
    </button>;

    return <></>
}
