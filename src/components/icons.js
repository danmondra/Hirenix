const sizes = {
  xs: '18',
  small: '24',
  medium: '32',
  normal: '48',
  large: '64'
}

function ArrowRight({ size = 'normal' }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={sizes[size]}
      height={sizes[size]}
      viewBox='0 96 960 960'
      fill='currentColor'
    >
      <path d='M561 814l-43-42 168-168H160v-60h526L517 375l43-42 241 241-240 240z' />
    </svg>
  )
}

function Location({ size = 'normal' }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={sizes[size]}
      height={sizes[size]}
      viewBox='0 96 960 960'
      fill='currentColor'
    >
      <path d='M480.089 566Q509 566 529.5 545.411q20.5-20.588 20.5-49.5Q550 467 529.411 446.5q-20.588-20.5-49.5-20.5Q451 426 430.5 446.589q-20.5 20.588-20.5 49.5Q410 525 430.589 545.5q20.588 20.5 49.5 20.5zM480 897q133-121 196.5-219.5T740 504q0-117.79-75.292-192.895Q589.417 236 480 236t-184.708 75.105Q220 386.21 220 504q0 75 65 173.5T480 897zm0 79Q319 839 239.5 721.5T160 504q0-150 96.5-239T480 176q127 0 223.5 89T800 504q0 100-79.5 217.5T480 976zm0-472z' />
    </svg>
  )
}

function Salary({ size = 'normal' }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={sizes[size]}
      height={sizes[size]}
      viewBox='0 96 960 960'
      fill='currentColor'
    >
      <path d='M540 636q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35zM220 776q-24.75 0-42.375-17.625T160 716V316q0-24.75 17.625-42.375T220 256h640q24.75 0 42.375 17.625T920 316v400q0 24.75-17.625 42.375T860 776H220zm100-60h440q0-42 29-71t71-29V416q-42 0-71-29t-29-71H320q0 42-29 71t-71 29v200q42 0 71 29t29 71zm480 180H100q-24.75 0-42.375-17.625T40 836V376h60v460h700v60zM220 716V316v400z' />
    </svg>
  )
}

function Experience({ size = 'normal' }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={sizes[size]}
      height={sizes[size]}
      viewBox='0 96 960 960'
      fill='currentColor'
    >
      <path d='M140 936q-24 0-42-18t-18-42V396q0-24 18-42t42-18h180V236q0-24 18-42t42-18h200q24 0 42 18t18 42v100h180q24 0 42 18t18 42v480q0 24-18 42t-42 18H140zm0-60h680V396H140v480zm240-540h200V236H380v100zM140 876V396v480z' />
    </svg>
  )
}

function Menu() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='48'
      height='48'
      viewBox='0 96 960 960'
      fill='currentColor'
    >
      <path d='M120 816v-60h720v60H120zm0-210v-60h720v60H120zm0-210v-60h720v60H120z' />
    </svg>
  )
}

export {
  ArrowRight,
  Location,
  Salary,
  Experience,
  Menu
}
