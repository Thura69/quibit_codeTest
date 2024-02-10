import React from 'react'
import Container from './theme/Container'
import { ArrowRight } from 'lucide-react'
import BlogCard from './theme/BlogCard'
import { BlogCardData } from '../assets/data/blogCard'

function Blog() {
  return (
    <div className='py-[40px] lg:py-[80px]'>
        <Container>
            {/* Blog Header */}
           <div className='flex justify-between mb-[35px]  text-black'>
           <h3 className='text-lg lg:text-3xl font-extrabold'>하나소식</h3> 
           <p className='flex items-center justify-center gap-2 font-bold text-sm '><span className='hidden lg:block'>More</span> <ArrowRight className='w-5 h-5'/> </p>
           </div> 
           {/* Blog Header */}
              <div className='grid grid-cols-1 lg:grid-cols-4 gap-[35px]'>
                  {
                      BlogCardData.map((e) => (
                          <BlogCard id={e.id} key={e.id} title={e.title} img={e.img} button={e.button} created_at={e.created_at} />  
                      ))
                  }
                  
              </div>
          
        </Container>
    </div>
  )
}

export default Blog