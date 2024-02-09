import { LucideProps } from 'lucide-react';
import React from 'react'
import { useSwiper } from 'swiper/react';

function SlidePrevButton({icon:Icon}:{icon:(props: LucideProps) => JSX.Element,cln?:string}) {
 const swiper = useSwiper();

  return (
    <button onClick={() => {
      swiper.slidePrev()
    }}>
      <Icon stroke='#ffff'/>
    </button>
  );
}

export default SlidePrevButton