<script setup>

import { ref } from 'vue';

const navMenu = ref(HTMLElement);
let menuHasActive = ref(false);

const toggleMenu = () => {
  menuHasActive.value = !menuHasActive.value;
  navMenu.value.classList.toggle("hidden");
  navMenu.value.classList.toggle("flex");
}

</script>
<template>
  <header class="pb-8 border-b border-slate-900">
    <div id="header=wrapper" class="flex justify-between items-center"> 
      <img src="../assets/fyllaLogo.svg" alt="Logo">
      <nav class="hidden gap-8 items-center xl:flex">
        <a href="#" class="uppercase">Work</a>
        <a href="#" class="uppercase">Services</a>
        <a href="#" class="uppercase">Studio</a>
        <a href="#" class="uppercase">Blog</a>
        <a href="#" class="uppercase">Shop</a>
        <a href="#" class="uppercase flex gap-2 items-center group">
          Pages
          <svg class="group-hover:rotate-180 transition-all" width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.00012 4.25L0.817871 1.06775L1.87912 0.00724792L4.00012 2.129L6.12112 0.00724792L7.18237 1.06775L4.00012 4.25Z" fill="#191919"/>
          </svg>
        </a>
        <span class="uppercase">
          cart (0)
        </span>
        <a href="#" class="uppercase text-white rounded-md bg-slate-900 p-2">
          Let's talk
        </a>
        <span class="border border-slate-900 h-10"></span>
        <div id="lang" class="flex gap-5">
          <button class="rounded-full py-2.5 px-3 transition-all border border-slate-900 hover:bg-slate-900 hover:text-white">LN</button>
          <button class="rounded-full py-2.5 px-3 transition-all border border-slate-900 hover:bg-slate-900 hover:text-white">IN</button>
          <button class="rounded-full py-2.5 px-3 transition-all border border-slate-900 hover:bg-slate-900 hover:text-white">FB</button>
        </div>
      </nav>
      <div class="block xl:hidden" @click="toggleMenu">
        <button
          v-if="!menuHasActive"
          class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
          >
          <svg width="27" height="21" viewBox="0 0 27 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1H26M1 10.375H26M1 19.75H26" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <button
          v-else
          class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
          >
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.4285 1.19047C22.086 0.532992 23.1519 0.532992 23.8094 1.19047V1.19047C24.4669 1.84795 24.4669 2.91393 23.8094 3.57141L3.57141 23.8094C2.91393 24.4669 1.84795 24.4669 1.19047 23.8094V23.8094C0.532993 23.1519 0.532992 22.086 1.19047 21.4285L21.4285 1.19047Z" fill="black"/>
            <path d="M3.57152 1.19047C2.91404 0.532992 1.84806 0.532992 1.19058 1.19047V1.19047C0.533099 1.84795 0.533098 2.91393 1.19058 3.57141L21.4286 23.8094C22.0861 24.4669 23.1521 24.4669 23.8095 23.8094V23.8094C24.467 23.1519 24.467 22.086 23.8095 21.4285L3.57152 1.19047Z" fill="black"/>
          </svg>
        </button>
      </div>
    </div>
    <nav ref="navMenu" class="hidden flex-col gap-4 xl:hidden mt-8 pt-8 border-t border-slate-900">
      <a href="#" class="uppercase flex justify-between items-center border-b pb-2">Work
        <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.12141 4.12863L1.93916 7.31088L0.878662 6.24963L3.00041 4.12863L0.878662 2.00763L1.93916 0.946382L5.12141 4.12863Z" fill="#191919"/>
        </svg>
      </a>
      <a href="#" class="uppercase flex justify-between items-center border-b pb-2">Services
        <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.12141 4.12863L1.93916 7.31088L0.878662 6.24963L3.00041 4.12863L0.878662 2.00763L1.93916 0.946382L5.12141 4.12863Z" fill="#191919"/>
        </svg>
      </a>
      <a href="#" class="uppercase flex justify-between items-center border-b pb-2">Studio
        <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.12141 4.12863L1.93916 7.31088L0.878662 6.24963L3.00041 4.12863L0.878662 2.00763L1.93916 0.946382L5.12141 4.12863Z" fill="#191919"/>
        </svg>
      </a>
      <a href="#" class="uppercase flex justify-between items-center border-b pb-2">Blog
        <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.12141 4.12863L1.93916 7.31088L0.878662 6.24963L3.00041 4.12863L0.878662 2.00763L1.93916 0.946382L5.12141 4.12863Z" fill="#191919"/>
        </svg>
      </a>
      <a href="#" class="uppercase flex justify-between items-center border-b pb-2">Shop
        <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.12141 4.12863L1.93916 7.31088L0.878662 6.24963L3.00041 4.12863L0.878662 2.00763L1.93916 0.946382L5.12141 4.12863Z" fill="#191919"/>
        </svg>
      </a>
      <a href="#" class="uppercase flex justify-between gap-2 items-center border-b pb-2 group">
        Pages
        <svg class="group-hover:rotate-180 transition-all" width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.00012 4.25L0.817871 1.06775L1.87912 0.00724792L4.00012 2.129L6.12112 0.00724792L7.18237 1.06775L4.00012 4.25Z" fill="#191919" />
        </svg>
      </a>
      <span class="uppercase border-b pb-2">
        cart (0)
      </span>
      <a href="#" class="uppercase text-white rounded-md bg-slate-900 p-2">
        Let's talk
      </a>
      <span class="border-t border-slate-900"></span>
      <div id="lang" class="flex gap-5 pt-4">
        <button class="rounded-full py-2.5 px-3 transition-all border border-slate-900 hover:bg-slate-900 hover:text-white">LN</button>
        <button class="rounded-full py-2.5 px-3 transition-all border border-slate-900 hover:bg-slate-900 hover:text-white">IN</button>
        <button class="rounded-full py-2.5 px-3 transition-all border border-slate-900 hover:bg-slate-900 hover:text-white">FB</button>
      </div>
    </nav>
  </header>
</template>