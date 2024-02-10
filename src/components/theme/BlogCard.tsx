import React from 'react'
import { BlogType } from '../../types/blog';

const BlogCard:React.FC<BlogType> = ({id,title,img,button,created_at})=> {
  return (
    <div className={`${id !== 1 && 'hidden lg:block'}`}>
        <div className=' group  rounded-xl lg:h-[175px] bg-blue-50 overflow-hidden w-full'>
              <img className=' w-full group-hover:scale-[1.1] lg:group-hover:scale-[1.4] duration-500 cursor-pointer lg:scale-[1.2]' src={img} alt='hello'/>
        </div>
          <div className='  flex flex-col h-[150px]  justify-between mt-3'>
            <div className=' space-y-3'>
                  <button className='border-[1px] hidden lg:block border-[#009178] text-xs font-extrabold px-2 py-1 text-[#009178] rounded-md'>{button}</button>
                  <h3 className=' font-bold text-md'>{title}</h3>
            </div>
              <p className='text-[#222222ae] hidden lg:block  font-medium text-sm'>{created_at}</p>
        </div>
    </div>
  )
}

export default BlogCard