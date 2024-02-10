import React from 'react'
import Container from './theme/Container'
import InformationHeader from './theme/InformationHeader'
import InforList from './theme/InforList'
import InforBlock from './theme/InforBlock'

function Information() {
  return (
    <div className='pb-[150px] sm:pb-[110px]'>
        <Container>
          <div className='flex flex-col lg:flex-row gap-[30px] justify-between'>
            <div className='lg:w-[50%]  lg:pr-7'>
           {/* firstSection      */}
            <InformationHeader title='기업공시'/>
            <ul className=' space-y-2 h-[120px] '>
              <InforList title='주식등의대량보유상황보고서(약식)' date='2024.02.06'/> 
              <InforList title='주식소각결정' date='2024.01.31'/> 
              <InforList title='현금ㆍ현물배당결정 (자회사의 주요경영사항)' date='2024.01.31'/> 
            </ul>
            </div>
            <hr/>
            {/* secondSection */}
            <div  className='  lg:w-[50%]'>
            <InformationHeader title='경영공시'/>
            <ul className='h-[120px]  space-y-2 lg:space-y-0 flex lg:flex-row flex-col justify-between  '>
                
            <InforBlock title='2023년 3분기 하나금융지주회사 현황'/>
            <InforBlock title='2023년 3분기 하나금융지주회사 현황'/>
            <InforBlock title='2023년 3분기 하나금융지주회사 현황'/>
            
            {/* <li className='border-l-[0.5px] w-[33%] flex flex-col justify-between items-start px-4 '>
            <h3 className='text-[16px]  font-bold'>2023년 3분기<br/>
            하나금융지주회사 현황</h3>
            <p className=' flex items-center font-bold text-sm'>PDF<ArrowDownToLine className='w-4 h-4' color="#000000" /></p>
            </li>
            <li className='border-l-[0.5px] w-[33%] flex flex-col justify-between items-start px-4 '>
            <h3 className='text-[16px]  font-bold'>2023년 3분기<br/>
            하나금융지주회사 현황</h3>
            <p className=' flex items-center font-bold text-sm'>PDF<ArrowDownToLine className='w-4 h-4' color="#000000" /></p>
            </li> */}

                
            </ul>
            </div>
          </div>
        </Container>
    </div>
  )
}

export default Information