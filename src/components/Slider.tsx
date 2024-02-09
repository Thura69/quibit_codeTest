import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SlideNextButton from './theme/swiper/SlideNextButton';
import SlidePrevButton from './theme/swiper/SlidePrevButton';
import SlideCard from './theme/swiper/SlideCard';
import { swiper } from '../assets/data/swiper';
import { Icons } from '../libs/icons/icons';
import AutoControl from './theme/swiper/AutoControl';
import { icons } from 'lucide-react';
function Slider() {

    const [number, setNumber] = useState(1);

    return (
      
    <Swiper
      className='bg-[#03937B]'
      modules={[Autoplay,Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{
      delay: 5000,
      disableOnInteraction: false,
        }}
      onSlideChange={(e:any) => {
          setNumber(e.realIndex + 1);
      }}
      >
          
    {/* swiperSlideCards */}
    {
    swiper.map((e)=>(
        
    <SwiperSlide key={e.id}>
    <SlideCard Banner={e.Banner} BannerContant={e.BannerContant} BannerLarge={e.BannerLarge} />
    </SwiperSlide>
    
    ))
    }
   
  

   <div className='ml-[20px] lg:ml-[40px] xl:ml-[110px] absolute bottom-[100px]  z-50 bg-[#0000004d] text-white px-[10px] justify-around items-center h-[32px] w-[120px] rounded-full flex'>
    <AutoControl stop={Icons.stop} start={Icons.play}/>
    <SlidePrevButton icon={Icons.chevronLeft}/>
     <p className=' font-extrabold text-xs'>{number} <span className=' text-gray-400'> / 2</span></p>
    <SlideNextButton icon={Icons.chevronRight}/>
   </div>
   
   
    </Swiper>
  )
}

export default Slider