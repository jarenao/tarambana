<script setup></script>

<template>
  <!-- Header -->
  <header class="flex justify-between items-center p-6">
    <h1 class="text-3xl font-bold">NAMARI</h1>
    <nav class="hidden md:flex space-x-4">
      <a href="#" class="hover:text-gray-600">Prueba</a>
      <a href="#" class="hover:text-gray-600"
        ><svg
          class="feather feather-facebook"
          fill="none"
          height="24"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg
      ></a>
      <a href="#" class="hover:text-gray-600"
        ><svg
          class="feather feather-instagram"
          fill="none"
          height="24"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg
      ></a>
      <a href="#" class="hover:text-gray-600"
        ><svg
          class="feather feather-lock"
          fill="none"
          height="24"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect height="11" rx="2" ry="2" width="18" x="3" y="11" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg
      ></a>
      <a href="#" class="hover:text-gray-600"
        ><svg
          class="feather feather-unlock"
          fill="none"
          height="24"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect height="11" rx="2" ry="2" width="18" x="3" y="11" />
          <path d="M7 11V7a5 5 0 0 1 9.9-1" /></svg
      ></a>
      <a href="#" class="hover:text-gray-600"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          class="feather feather-unlock"
          fill="none"
          height="24"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="0.5"
          viewBox="0 0 26 26"
          width="26"
        >
          <path
            fill="#1D1D1B"
            fill-rule="evenodd"
            d="M6.155 1.001c-1.533-.035-3.042.71-3.999 1.897A5.116 5.116 0 0 0 1.004 6.13c-.002 1.222-.002 2.445-.002 3.668 0 1.223 0 2.445-.002 3.668v.065c0 .279 0 .558.038.837a5.072 5.072 0 0 0 1.083 2.574 5.108 5.108 0 0 0 2.529 1.709c.3.09.604.164.915.181.011.49.01.98.008 1.47a99.51 99.51 0 0 0-.001.815v3.284c-.003.2.09.391.255.503.227.16.555.112.74-.09l5.833-5.835a.217.217 0 0 1 .178-.077h6.756c.521.003 1.044.006 1.557-.101.66-.143 1.3-.405 1.855-.79a5.193 5.193 0 0 0 1.935-2.47 5.115 5.115 0 0 0 .317-1.83L25 11.17c.001-1.693.002-3.385 0-5.076a5.14 5.14 0 0 0-1.677-3.756c-.93-.845-2.176-1.355-3.44-1.334C15.306 1 10.73 1 6.155 1ZM6.4 2.133c-.36-.007-.72.018-1.07.09a3.976 3.976 0 0 0-2.252 1.353 3.97 3.97 0 0 0-.932 2.554v7.616a4.016 4.016 0 0 0 3.597 3.997c.066.006.134.006.202.007.158.001.319.003.465.076a.57.57 0 0 1 .304.528c.002.669.001 1.339 0 2.009 0 .893 0 1.787.004 2.68l1.66-1.66a3425.13 3425.13 0 0 0 3.317-3.32c.15-.16.338-.32.572-.31h7.65c1.393.01 2.738-.81 3.419-2.023.342-.6.524-1.293.52-1.984V6.2a4.002 4.002 0 0 0-2.036-3.546 4.1 4.1 0 0 0-1.973-.52H6.4Z"
            clip-rule="evenodd"
          />
          <path
            fill="#1D1D1B"
            d="m2.156 2.898.077.064.001-.001-.078-.063Zm4-1.897-.003.1h.002v-.1ZM1.003 6.13h.1-.1Zm-.002 3.668h.1-.1ZM1 13.466H.9 1Zm0 .065h.1H1Zm.038.837.1-.012v-.002l-.1.014Zm1.083 2.574.078-.062-.078.062Zm2.529 1.709.029-.096h-.001l-.028.096Zm.915.181.1-.002-.002-.092-.092-.005-.006.1Zm.008 1.47-.1-.001h.1Zm-.001.815h.1-.1Zm0 3.284.1.002V24.4h-.1Zm.255.503.058-.081-.002-.002-.056.083Zm.74-.09-.07-.071-.003.003.073.067Zm5.833-5.835.071.07.002-.002-.073-.068Zm.178-.077-.01.1h.01v-.1Zm6.326 0v.1-.1Zm.43 0-.001.1v-.1Zm1.557-.101.02.098h.001l-.021-.098Zm1.855-.79-.056-.082h-.001l.057.082Zm1.935-2.47.093.035-.093-.035Zm.317-1.83h-.1.1ZM25 11.17h.1-.1Zm0-5.076h.1-.1Zm-1.677-3.756-.067.074.067-.074Zm-3.44-1.334v.1h.001l-.001-.1ZM5.33 2.224l.02.098-.02-.098Zm1.069-.09-.002.1H6.4v-.1ZM3.078 3.575l.077.065-.077-.064ZM2.146 6.13h.1-.1Zm0 7.616h.1-.1Zm1.002 2.658.075-.066-.075.066Zm2.595 1.338-.01.1.01-.1Zm.202.008-.001.1v-.1Zm.465.076.046-.089h-.001l-.045.09Zm.304.528-.1-.005v.005h.1Zm0 2.009h-.1.1Zm.004 2.68h-.1v.24l.17-.17-.07-.07Zm1.66-1.66-.071-.071.07.07Zm3.317-3.32.07.071.003-.002-.073-.068Zm.572-.31-.004.1h.005v-.1Zm7.65 0v-.1.1Zm3.419-2.023-.087-.05v.001l.087.05Zm.52-1.984h-.1.1Zm0-7.546-.1-.001h.1Zm-.17-1.22-.097.03.096-.03ZM21.82 2.654l-.05.086h.001l.049-.086Zm-1.973-.52.001-.1h-.001v.1ZM2.234 2.96c.939-1.165 2.419-1.894 3.919-1.86l.005-.2c-1.567-.035-3.104.724-4.08 1.934l.156.126Zm-1.13 3.168a5.016 5.016 0 0 1 1.13-3.167l-.155-.127A5.216 5.216 0 0 0 .904 6.13h.2Zm-.002 3.669c0-1.223 0-2.445.002-3.668h-.2C.902 7.352.902 8.575.902 9.798h.2ZM1.1 13.466c.002-1.223.002-2.445.002-3.668h-.2c0 1.223 0 2.445-.002 3.668h.2Zm0 .065v-.065H.9v.065h.2Zm.038.823a5.9 5.9 0 0 1-.038-.823H.9c0 .277 0 .563.04.85l.198-.027Zm1.061 2.526a4.971 4.971 0 0 1-1.061-2.524l-.199.023c.11.955.502 1.878 1.104 2.626l.156-.125Zm2.479 1.675a5.007 5.007 0 0 1-2.479-1.675l-.156.125a5.208 5.208 0 0 0 2.579 1.742l.056-.192Zm.893.178a3.837 3.837 0 0 1-.892-.178l-.058.191c.303.092.616.168.938.186l.012-.2Zm.102 1.569c.002-.49.003-.98-.008-1.472l-.2.005c.011.488.01.976.008 1.466h.2Zm-.001.815V20.3h-.2c0 .272-.001.544 0 .817l.2-.001Zm0 3.284v-3.284h-.2v3.284h.2Zm.211.42a.496.496 0 0 1-.211-.418l-.2-.004a.696.696 0 0 0 .299.588l.112-.165Zm.61-.075a.476.476 0 0 1-.608.077l-.116.163a.676.676 0 0 0 .872-.105l-.147-.135Zm5.836-5.838-5.832 5.835.141.141 5.833-5.834-.142-.142Zm.26-.105a.317.317 0 0 0-.262.108l.146.136c.033-.034.067-.048.095-.045l.02-.2Zm6.315 0h-6.326v.2h6.326v-.2Zm.43 0a15.48 15.48 0 0 0-.431 0l.002.2c.142-.002.284-.002.428 0v-.2Zm1.537-.1c-.5.104-1.013.102-1.537.1l-.001.2c.52.002 1.054.005 1.578-.104l-.04-.196Zm1.818-.774a5.101 5.101 0 0 1-1.82.774l.043.196a5.303 5.303 0 0 0 1.89-.805l-.113-.165Zm1.898-2.422a5.093 5.093 0 0 1-1.898 2.422l.113.165a5.293 5.293 0 0 0 1.972-2.518l-.187-.07Zm.311-1.795a5.019 5.019 0 0 1-.311 1.795l.187.07a5.2 5.2 0 0 0 .324-1.867l-.2.002Zm.001-2.541v2.54h.2v-2.54h-.2Zm0-5.076c.002 1.69.001 3.383 0 5.076h.2c.001-1.693.002-3.385 0-5.076h-.2Zm-1.644-3.682a5.041 5.041 0 0 1 1.643 3.682h.2a5.241 5.241 0 0 0-1.709-3.83l-.134.148Zm-3.372-1.308c1.237-.02 2.46.478 3.372 1.308l.134-.148c-.946-.861-2.217-1.382-3.509-1.36l.003.2ZM6.155 1.1c4.576 0 9.151 0 13.727.004v-.2C15.306.9 10.73.9 6.155.9v.2Zm-.803 1.22a4.73 4.73 0 0 1 1.046-.088l.004-.2a4.853 4.853 0 0 0-1.092.093l.042.196ZM3.155 3.64a3.876 3.876 0 0 1 2.196-1.318l-.04-.196c-.9.183-1.726.68-2.31 1.386l.154.128Zm-.91 2.49a3.87 3.87 0 0 1 .91-2.49l-.153-.129a4.07 4.07 0 0 0-.956 2.62l.2-.002Zm0 7.616V6.13h-.2v7.616h.2Zm.978 2.592a3.883 3.883 0 0 1-.977-2.592l-.2-.001a4.083 4.083 0 0 0 1.027 2.726l.15-.133Zm2.53 1.305a3.915 3.915 0 0 1-2.53-1.305l-.15.132a4.115 4.115 0 0 0 2.66 1.372l.02-.2Zm.193.007a2.27 2.27 0 0 1-.193-.007l-.02.199c.072.007.144.007.21.008l.003-.2Zm.509.087c-.17-.086-.355-.086-.51-.087l-.001.2c.162.001.299.004.421.066l.09-.18Zm.359.622a.67.67 0 0 0-.358-.622l-.091.178a.47.47 0 0 1 .25.434l.199.01Zm0 2.004c.001-.67.002-1.34 0-2.01l-.2.001c.002.669.001 1.339 0 2.009h.2Zm.004 2.679c-.004-.892-.004-1.786-.003-2.68h-.2c0 .894-.001 1.788.003 2.68h.2Zm1.489-1.73-1.66 1.66.141.14a6333.6 6333.6 0 0 1 1.66-1.659l-.141-.141Zm3.317-3.319c-1.104 1.106-2.21 2.213-3.317 3.319l.141.141c1.107-1.106 2.214-2.212 3.317-3.319l-.141-.14Zm.648-.34c-.283-.013-.5.181-.65.343l.146.136c.15-.16.31-.288.495-.28l.009-.2Zm7.644 0h-7.649v.2h7.65v-.2Zm3.333-1.972c-.665 1.182-1.976 1.982-3.332 1.972l-.001.2c1.432.01 2.81-.832 3.507-2.074l-.174-.098Zm.507-1.935a3.891 3.891 0 0 1-.507 1.935l.174.099a4.091 4.091 0 0 0 .533-2.035l-.2.001Zm0-7.546v7.546h.2V6.2h-.2Zm-.166-1.19c.118.384.17.785.166 1.189l.2.001a4.105 4.105 0 0 0-.175-1.25l-.191.06Zm-1.82-2.27a3.916 3.916 0 0 1 1.818 2.27l.192-.058a4.116 4.116 0 0 0-1.912-2.386l-.098.175Zm-1.926-.507a4 4 0 0 1 1.925.507l.1-.173a4.199 4.199 0 0 0-2.022-.534l-.003.2Zm-13.445 0h13.447v-.2H6.4v.2Z"
          />
          <path
            fill="#1D1D1B"
            stroke="#1D1D1B"
            stroke-width=".2"
            d="M7.643 6.5a.59.59 0 0 1 .434-.175c1.187 0 2.375.004 3.562 0 .206-.007.44-.003.597.15a.57.57 0 0 1 .084.759.586.586 0 0 1-.506.24c-.908-.003-1.816 0-2.725 0-.153 0-.31 0-.464-.01-.01.636 0 1.268-.004 1.904.982.004 1.967 0 2.948 0 .189.004.395-.024.566.077a.585.585 0 0 1 .29.587.575.575 0 0 1-.573.486h-3.23c.003.639-.011 1.278.006 1.918 1.073-.014 2.148 0 3.22-.007a.566.566 0 0 1 .56.408.577.577 0 0 1-.283.664c-.147.08-.322.056-.486.06-1.201-.004-2.4.003-3.6 0a.561.561 0 0 1-.56-.58c-.003-2.006 0-4.011-.003-6.013-.004-.171.042-.35.167-.468Zm7.778-.154c.206-.031.413-.017.619-.02.248.003.495-.015.74.034a2.083 2.083 0 0 1 1.439.979c.2.328.31.716.304 1.1 0 .293-.262.57-.563.548a.553.553 0 0 1-.53-.335c-.067-.171-.039-.36-.098-.53a.96.96 0 0 0-.943-.65c-.318.017-.643-.032-.954.03a.954.954 0 0 0-.72.899c-.02.457.34.904.8.96.385.028.776-.017 1.16.025.45.049.87.262 1.198.57a2.095 2.095 0 0 1-.154 3.164c-.38.308-.876.465-1.365.44-.461-.017-.943.06-1.383-.111-.838-.287-1.443-1.15-1.394-2.04.025-.308.339-.56.646-.504a.573.573 0 0 1 .461.388c.042.164.028.343.091.507.119.342.45.59.81.622.231.02.465.003.699.01.22.007.447-.024.636-.143a.956.956 0 0 0-.112-1.69c-.255-.11-.535-.078-.803-.081-.262-.004-.531.017-.786-.046a2.101 2.101 0 0 1-1.547-2.69c.24-.765.953-1.355 1.75-1.436Z"
          />
        </svg>
      </a>
      <a href="#" class="hover:text-gray-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="feather feather-unlock"
          fill="none"
          height="24"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="0.5"
          viewBox="0 0 26 26"
          width="26"
        >
          <path
            fill="#20201E"
            fill-rule="evenodd"
            d="M6.757 1.001c-.402 0-.806.014-1.207.056-1.545.164-2.976 1.094-3.781 2.419a5.374 5.374 0 0 0-.764 2.718A773.9 773.9 0 0 0 1 10.377c0 .93.002 1.859 0 2.789 0 .819.042 1.662.356 2.432.649 1.764 2.355 3.043 4.214 3.26v2.66c-.001.888-.002 1.775 0 2.662.003.044.004.089.005.133.003.123.006.245.064.355.095.233.384.387.628.314.202-.037.334-.183.466-.33a2.55 2.55 0 0 1 .141-.148c.936-.944 1.877-1.883 2.818-2.822.856-.854 1.712-1.708 2.564-2.567a1.5 1.5 0 0 0 .064-.057c.091-.087.189-.18.33-.138 1.328-.004 2.656-.003 3.985-.003h2.991c.848.003 1.71-.143 2.473-.53a5.168 5.168 0 0 0 2.526-2.736c.268-.655.366-1.363.373-2.067.002-1.075 0-2.15 0-3.224 0-1.075-.002-2.149 0-3.224.004-.617 0-1.241-.098-1.851-.26-1.642-1.39-3.11-2.9-3.796-.729-.342-1.534-.485-2.337-.488-2.15-.002-4.301 0-6.453 0-2.15 0-4.302.002-6.452 0Zm-.175 1.15c-.433.004-.868.007-1.29.108-1.44.29-2.648 1.468-3.004 2.89-.135.47-.137.961-.138 1.448l-.001.155c.005 1.163.004 2.324.003 3.486 0 1.161-.001 2.323.004 3.485 0 .788.213 1.58.656 2.231.7 1.105 1.977 1.792 3.282 1.823.307-.028.61.195.628.512.003.693.001 1.385 0 2.077-.003.89-.005 1.782.003 2.674 1.668-1.659 3.331-3.325 4.992-4.988l.067-.059c.12-.107.247-.22.414-.226 1.249-.002 2.498-.001 3.748 0h3.751c.527 0 1.068-.06 1.56-.258 1.37-.506 2.396-1.813 2.56-3.26.036-.378.034-.756.032-1.132l-.001-.265V6.578c-.003-.433-.007-.868-.108-1.29a3.898 3.898 0 0 0-1.503-2.328c-.726-.565-1.66-.83-2.575-.809H6.582Z"
            clip-rule="evenodd"
          />
          <path
            fill="#20201E"
            d="m5.55 1.057-.01-.1.01.1ZM6.757 1V.9 1ZM1.769 3.476l-.086-.052.086.052Zm-.764 2.718h-.1.1ZM1 10.377h.1H1Zm0 2.789H.9 1Zm.356 2.432.094-.034-.001-.003-.093.037Zm4.214 3.26h.1v-.09l-.089-.01-.011.1Zm0 2.66h-.1.1Zm0 2.662h-.1v.008l.1-.008Zm.005.133.1-.002-.1.002Zm.064.355.094-.038-.005-.01-.089.048Zm.628.314-.018-.1-.01.004.028.096Zm.466-.33-.074-.067.074.067Zm.141-.148.069.073.002-.003-.07-.07Zm2.818-2.822-.07-.071.07.07Zm2.564-2.567-.064-.076-.007.006.071.07Zm.064-.057-.07-.073.07.073Zm.33-.138-.028.096.014.004h.015v-.1Zm3.985-.003v-.1.1Zm2.991 0v-.1.1Zm2.473-.53-.043-.09h-.002l.045.09Zm2.526-2.736-.093-.038v.001l.093.037Zm.373-2.067h.1-.1Zm0-3.224h-.1.1Zm0-3.224-.1-.001h.1ZM24.9 5.285l-.098.015.098-.015ZM22 1.489l-.042.09v.001L22 1.489Zm-2.337-.488v-.1.1Zm-6.453 0v-.1.1ZM5.292 2.259l.02.098h.003l-.023-.098Zm1.29-.108v-.1H6.58v.1ZM2.288 5.15l.097.028v-.004l-.097-.024ZM2.15 6.597h.1-.1Zm-.001.155h-.1.1Zm.003 3.486h-.1.1Zm.004 3.485h.1-.1Zm.656 2.231.084-.054-.002-.002-.082.056Zm3.282 1.823-.003.1h.012l-.01-.1Zm.628.512h.1v-.005l-.1.005Zm0 2.077h.1-.1Zm.003 2.674-.1.001.002.238.169-.168-.07-.07Zm4.992-4.988-.065-.076-.006.006.07.07Zm.067-.059.067.075-.067-.075Zm.414-.226v-.1h-.004l.004.1Zm3.748 0v.1-.1Zm3.751 0v-.1.1Zm1.56-.258-.035-.094h-.003l.037.094Zm2.56-3.26.099.012v-.002l-.1-.01Zm.032-1.132h-.1.1Zm-.001-6.54h.1-.1Zm0 0-.1.001h.1Zm-.108-1.289-.098.02v.004l.098-.024ZM22.237 2.96l-.062.079.002.001.06-.08Zm-2.575-.809v.1h.003l-.003-.1Zm-13.08 0v-.1.1ZM5.56 1.156c.397-.041.798-.055 1.197-.055v-.2c-.404 0-.812.014-1.218.056l.021.2ZM1.854 3.528c.79-1.299 2.193-2.211 3.706-2.372L5.54.957c-1.578.168-3.035 1.116-3.857 2.467l.171.104Zm-.75 2.667a5.274 5.274 0 0 1 .75-2.668l-.171-.103a5.474 5.474 0 0 0-.778 2.77l.2.001Zm-.003 4.182c-.001-1.394-.002-2.788.004-4.182l-.2-.001C.899 7.589.9 8.984.9 10.377h.2Zm0 2.789c.002-.93 0-1.86 0-2.79h-.2c0 .93.002 1.86 0 2.79h.2Zm.349 2.395c-.306-.751-.349-1.578-.349-2.395h-.2c0 .82.042 1.68.363 2.47l.186-.075Zm4.132 3.197c-1.824-.212-3.496-1.468-4.131-3.194l-.188.069c.663 1.801 2.402 3.104 4.296 3.324l.023-.199Zm.089 2.76v-2.66h-.2v2.66h.2Zm0 2.662c-.002-.887-.001-1.774 0-2.661h-.2a786.77 786.77 0 0 0 0 2.661h.2Zm.005.131c0-.044-.002-.092-.006-.14l-.199.017c.003.04.004.082.005.128l.2-.005Zm.053.31c-.046-.085-.05-.183-.053-.31l-.2.005c.003.117.004.265.076.4l.177-.095Zm.51.265a.404.404 0 0 1-.296-.035.442.442 0 0 1-.21-.22l-.185.074a.64.64 0 0 0 .305.324.604.604 0 0 0 .444.048l-.057-.191Zm.42-.3c-.135.15-.246.268-.408.297l.035.197c.24-.043.395-.22.522-.36l-.148-.135Zm.148-.155a2.61 2.61 0 0 0-.147.154l.148.134c.047-.051.09-.1.136-.142l-.137-.146Zm2.816-2.82c-.942.94-1.883 1.879-2.819 2.823l.142.14c.935-.943 1.876-1.882 2.818-2.822l-.141-.141Zm2.563-2.566c-.852.858-1.708 1.712-2.563 2.566l.14.142c.857-.854 1.713-1.709 2.565-2.567l-.142-.141Zm.066-.06c-.022.02-.04.038-.06.054l.13.153.067-.062-.137-.145Zm.428-.16c-.205-.062-.346.082-.428.16l.137.145c.1-.095.156-.137.234-.114l.057-.192Zm3.957-.008c-1.33 0-2.658 0-3.986.003v.2c1.328-.004 2.656-.003 3.985-.003v-.2Zm2.99 0h-2.99v.2h2.99v-.2Zm2.428-.52c-.746.379-1.59.523-2.427.52l-.001.2c.859.003 1.737-.145 2.519-.54l-.09-.18Zm2.478-2.683a5.068 5.068 0 0 1-2.476 2.683l.087.18a5.268 5.268 0 0 0 2.575-2.79l-.186-.073Zm.366-2.031c-.007.696-.104 1.39-.366 2.03l.185.076c.275-.67.374-1.392.381-2.104l-.2-.002Zm0-3.223c0 1.074.002 2.149 0 3.224h.2c.002-1.075 0-2.15 0-3.224h-.2Zm0-3.225c-.002 1.076 0 2.15 0 3.225h.2c0-1.075-.002-2.149 0-3.224h-.2Zm-.096-1.834c.096.6.1 1.217.096 1.834l.2.001c.003-.616 0-1.248-.099-1.867l-.197.032ZM21.958 1.58c1.48.673 2.588 2.112 2.845 3.72L25 5.27c-.267-1.675-1.419-3.17-2.96-3.871l-.082.182Zm-2.296-.479c.79.003 1.582.144 2.295.479l.085-.182c-.745-.349-1.566-.493-2.38-.497v.2Zm-6.452 0c2.15 0 4.302-.002 6.452 0v-.2c-2.15-.002-4.301 0-6.453 0v.2Zm-6.454 0c2.15.002 4.302 0 6.454 0v-.2c-2.152 0-4.303.002-6.453 0v.2ZM5.315 2.357c.409-.098.833-.102 1.268-.106l-.002-.2c-.43.004-.878.007-1.313.111l.047.195Zm-2.93 2.816C2.732 3.787 3.91 2.64 5.311 2.357l-.039-.196c-1.48.297-2.716 1.505-3.08 2.964l.193.048ZM2.25 6.597c.001-.489.004-.967.135-1.42l-.193-.056c-.14.485-.14.991-.142 1.476h.2Zm-.001.156v-.156h-.2v.155h.2Zm.003 3.485c.001-1.162.002-2.324-.003-3.486h-.2c.005 1.163.004 2.324.003 3.486h.2Zm.004 3.485c-.005-1.162-.004-2.324-.004-3.485h-.2c0 1.161-.001 2.323.004 3.486l.2-.001Zm.638 2.175c-.43-.633-.638-1.404-.638-2.175h-.2c0 .805.217 1.617.673 2.287l.165-.112Zm3.202 1.779c-1.273-.03-2.518-.701-3.2-1.777l-.169.108c.72 1.134 2.028 1.837 3.364 1.869l.005-.2Zm.726.607c-.021-.382-.382-.639-.737-.607l.018.2c.26-.024.505.166.519.418l.2-.011Zm0 2.082c.001-.692.003-1.384 0-2.077h-.2c.003.693.001 1.384 0 2.077h.2Zm.003 2.673c-.008-.891-.006-1.782-.003-2.673h-.2c-.003.89-.005 1.782.003 2.675l.2-.002Zm4.82-5.057a2239.75 2239.75 0 0 1-4.99 4.987l.14.142c1.668-1.66 3.332-3.325 4.992-4.988l-.141-.141Zm.072-.063c-.023.02-.044.04-.065.057l.13.152.069-.06-.134-.15Zm.477-.252c-.209.007-.363.15-.477.252l.134.149c.125-.113.226-.197.35-.202l-.007-.2Zm3.752 0c-1.25-.001-2.5-.002-3.748 0v.2c1.249-.002 2.498-.001 3.748 0v-.2Zm3.751 0h-3.75v.2h3.75v-.2Zm1.522-.251c-.475.192-1.002.25-1.522.25v.2c.533 0 1.088-.06 1.597-.265l-.075-.185Zm2.498-3.178c-.16 1.41-1.16 2.684-2.495 3.177l.069.187c1.406-.518 2.457-1.857 2.625-3.341l-.199-.023Zm.032-1.12c.002.377.004.75-.032 1.122l.2.02c.036-.385.034-.768.032-1.144l-.2.001Zm-.001-.266.001.265h.2l-.001-.265h-.2Zm0-6.274v6.274h.2V6.578h-.2Zm0 0v.001l.2-.003-.2.003Zm-.105-1.266c.098.408.101.832.105 1.266l.2-.001c-.003-.43-.007-.878-.11-1.312l-.195.047ZM22.177 3.04a3.798 3.798 0 0 1 1.465 2.268l.196-.04a3.998 3.998 0 0 0-1.542-2.389l-.119.161Zm-2.512-.789c.894-.02 1.805.24 2.51.788l.123-.158c-.746-.58-1.704-.851-2.638-.83l.005.2Zm-13.083 0h13.08v-.2H6.582v.2Zm0 0h.001l-.002-.2.002.2Z"
          />
          <path
            fill="#20201E"
            stroke="#20201E"
            stroke-width=".2"
            d="M7.698 6.473c.171-.153.415-.129.628-.14 1.046-.003 2.093.004 3.14-.003.292.004.672-.017.857.262.237.3.056.833-.341.878-1.113.042-2.226 0-3.342.014-.004.638 0 1.28 0 1.917 1.106.01 2.211-.014 3.314.007.362.028.596.478.415.795-.098.282-.43.345-.694.345-1.012.017-2.024-.004-3.035.003-.004.628 0 1.255 0 1.883 1.046.007 2.093-.01 3.14.003.355-.049.704.286.641.645-.035.286-.31.533-.607.495-1.106.02-2.208-.004-3.314.01-.258-.017-.54.042-.767-.108-.234-.129-.258-.425-.244-.662-.004-1.917.003-3.834-.004-5.751-.007-.21.018-.474.213-.593Zm6 .105c.143-.234.481-.272.708-.153a.91.91 0 0 1 .303.327c.883 1.408 1.762 2.82 2.644 4.228.021-1.338-.01-2.68.014-4.019-.017-.37.36-.718.726-.592a.533.533 0 0 1 .411.557c.018 1.977 0 3.953.01 5.926.018.223-.045.47-.23.61a.554.554 0 0 1-.704-.028c-.223-.22-.349-.512-.52-.77-.781-1.241-1.548-2.492-2.34-3.73-.035 1.398.014 2.796-.021 4.193-.056.418-.66.614-.942.293-.206-.153-.192-.443-.199-.673-.003-1.802.007-3.6-.003-5.402.007-.255-.032-.554.143-.767Z"
          />
        </svg>
      </a>
    </nav>
    <button class="md:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-menu"
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
    </button>
  </header>

  <!-- Main Content -->
  <main class="flex flex-col md:flex-row items-center justify-center px-6 py-16 md:py-24">
    <!-- Left Column -->
    <div class="md:w-1/2 mb-8 md:mb-0">
      <h2 class="text-5xl md:text-6xl font-bold mb-4">
        A FREE<br />
        AND<br />
        SIMPLE<br />
        LANDING<br />
        PAGE
      </h2>
      <p class="text-lg mb-6">
        Namari is a free landing page template you can use for your projects. It is free to use for
        your personal and commercial projects, enjoy!
      </p>
      <button
        class="bg-black text-white px-6 py-3 font-semibold hover:bg-gray-800 transition duration-300"
      >
        START CREATING TODAY
      </button>
    </div>

    <!-- Right Column (Image) -->
    <div class="md:w-1/2">
      <img
        src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80"
        alt="Abstract Art"
        class="w-full h-auto max-w-md mx-auto"
      />
    </div>
  </main>

  <!-- New Section: How We Help You To Sell Your Product -->
  <section class="bg-gray-100 py-16 px-6">
    <div class="max-w-6xl mx-auto">
      <h3 class="text-sm font-semibold text-gray-500 mb-2">SUCCESS</h3>
      <h2 class="text-4xl font-bold mb-8">How We Help<br />You To Sell<br />Your Product</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p class="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!
          </p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-yellow-500 mb-4"
            >
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
              <path d="M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1" />
              <path d="M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1" />
            </svg>
            <h4 class="text-xl font-semibold mb-2">HTML5 & CSS3</h4>
            <p class="text-gray-600">
              Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis
              choro neglegentur iudico
            </p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-yellow-500 mb-4"
            >
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
            <h4 class="text-xl font-semibold mb-2">Easy to Use</h4>
            <p class="text-gray-600">
              Cu vero ipsum vim, doctus facilisi sea in. Eam ex falli honestatis repudiandae, sit
              detracto mediocrem disputationi
            </p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-yellow-500 mb-4"
            >
              <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
              <path d="M12 18h.01" />
            </svg>
            <h4 class="text-xl font-semibold mb-2">Fully Responsive</h4>
            <p class="text-gray-600">
              Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an
              pro nemore vivendum
            </p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-yellow-500 mb-4"
            >
              <path
                d="m21.66 16.37-2.37-2.37L18 15.29l2.37 2.37-1.79 1.8-9.42-9.42 1.8-1.8 2.37 2.37 1.29-1.29-2.37-2.37L14.04 5l7.62 7.62-1.79 1.8z"
              />
              <path d="m11.25 14.04-2.37-2.37-6.04 6.04 2.37 2.37 6.04-6.04z" />
              <path
                d="m14.87 10.41 2.37 2.37 1.79-1.79L14.04 6l-1.79 1.79 2.37 2.37-1.29 1.29-2.37-2.37L5 15.04l2.37 2.37 6.04-6.04"
              />
            </svg>
            <h4 class="text-xl font-semibold mb-2">Parallax Effect</h4>
            <p class="text-gray-600">
              Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an
              pro nemore vivendum
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- New Section: Companies Who Use Our Services -->
  <section class="py-16 px-6 bg-white">
    <div class="max-w-6xl mx-auto">
      <h3 class="text-sm font-semibold text-gray-500 mb-2">TRUST</h3>
      <div class="flex flex-col md:flex-row items-start">
        <div class="md:w-1/3 mb-8 md:mb-0 md:pr-8">
          <h2 class="text-4xl font-bold mb-6">Companies<br />who use our<br />services</h2>
          <p class="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!
          </p>
        </div>
        <div class="md:w-2/3 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-8">
          <div class="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-gray-400"
            >
              <path d="M17 14v6m-3-3h6M6 20h6M8 16h4M6 12h6M8 8h4M9 4h1M4 22V2" />
            </svg>
          </div>
          <div class="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-gray-400"
            >
              <path d="M8 11V7a4 4 0 0 1 8 0v4" />
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            </svg>
          </div>
          <div class="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-gray-400"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
          </div>
          <div class="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-gray-400"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M3 12h6m6 0h6" />
            </svg>
          </div>
          <div class="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-gray-400"
            >
              <path d="M14 12.74a3 3 0 1 1 5 2.5L14 20l-5-4.76a3 3 0 1 1 5-2.5" />
              <path d="M11.09 4.5a3 3 0 1 1 5 2.5L10 13 3.91 7a3 3 0 1 1 5-2.5" />
            </svg>
          </div>
          <div class="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-gray-400"
            >
              <path d="M3 6h18" />
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            </svg>
          </div>
          <div class="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-gray-400"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
          </div>
          <div class="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-gray-400"
            >
              <path
                d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"
              />
              <circle cx="7" cy="17" r="2" />
              <path d="M9 17h6" />
              <circle cx="17" cy="17" r="2" />
            </svg>
          </div>
          <div class="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-gray-400"
            >
              <path
                d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"
              />
              <path d="M10 2c1 .5 2 2 2 5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- New Section: Contact Form -->
  <section class="py-16 px-6 bg-yellow-300">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-6xl font-bold mb-8 text-center">Let's Talk</h2>
      <p class="text-xl mb-12 text-center">
        Use Below Form or Email me direct:
        <a href="mailto:contact@yourwebsite.com" class="underline">contact@yourwebsite.com</a>
      </p>
      <form class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <input type="text" placeholder="Name*" class="w-full p-3 bg-white border-none" required />
          <input
            type="email"
            placeholder="Email*"
            class="w-full p-3 bg-white border-none"
            required
          />
          <input
            type="text"
            placeholder="Subject*"
            class="w-full p-3 bg-white border-none"
            required
          />
        </div>
        <textarea
          placeholder="Message..."
          class="w-full p-3 bg-white border-none h-40"
          required
        ></textarea>
        <div class="text-center">
          <button
            type="submit"
            class="bg-black text-white px-8 py-3 font-semibold hover:bg-gray-800 transition duration-300 inline-flex items-center"
          >
            Submit Message
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="ml-2"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </form>
    </div>
  </section>

  <div class="flex flex-col w-full h-fit bg-[#374151] text-[#e5e7eb] px-9 py-16">
    <div class="flex flex-row">
      <div class="flex flex-col gap-2 justify-center w-[35%] w-[35%]">
        <div class="flex items-center w-full gap-4">
          <img
            src="https://tailwind-generator.b-cdn.net/favicon.png"
            width="86"
            alt="Logo Preview"
          />
          <div class="text-2xl">Your Company</div>
        </div>
        <div class="grid grid-cols-3 gap-6 w-fit p-4">
          <a href="#"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current"
            >
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
              ></path></svg
          ></a>
          <a href="#"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current"
            >
              <path
                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
              ></path></svg
          ></a>
          <a href="#"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current"
            >
              <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
              ></path></svg
          ></a>
        </div>
      </div>
      <div class="flex flex-row w-[65%] justify-end gap-16 text-nowrap">
        <div class="grid grid-cols-3 gap-12">
          <div class="flex flex-col gap-2">
            <div class="font-bold uppercase text-[#9ca3af] pb-3">Explore</div>
            <a href="#xxx" class="hover:underline">Features</a>
            <a href="#xxx" class="hover:underline">Docs</a>
            <a href="#xxx" class="hover:underline">Pricing</a>
            <a href="#xxx" class="hover:underline">Security</a>
          </div>
          <div class="flex flex-col gap-2">
            <div class="font-bold uppercase text-[#9ca3af] pb-3">Comany</div>
            <a href="#xxx" class="hover:underline">About Us</a>
            <a href="#xxx" class="hover:underline">Contact</a>
            <a href="#xxx" class="hover:underline">Support</a>
            <a href="#xxx" class="hover:underline">News</a>
          </div>
          <div class="flex flex-col gap-2">
            <div class="font-bold uppercase text-[#9ca3af] pb-3">Legal</div>
            <a href="#xxx" class="hover:underline">Imprint</a>
            <a href="#xxx" class="hover:underline">Privacy Policy</a>
            <a href="#xxx" class="hover:underline">Terms of Use</a>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full border-t border-gray-500 my-8"></div>
    <div class="text-center">© 2024 Your Companys - All rights reserved.</div>
  </div>
</template>
