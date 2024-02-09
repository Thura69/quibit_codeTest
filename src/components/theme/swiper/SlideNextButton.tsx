import React from 'react'
import { useSwiper } from 'swiper/react';
import { LucideProps } from 'lucide-react';
function SlideNextButton({icon:Icon}:{icon:(props: LucideProps) => JSX.Element,cln?:string}) {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slideNext()}>
      <Icon stroke='#ffff'/>
    </button>
  );
}

export default SlideNextButton