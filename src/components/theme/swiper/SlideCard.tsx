import React from 'react'
import { slideCardProps } from '../../../types/slidecard'

const SlideCard:React.FC<slideCardProps> = ({Banner,BannerContant,BannerLarge})=> {
  return (
         <div className='relative h-[590px] lg:h-[640px]'>
        {/* forSmall */}
        <picture className='lg:hidden h-full'>
              <source srcSet={Banner} media='(max-width:1024px)'></source>
              <img src={Banner} alt='banner' className=' object-cover block w-full h-full' />
        </picture>
        {/* forSmall */}
        {/* forLarge */}
        <picture className='hidden h-full lg:block'>
              <source srcSet={BannerLarge} media='(max-width:1024px)'></source>
              <img src={BannerLarge} alt='banner' className=' object-cover block w-full h-full' />
        </picture>
        {/* forLarge */}
        
              <img className='absolute ml-[20px] lg:ml-[40px] xl:ml-[110px] lg:w-[612px] w-[315px] lg:h-[300px] h-[155px] top-[95px] xl:top-[120px] left-0' src={BannerContant} alt='banner_contant'/>
        </div>
  )
}

export default SlideCard