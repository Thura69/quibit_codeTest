/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import { ArrowDownToLine, ChevronRight } from 'lucide-react'
import { mainCardProps } from '../../types/maincard';

const MainCard:React.FC<mainCardProps> = ({id,title,firstSubTit,secSubTit,firstDes,secDes,img,stock,unit,icon:Icon})=> {

  return (
    <div className={`w-full   drop-shadow-2xl relative mx-auto h-[280px]   rounded-lg ${ stock ? 'bg-[#EEFBF7]':'bg-white'} ${id===1?'  rounded-r-none rounded-b-r-none ':''} ${id ===2 ? ' border-l-[0.5px]  lg:border-t-0 lg:rounded-r-lg border-t-[0.5px]  drop-shadow-none  rounded-t-none rounded-b-none  lg:rounded-l-none':''} ${id ===3 && 'lg:ml-[30px] border-t-[0.5px] lg:border-t-0 lg:rounded-t-lg  rounded-t-none'}`}>
    <div className='flex px-7 justify-between  items-center  h-[60px]'>
        <p className='font-bold'>{title}</p>
        <ChevronRight color="#000000" />
    </div>
    {
      !Icon &&   <hr className='border-gray-300/40'/>
    }
   
    <div className='px-7  flex flex-col  justify-around lg:justify-around lg:py-0 py-[20px] h-[220px]'>
        <h3 className=' font-extrabold text-xl'>{firstSubTit}<br />
          
        {/* For Stock Card */}
        {
            stock ? <><span className=' text-5xl font-extrabold'>{secSubTit}</span><span className='text-sm'>{unit}</span></> :<span>{secSubTit}</span>
        }  
       
        </h3>

        {/* For Button Card */}
        {
          Icon ?
            <div className=' space-y-2 lg:space-y-0 gap-2 md:flex  justify-between items-center lg:flex-col lg:justify-start lg:items-start'>
            <button className='flex w-full lg:w-auto hover:bg-[rgb(216,216,216)] duration-300 bg-[#f2f2f2] justify-center items-center gap-2 text-[#222222] font-bold px-4 py-2  text-sm rounded-full'>{firstDes} <ArrowDownToLine className='w-4 h-4' color="#000000" /></button>
            <button className='flex w-full lg:w-auto hover:bg-[#d8d8d8] duration-300 bg-[#f2f2f2] justify-center items-center gap-2 text-[#222222] font-bold px-4 py-2  text-sm rounded-full'>{secDes} <Icon className="w-4 h-4"  /></button>
            </div>
            : <p className={`text-[#44444]  lg:block ${stock?'block':'hidden'}`}>{firstDes}<br />
           {secDes}</p>
        }

       
    </div>
    
    {/* For Stock Card */}
    {
        stock ? <img alt='cardImg' src={img} className='absolute  lg:bottom-[0px] z-[-1] w-[200px] bottom-[0px] right-[0px]' /> :
        <img alt='cardImg' src={img} className={`absolute lg:bottom-[20px]  z-[-1] bottom-[20px] right-[20px] ${Icon && 'w-[120px]  bottom-[45%]  right-[0px]'} ${id === 3 ? "w-[50px] bottom-[20px] right-[0px]" : ''}`} />
    }
   
    </div>
  )
}

export default MainCard