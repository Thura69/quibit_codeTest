import React from 'react'
import MainCard from './theme/MainCard'
import Container from './theme/Container'
import { mainButtonCardData, mainCardData } from '../assets/data/mainCard'


function Main() {
  return (
  <div className='bg-[#F2FAF9] pb-[100px]'>
     <Container>
     <div className=' space-y-[36px] relative z-[100] translate-y-[-60px]'>
        <div className=' grid justify-between items-center gap-y-9 lg:gap-y-0 gap-x-9  grid-cols-1 lg:grid-cols-3'>
        {/* first 3 no button cards */}
        {
                      mainCardData.map((e) => <MainCard key={e.id} title={e.title} firstSubTit={e.firstSubTit} secSubTit={e.secSubTit} firstDes={e.firstDes} secDes={e.secDes} img={e.img} stock={e.stock} unit={e.unit} />)
        }
    </div>
            {/* 3Button Cards */}
    <div className=' flex  flex-col lg:flex-row   drop-shadow-2xl '>
        <div className='flex flex-col lg:flex-row w-full lg:w-[66%]'>
           <MainCard key={mainButtonCardData[0].id} id={mainButtonCardData[0].id} title={mainButtonCardData[0].title} firstSubTit={mainButtonCardData[0].firstSubTit} secSubTit={mainButtonCardData[0].secSubTit} firstDes={mainButtonCardData[0].firstDes} secDes={mainButtonCardData[0].secDes} img={mainButtonCardData[0].img} icon={mainButtonCardData[0].icon} /> 
           <MainCard key={mainButtonCardData[1].id} id={mainButtonCardData[1].id} title={mainButtonCardData[1].title} firstSubTit={mainButtonCardData[1].firstSubTit} secSubTit={mainButtonCardData[1].secSubTit} firstDes={mainButtonCardData[1].firstDes} secDes={mainButtonCardData[1].secDes} img={mainButtonCardData[1].img} icon={mainButtonCardData[1].icon} /> 
        </div>
        <div className='w-full lg:w-[32%]'>
             <MainCard key={mainButtonCardData[2].id} id={mainButtonCardData[2].id} title={mainButtonCardData[2].title} firstSubTit={mainButtonCardData[2].firstSubTit} secSubTit={mainButtonCardData[2].secSubTit} firstDes={mainButtonCardData[2].firstDes} secDes={mainButtonCardData[2].secDes} img={mainButtonCardData[2].img} icon={mainButtonCardData[2].icon} /> 
        </div>
         {/* {
                      mainButtonCardData.map((e) => <MainCard key={e.id} id={e.id} title={e.title} firstSubTit={e.firstSubTit} secSubTit={e.secSubTit} firstDes={e.firstDes} secDes={e.secDes} img={e.img} icon={e.icon} />)
        } */}
    </div>
     </div>
   </Container>  
  </div>
  )
}

export default Main