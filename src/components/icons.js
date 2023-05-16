const sizes = {
  xs: '18',
  small: '24',
  medium: '32',
  normal: '48',
  large: '92',
  xl: '102'
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
      <title>Ubicación</title>
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
      <title>Sueldo</title>
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
      <title>Experiencia</title>
      <path d='M140 936q-24 0-42-18t-18-42V396q0-24 18-42t42-18h180V236q0-24 18-42t42-18h200q24 0 42 18t18 42v100h180q24 0 42 18t18 42v480q0 24-18 42t-42 18H140zm0-60h680V396H140v480zm240-540h200V236H380v100zM140 876V396v480z' />
    </svg>
  )
}

function Menu({ size = 'normal' }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={sizes[size]}
      height={sizes[size]}
      viewBox='0 96 960 960'
      fill='currentColor'
    >
      <path d='M120 816v-60h720v60H120zm0-210v-60h720v60H120zm0-210v-60h720v60H120z' />
    </svg>
  )
}

function Scan({ size = 'normal' }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={sizes[size]}
      height={sizes[size]}
      viewBox='0 96 960 960'
      fill='currentColor'
    >
      <path d='M220 976q-24.75 0-42.375-17.625T160 916V746h60v170h520V746h60v170q0 24.75-17.625 42.375T740 976H220zm-60-410V236q0-24.75 17.625-42.375T220 176h361l219 219v171h-60V422H551V236H220v330h-60zM40 686v-60h880v60H40zm440-120zm0 180z' />
    </svg>
  )
}

function MagicSearch({ size = 'normal' }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={sizes[size]}
      height={sizes[size]}
      viewBox='0 0 97 97'
      fill='currentColor'
    >
      <path
        fill='#B8B8B8'
        d='M19.5 86l-3.364-7.692L8 74.769l8.136-3.461L19.5 64l3.364 7.308L31 74.769l-8.136 3.539-3.364 7.384V86zM80.43 84.774L53.854 58.2c-2.02 1.751-4.377 3.115-7.069 4.092-2.691.977-5.556 1.465-8.592 1.465-7.286 0-13.452-2.526-18.5-7.578-5.046-5.052-7.569-11.148-7.569-18.288 0-7.14 2.526-13.237 7.578-18.289 5.052-5.052 11.165-7.578 18.34-7.578 7.173 0 13.27 2.526 18.288 7.578 5.018 5.052 7.527 11.153 7.527 18.304 0 2.886-.471 5.677-1.414 8.371-.943 2.694-2.358 5.22-4.244 7.578l26.675 26.473-4.446 4.446zm-42.337-27.08c5.473 0 10.125-1.936 13.956-5.81 3.831-3.872 5.747-8.537 5.747-13.993 0-5.457-1.916-10.121-5.747-13.995-3.831-3.873-8.483-5.81-13.956-5.81-5.53 0-10.23 1.937-14.1 5.81-3.87 3.874-5.805 8.538-5.805 13.995 0 5.456 1.935 10.12 5.805 13.994 3.87 3.873 8.57 5.81 14.1 5.81z'
      />
      <path
        fill='#B8B8B8'
        d='M80.5 62l-2.194-4.895L73 54.853l5.306-2.203L80.5 48l2.194 4.65L88 54.853l-5.306 2.252-2.194 4.7V62zM71 22l-2.633-5.944L62 13.322l6.367-2.675L71 5l2.633 5.647L80 13.322l-6.367 2.734L71 21.762V22z'
      />
    </svg>
  )
}

function Labs({ size = 'normal' }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={sizes[size]}
      height={sizes[size]}
      viewBox='0 96 960 960'
      fill='currentColor'
    >
      <path d='M480 976q-83 0-141.5-58.5T280 776V416q-33 0-56.5-23.5T200 336v-80q0-33 23.5-56.5T280 176h400q33 0 56.5 23.5T760 256v80q0 33-23.5 56.5T680 416v360q0 83-58.5 141.5T480 976zM260 356h440V236H260v120zm220 560q51 0 88.5-31t48.5-79H480v-60h140v-60H480v-60h140v-60H480v-60h140v-90H340v360q0 58.333 40.833 99.167Q421.667 916 480 916zM260 356V236v120z' />
    </svg>
  )
}

function Management({ size = 'normal' }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={sizes[size]}
      height={sizes[size]}
      viewBox='0 96 960 960'
      fill='currentColor'
    >
      <path d='M0 816v-53q0-38.567 41.5-62.784Q83 676 150.376 676q12.165 0 23.395.5Q185 677 196 678.652q-8 17.348-12 35.165T180 751v65H0zm240 0v-65q0-32 17.5-58.5T307 646q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240zm540 0v-65q0-19.861-3.5-37.431Q773 696 765 678.727q11-1.727 22.171-2.227 11.172-.5 22.829-.5 67.5 0 108.75 23.768T960 763v53H780zm-480-60h360v-6q0-37-50.5-60.5T480 666q-79 0-129.5 23.5T300 751v5zM149.567 646Q121 646 100.5 625.438 80 604.875 80 576q0-29 20.562-49.5Q121.125 506 150 506q29 0 49.5 20.5t20.5 49.933Q220 605 199.5 625.5T149.567 646zm660 0Q781 646 760.5 625.438 740 604.875 740 576q0-29 20.562-49.5Q781.125 506 810 506q29 0 49.5 20.5t20.5 49.933Q880 605 859.5 625.5T809.567 646zM480 576q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600 456q0 50-34.5 85T480 576zm.351-60Q506 516 523 498.649t17-43Q540 430 522.851 413t-42.5-17Q455 396 437.5 413.149t-17.5 42.5Q420 481 437.351 498.5t43 17.5zM480 756zm0-300z' />
    </svg>
  )
}

export {
  ArrowRight,
  Location,
  Salary,
  Experience,
  Menu,
  Scan,
  MagicSearch,
  Labs,
  Management
}
