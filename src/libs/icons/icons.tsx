import { LucideProps } from 'lucide-react';
import { IconsType } from '../../types/icons';



export const Icons:IconsType = {
    add: (props: LucideProps) => (
        <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"> 
        <path d="M5 12h14" /> <path d="M12 5v14" /> 
        </svg >
    ),
    menu: (props: LucideProps) => (
        <svg 
        {...props}
        xmlns="http://www.w3.org/2000/svg" 
        width="24" height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round">
        <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/>
        <line x1="4" x2="20" y1="18" y2="18"/>
        </svg>
    ),
    global: (props: LucideProps) => (
        <svg 
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke-width="1.5" 
        stroke-linecap="round" 
        stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
    ),
    network: (props: LucideProps) => (
        <svg 
         {...props}
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke-width="1.5" 
        stroke-linecap="round" 
        stroke-linejoin="round" >
        <rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/>
        <rect x="9" y="2" width="6" height="6" rx="1"/>
        <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>
    ),
    chevronLeft: (props: LucideProps) => (
    <svg 
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke-width="2" 
    stroke-linecap="round" 
    stroke-linejoin="round" 
    ><path d="m15 18-6-6 6-6"/></svg>
    ),
    chevronRight: (props: LucideProps) => (
        <svg 
        {...props}
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        >
        <path d="m9 18 6-6-6-6" /></svg>
    ),
    play: (props: LucideProps) => (
        <svg 
        {...props}
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="#ffff" 
        stroke-width="1.5" 
        stroke-linecap="round" 
        stroke-linejoin="round"
        ><polygon points="5 3 19 12 5 21 5 3" /></svg>
    ),
    stop: (props: LucideProps) => (
      <svg 
       {...props}
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="#ffff"
      stroke-width="1.5" 
      stroke-linecap="round" 
      stroke-linejoin="round" 
      ><rect width="4" height="16" x="6" y="4"/><rect width="4" height="16" x="14" y="4"/></svg>  
    ),
    hanaNetwork: (props: LucideProps) => (
        <svg 
        {...props}
        xmlns="http://www.w3.org/2000/svg" 
        width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" ><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
    )
}
 
// <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>