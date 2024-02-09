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
        <svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
    <defs>
        <clipPath id="g7pcyiaj8a">
            <path data-name="사각형 7"  fill="#ffffff"  d="M0 0h22.4v22.4H0z"/>
        </clipPath>
    </defs>
    <g data-name="그룹 26">
        <path data-name="30 Bonding box" d="M0 0h30v30H0z" fill="none" />
        <g data-name="그룹 25">
            <path data-name="패스 13" d="M15.4 15.4V7h-1.867v3.267H8.867V7H7v8.4h1.867v-3.266h4.666V15.4z" fill="#ffffff" transform="translate(4 4)"/>
            <g data-name="그룹 23">
                <g data-name="그룹 22" clipPath='url(#g7pcyiaj8a)'  transform="translate(4 4)">
                    <path data-name="패스 14" d="M1.723 17.015V1.723H16.8V0H1.723A1.725 1.725 0 0 0 0 1.723v15.293h1.723z" fill="#ffffff"/>
                    <path data-name="패스 15" d="M20.677 20.677H5.6V22.4h15.077a1.726 1.726 0 0 0 1.723-1.723V6.318h-1.723z" fill="#ffffff"/>
                    <path data-name="패스 16" d="M21 2.8a1.4 1.4 0 1 0-1.4-1.4A1.4 1.4 0 0 0 21 2.8" fill="#ffffff"/>
                    <path data-name="패스 17" d="M1.4 19.6A1.4 1.4 0 1 0 2.8 21a1.4 1.4 0 0 0-1.4-1.4" fill="#ffffff"/>
                </g>
            </g>
        </g>
    </g>
</svg>
    )
}
 
// <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>