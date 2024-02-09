import { LucideProps } from 'lucide-react';
import { useState } from 'react';
import { useSwiper } from 'swiper/react';

function AutoControl({ stop: Stop, start: Start }: { stop: (props: LucideProps) => JSX.Element, start: (props: LucideProps) => JSX.Element }) {

    const [toggle, setToggle] = useState(true);
    
  const swiper = useSwiper();
    
    if (toggle) return <Stop className='w-4 h-4' stroke='#ffff' onClick={() => {
        setToggle((prev) => !prev);
        swiper.autoplay.stop();
    }} />
    return <Start className='w-4 h-4' stroke='#ffff' onClick={() => {
        setToggle((prev) => !prev);
        swiper.autoplay.start();
    }}/>
}

export default AutoControl