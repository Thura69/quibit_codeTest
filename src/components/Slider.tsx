import React from 'react'
import Banner from '../assets/20231207060020423.png';
import BannerContant from '../assets/20231207060056825.png'

function Slider() {
  return (
    <div className='h-[590px]  w-full'>
        <div className='relative'>
        <picture >
              <source srcSet={Banner} media='(max-width:1024px)'></source>
              <img src={Banner} alt='banner' className=' object-cover block w-full h-full' />
        </picture>
              <img className='absolute w-[315px] h-[155px] top-0 left-0' src={BannerContant} alt='banner_contant'/>
        </div>
    </div>
  )
}

export default Slider