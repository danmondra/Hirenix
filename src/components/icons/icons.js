const sizes = {
  xs: '18',
  small: '24',
  medium: '32',
  normal: '48',
  large: '92',
  xl: '102'
}

function ArrowRightIcon({ size = 'normal' }) {
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

function LocationIcon({ size = 'normal' }) {
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

function SalaryIcon({ size = 'normal' }) {
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

function ExperienceIcon({ size = 'normal' }) {
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

function MenuIcon({ size = 'normal' }) {
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

function ScanIcon({ size = 'normal' }) {
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

function MagicSearchIcon({ size = 'normal' }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={sizes[size]}
      height={sizes[size]}
      viewBox='0 0 97 97'
      fill='currentColor'
    >
      <path
        d='M19.5 86l-3.364-7.692L8 74.769l8.136-3.461L19.5 64l3.364 7.308L31 74.769l-8.136 3.539-3.364 7.384V86zM80.43 84.774L53.854 58.2c-2.02 1.751-4.377 3.115-7.069 4.092-2.691.977-5.556 1.465-8.592 1.465-7.286 0-13.452-2.526-18.5-7.578-5.046-5.052-7.569-11.148-7.569-18.288 0-7.14 2.526-13.237 7.578-18.289 5.052-5.052 11.165-7.578 18.34-7.578 7.173 0 13.27 2.526 18.288 7.578 5.018 5.052 7.527 11.153 7.527 18.304 0 2.886-.471 5.677-1.414 8.371-.943 2.694-2.358 5.22-4.244 7.578l26.675 26.473-4.446 4.446zm-42.337-27.08c5.473 0 10.125-1.936 13.956-5.81 3.831-3.872 5.747-8.537 5.747-13.993 0-5.457-1.916-10.121-5.747-13.995-3.831-3.873-8.483-5.81-13.956-5.81-5.53 0-10.23 1.937-14.1 5.81-3.87 3.874-5.805 8.538-5.805 13.995 0 5.456 1.935 10.12 5.805 13.994 3.87 3.873 8.57 5.81 14.1 5.81z'
      />
      <path
        d='M80.5 62l-2.194-4.895L73 54.853l5.306-2.203L80.5 48l2.194 4.65L88 54.853l-5.306 2.252-2.194 4.7V62zM71 22l-2.633-5.944L62 13.322l6.367-2.675L71 5l2.633 5.647L80 13.322l-6.367 2.734L71 21.762V22z'
      />
    </svg>
  )
}

function LabsIcon({ size = 'normal' }) {
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

function ManagementIcon({ size = 'normal' }) {
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

function UserAccountIcon({ size = 'normal' }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={sizes[size]}
      height={sizes[size]}
      viewBox='0 96 960 960'
      fill='currentColor'
    >
      <path d='M480 575q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42zM160 896v-94q0-38 19-65t49-41q67-30 128.5-45T480 636q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800 764 800 802v94H160zm60-60h520v-34q0-16-9.5-30.5T707 750q-64-31-117-42.5T480 696q-57 0-111 11.5T252 750q-14 7-23 21.5t-9 30.5v34zm260-321q39 0 64.5-25.5T570 425q0-39-25.5-64.5T480 335q-39 0-64.5 25.5T390 425q0 39 25.5 64.5T480 515zm0-90zm0 411z' />
    </svg>
  )
}

function SearchIcon({ size = 'normal' }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={sizes[size]}
      height={sizes[size]}
      viewBox='0 96 960 960'
      fill='currentColor'
    >
      <path d='M796 935L533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44zM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667z' />
    </svg>
  )
}

function InfoIcon({ size = 'normal' }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={sizes[size]}
      height={sizes[size]}
      viewBox='0 96 960 960'
      fill='currentColor'
    >
      <path d='M453 776h60V536h-60v240zm26.982-314q14.018 0 23.518-9.2T513 430q0-14.45-9.482-24.225-9.483-9.775-23.5-9.775-14.018 0-23.518 9.775T447 430q0 13.6 9.482 22.8 9.483 9.2 23.5 9.2zm.284 514q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.316q-54 54.316-127 86Q563 976 480.266 976zm.234-60Q622 916 721 816.5t99-241Q820 434 721.188 335 622.375 236 480 236q-141 0-240.5 98.812Q140 433.625 140 576q0 141 99.5 240.5t241 99.5zm-.5-340z' />
    </svg>
  )
}

function ToggleOnIcon({ size = 'normal' }) {
  // offCx = '280'
  // onCx = '680'

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={sizes[size]}
      height={sizes[size]}
      viewBox='0 96 960 960'
      fill='currentColor'
    >
      <path d='M280 816q-100 0-170-70T40 576q0-100 70-170t170-70h400q100 0 170 70t70 170q0 100-70 170t-170 70H280zm0-60h400q75 0 127.5-52.5T860 576q0-75-52.5-127.5T680 396H280q-75 0-127.5 52.5T100 576q0 75 52.5 127.5T280 756z' />
      <circle cx='280' cy='576' r='100' />
    </svg>
  )
}

function SaveIcon({ size = 'normal' }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={sizes[size]}
      height={sizes[size]}
      viewBox='0 96 960 960'
      fill='currentColor'
    >
      <path d='M200 936V271q0-24 18-42t42-18h440q24 0 42 18t18 42v665L480 816 200 936zm60-91l220-93 220 93V271H260v574zm0-574h440-440z' />
    </svg>
  )
}

function QuestionIcon({ size = 'normal' }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={sizes[size]}
      height={sizes[size]}
      viewBox='0 96 960 960'
      fill='var(--color-greenPrimary)'
    >
      <path d='M484 809q16 0 27-11t11-27q0-16-11-27t-27-11q-16 0-27 11t-11 27q0 16 11 27t27 11zm-35-146h59q0-26 6.5-47.5T555 566q31-26 44-51t13-55q0-53-34.5-85T486 343q-49 0-86.5 24.5T345 435l53 20q11-28 33-43.5t52-15.5q34 0 55 18.5t21 47.5q0 22-13 41.5T508 544q-30 26-44.5 51.5T449 663zm31 313q-82 0-155-31.5t-127.5-86Q143 804 111.5 731T80 576q0-83 31.5-156t86-127Q252 239 325 207.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 82-31.5 155T763 858.5q-54 54.5-127 86T480 976zm0-60q142 0 241-99.5T820 576q0-142-99-241t-241-99q-141 0-240.5 99T140 576q0 141 99.5 240.5T480 916zm0-340z' />
    </svg>
  )
}

function ModalityIcon({ size = 'normal' }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={sizes[size]}
      height={sizes[size]}
      viewBox='0 96 960 960'
      fill='currentColor'
    >
      <title>Modalidad</title>
      <path d='M480 758q103.95-83.86 156.975-161.43Q690 519 690 452q0-59-21.5-100t-53.009-66.88q-31.51-25.881-68.271-37.5Q510.459 236 480 236q-30.459 0-67.22 11.62-36.761 11.619-68.271 37.5Q313 311 291.5 352T270 452q0 67 53.025 144.57T480 758zm0 76Q343 731 276.5 636.801q-66.5-94.2-66.5-184.554Q210 384 234.5 332.5T298 246q39-35 86.98-52.5 47.98-17.5 95-17.5T575 193.5q48 17.5 87 52.5t63.5 86.533Q750 384.066 750 452.456 750 543 683.5 637 617 731 480 834zm.089-318Q509 516 529.5 495.411q20.5-20.588 20.5-49.5Q550 417 529.411 396.5q-20.588-20.5-49.5-20.5Q451 376 430.5 396.589q-20.5 20.588-20.5 49.5Q410 475 430.589 495.5q20.588 20.5 49.5 20.5zM210 976v-60h540v60H210zm270-524z' />
    </svg>
  )
}

function WorkdayIcon({ size = 'normal' }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={sizes[size]}
      height={sizes[size]}
      viewBox='0 96 960 960'
      fill='currentColor'
    >
      <title>Contrato</title>
      <path d='M140 876V383v493zm0 60q-24 0-42-18t-18-42V383q0-24 18-42t42-18h190v-87q0-23 18-41.5t42-18.5h180q24 0 42 18.5t18 41.5v87h190q24 0 42 18t18 42v238q-14-11-28.5-20T820 584V383H140v493.5-.5h334.455Q478 892 484 907t14 29H140zm250-613h180v-87H390v87zm330 686q-79 0-136-57t-57-136q0-79 57-136t136-57q79 0 136 57t57 136q0 79-57 136t-136 57zm74-92l27-27-84-76V690h-42v135.776L794 917z' />
    </svg>
  )
}

function TimeIcon({ size = 'normal' }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={sizes[size]}
      height={sizes[size]}
      viewBox='0 96 960 960'
      fill='currentColor'
    >
      <title>Publicación</title>
      <path d='M627 769l45-45-159-160V363h-60v225l174 181zM480 976q-82 0-155-31.5t-127.5-86Q143 804 111.5 731T80 576q0-82 31.5-155t86-127.5Q252 239 325 207.5T480 176q82 0 155 31.5t127.5 86Q817 348 848.5 421T880 576q0 82-31.5 155t-86 127.5Q708 913 635 944.5T480 976zm0-400zm0 340q140 0 240-100t100-240q0-140-100-240T480 236q-140 0-240 100T140 576q0 140 100 240t240 100z' />
    </svg>
  )
}

function ScienceIcon({ size = 'normal' }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={sizes[size]}
      height={sizes[size]}
      viewBox='0 96 960 960'
      fill='currentColor'
    >
      <path d='M172 936q-41.777 0-59.388-39Q95 858 124 826l248-280V276h-52q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T320 216h320q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T640 276h-52v270l248 280q29 32 11.388 71-17.611 39-59.388 39H172zm-12-60h640L528 568V276h-96v292L160 876zm318-300z' />
    </svg>
  )
}

function InterviewIcon({ size = 'normal' }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={sizes[size]}
      height={sizes[size]}
      viewBox='0 96 960 960'
      fill='currentColor'
    >
      <path d='M180 936q-24.75 0-42.375-17.625T120 876V276q0-24.75 17.625-42.375T180 216h205q5-35 32-57.5t63-22.5q36 0 63 22.5t32 57.5h205q24.75 0 42.375 17.625T840 276v600q0 24.75-17.625 42.375T780 936H180zm0-60h600V276H180v600zm100-100h273v-60H280v60zm0-170h400v-60H280v60zm0-170h400v-60H280v60zm200-177q14 0 24.5-10.5T515 224q0-14-10.5-24.5T480 189q-14 0-24.5 10.5T445 224q0 14 10.5 24.5T480 259zM180 876V276v600z' />
    </svg>
  )
}

function FilterIcon({ size = 'normal' }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={sizes[size]}
      height={sizes[size]}
      viewBox='0 96 960 960'
      fill='currentColor'
    >
      <path d='M400 816v-60h160v60H400zM240 606v-60h480v60H240zM120 396v-60h720v60H120z' />
    </svg>
  )
}

function ExpandIcon({ size = 'normal', rotate }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={sizes[size]}
      height={sizes[size]}
      viewBox='0 96 960 960'
      fill='currentColor'
      style={{
        transform: rotate ? 'rotate(180deg)' : 'unset'
      }}
    >
      <path d='M480 711L240 471l43-43 197 198 197-197 43 43-240 239z' />
    </svg>
  )
}

function LanguageIcon({ size = 'normal' }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={sizes[size]}
      height={sizes[size]}
      viewBox='0 -960 960 960'
      fill='currentColor'
    >
      <title>Idiomas</title>
      <path d='M480-80q-84 0-157-31.5T196-197q-54-54-85-127.5T80-482q0-84 31-156.5T196-765q54-54 127-84.5T480-880q84 0 157 30.5T764-765q54 54 85 126.5T880-482q0 84-31 157.5T764-197q-54 54-127 85.5T480-80zm0-58q35-36 58.5-82.5T577-331H384q14 60 37.5 108t58.5 85zm-85-12q-25-38-43-82t-30-99H172q38 71 88 111.5T395-150zm171-1q72-23 129.5-69T788-331H639q-13 54-30.5 98T566-151zM152-391h159q-3-27-3.5-48.5T307-482q0-25 1-44.5t4-43.5H152q-7 24-9.5 43t-2.5 45q0 26 2.5 46.5T152-391zm221 0h215q4-31 5-50.5t1-40.5q0-20-1-38.5t-5-49.5H373q-4 31-5 49.5t-1 38.5q0 21 1 40.5t5 50.5zm275 0h160q7-24 9.5-44.5T820-482q0-26-2.5-45t-9.5-43H649q3 35 4 53.5t1 34.5q0 22-1.5 41.5T648-391zm-10-239h150q-33-69-90.5-115T565-810q25 37 42.5 80T638-630zm-254 0h194q-11-53-37-102.5T480-820q-32 27-54 71t-42 119zm-212 0h151q11-54 28-96.5t43-82.5q-75 19-131 64t-91 115z' />
    </svg>
  )
}

function ResidenceIcon({ size = 'normal' }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={sizes[size]}
      height={sizes[size]}
      viewBox='0 -960 960 960'
      fill='currentColor'
    >
      <title>Residencia Obligatoria</title>
      <path d='M697-623h60v-60h-60v60zm0 171h60v-60h-60v60zm0 170h60v-60h-60v60zm-56 162v-60h219v-600H465v112l-60-42v-130h515v720H641zm-601 0v-390l271-194 270 194v390H364v-201H258v201H40zm60-60h98v-201h226v201h97v-299L311-630 100-478.578V-180zm541-365zM424-180v-201H198v201-201h226v201z' />
    </svg>
  )
}

function StudyIcon({ size = 'normal' }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={sizes[size]}
      height={sizes[size]}
      viewBox='0 -960 960 960'
      fill='currentColor'
    >
      <title>Estudios Mínimos</title>
      <path d='M479-120L189-279v-240L40-600l439-240 441 240v317h-60v-282l-91 46v240L479-120zm0-308l315-172-315-169-313 169 313 172zm0 240l230-127v-168L479-360 249-485v170l230 127zm1-240zm-1 74zm0 0z' />
    </svg>
  )
}

function PagerForwardIcon({ size = 'normal' }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={sizes[size]}
      height={sizes[size]}
      viewBox='0 -960 960 960'
      fill='currentColor'
    >
      <title>Siguiente Página</title>
      <path d='M375-240l-43-43 198-198-198-198 43-43 241 241-241 241z' />
    </svg>
  )
}

function PagerBackIcon({ size = 'normal' }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={sizes[size]}
      height={sizes[size]}
      viewBox='0 -960 960 960'
      fill='currentColor'
    >
      <title>Página anterior</title>
      <path d='M561-240L320-481l241-241 43 43-198 198 198 198-43 43z' />
    </svg>
  )
}

function CircleCheck({ size = 'normal' }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={sizes[size]}
      height={sizes[size]}
      viewBox='0 -960 960 960'
      fill='currentColor'
    >
      <path d='M421-298l283-283-46-45-237 237-120-120-45 45 165 166zm59 218q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140zm0-340z' />
    </svg>
  )
}

export {
  ArrowRightIcon,
  LocationIcon,
  SalaryIcon,
  ExperienceIcon,
  MenuIcon,
  ScanIcon,
  MagicSearchIcon,
  LabsIcon,
  ManagementIcon,
  UserAccountIcon,
  SearchIcon,
  InfoIcon,
  ToggleOnIcon,
  SaveIcon,
  QuestionIcon,
  ModalityIcon,
  WorkdayIcon,
  TimeIcon,
  ScienceIcon,
  InterviewIcon,
  FilterIcon,
  ExpandIcon,
  LanguageIcon,
  ResidenceIcon,
  StudyIcon,
  PagerForwardIcon,
  PagerBackIcon,
  CircleCheck
}
