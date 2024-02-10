import {  ArrowRight, ChevronDown, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'
import React from 'react'
import Container from './theme/Container'
import Logowhite from '../assets/logo-w.svg';
import LogoSmall from '../assets/img-accessibility.svg';
import { UpTop } from './theme/Uptop';

function Footer() {
  return (
    <>
     <div className='bg-recuit bg-[#292f35] pb-2'>
       <Container>
        <div className=' flex gap-[30px] lg:flex-row lg:items-center lg:justify-between flex-col items-start justify-center lg:h-[300px] h-[240px] '>
             <div>
            <h3 className=' text-xl space-y-5 font-bold flex flex-col lg:text-4xl text-white'><span>변화를 주도하는 </span><span>글로벌 인재를 기다립니다</span></h3>
        </div>
        <div className='flex lg:w-auto lg:flex-col w-full flex-row lg:space-y-5'>
            <button className='flex w-full lg:w-auto hover:bg-[#d8d8d8] duration-300 bg-[#f2f2f2] justify-between items-center gap-4 text-[#222222] font-bold p-3 px-4  text-lg rounded-full'>
            <span  className='lg:hidden'>인재상</span>
            <span className='hidden lg:block'>인재상알아보기</span>
           <ArrowRight className='w-5 h-5' color="#000000" />
           </button>
            <button className='flex w-full lg:w-auto hover:bg-[#1e2327] duration-300 bg-[#292f35] justify-between items-center gap-4 text-[white] font-bold p-3 px-4 text-lg rounded-full'>
             <span className='lg:hidden'>채용공고</span>
             <span  className='hidden lg:block'>채용공고바로가기</span>
              <ArrowRight className='w-5 h-5' color="#ffff" /></button>
        </div>
        </div>
      </Container>
      <UpTop/>
      </div>
      <div className=' hidden lg:block border-b-[0.5px] border-[#ffffff43]  bg-[#111111]'>
      <Container>
          <div className='flex  h-[72px] items-center justify-between  text-white'>
          <ul className='flex gap-5'>
          <li className='font-bold text-md text-[#a9a9a9]'>개인정보처리방침</li>
          <li className='font-bold text-md text-[#a9a9a9]'>신용정보활용체제</li>
          <li className='text-sm text-[#888888]'>고객정보취급방침</li>
          <li className='text-sm text-[#888888]'>하나맵</li>
        </ul>
        <ul className='flex gap-5' >
          <li><Youtube className='h-5 w-5' color="#888888" /></li>
          <li><Instagram className='h-5 w-5' color="#888888" /></li>
          <li><Facebook className='h-5 w-5' color="#888888" /></li>
          <li><Linkedin className='h-5 w-5' color="#888888" /></li>
        </ul>
         </div>
      </Container>
      </div>

      <div className='bg-[#111111] py-[30px]'>
      <Container>
        <div className='h-[128px] flex justify-between items-center '>
          <div>
            <img src={Logowhite} className='h-[24px] w-[120px] mb-[20px]' alt='logo-white'/>
            <div className='text-[#888888] text-[14px]'>
              <h3>서울특별시 중구 을지로 66 <span className='ml-3'>02.2002.1110</span></h3>
              <h3>Copyright ⓒ 2022 HANA FINANCIAL GROUP. All rights Reserved.</h3>
            </div>
          </div>
            <img src={LogoSmall} className='w-[62px] hidden lg:block'  alt='logo'/>
        </div>
        <div className='mt-[40px] lg:hidden'>
            <div className='text-[#888888] border-b-[1px] pb-3 border-[#ffffff43] flex justify-between '>
            <h3 className='text-[14px] font-bold'>이용약관</h3>
            <ChevronDown />
           </div>
          <div className='h-[58px]  flex items-center justify-between'>
            <ul className='flex gap-3' >
          <li><Youtube className='h-5 w-5' color="#888888" /></li>
          <li><Instagram className='h-5 w-5' color="#888888" /></li>
          <li><Facebook className='h-5 w-5' color="#888888" /></li>
          <li><Linkedin className='h-5 w-5' color="#888888" /></li>
        </ul>
              <img src={LogoSmall} className='w-[42px]'  alt='logo'/>
          </div>
        </div>
      </Container>
      </div>
    </>
  )
}

export default Footer