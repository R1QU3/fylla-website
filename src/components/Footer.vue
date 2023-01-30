<template>
  <footer class="font-roboto">
    <div class="grid sm:grid-cols-3 xl:grid-cols-5 gap-12 border-y border-slate-900 py-16 min-h-medium">
      <div class="flex flex-col md:flex-row xl:flex-col md:items-center xl:items-start justify-between col-span-full xl:col-span-2 xl:border-r border-slate-900">
        <div>
          <img src="../assets/fyllaLogo.svg" alt="Logo" class="mb-8">
          <p>
            Main Street. 1
          </p>
          <p>
            22222 Berlin
          </p>
        </div>
        <div class="flex gap-5">
          <button class="rounded-full py-2.5 px-3 transition-all border border-slate-900 hover:bg-slate-900 hover:text-white">LN</button>
          <button class="rounded-full py-2.5 px-3 transition-all border border-slate-900 hover:bg-slate-900 hover:text-white">IN</button>
          <button class="rounded-full py-2.5 px-3 transition-all border border-slate-900 hover:bg-slate-900 hover:text-white">FB</button>
        </div>
      </div>

      <!-- Pages section -->
      <div>
        <h3 class="text-2xl">
          Pages
        </h3>
        <div class="flex flex-col gap-8 mt-9 justify-start items-start">
          <router-link to="/" class="uppercase">Home</router-link>
          <router-link to="/" class="uppercase">services</router-link>
          <router-link to="/" class="uppercase">studio</router-link>
          <router-link to="/" class="uppercase">Contact</router-link>
          <a href="#" class="uppercase bg-slate-900 rounded text-white py-2.5 px-4 inline-block justify-self-start">More Templates</a>
        </div>
      </div>

      <!-- CMS section -->
      <div>
        <h3 class="text-2xl">
          CMS
        </h3>
        <div class="flex flex-col gap-8 mt-9 justify-start items-start">
          <router-link to="/" class="uppercase">Work</router-link>
          <router-link to="/" class="uppercase">Work Single</router-link>
          <router-link to="/" class="uppercase">Blog</router-link>
          <router-link to="/" class="uppercase">Blog Post</router-link>
          <router-link to="/" class="uppercase">Shop</router-link>
          <router-link to="/" class="uppercase">Shop Single</router-link>
        </div>
      </div>

      <!-- Utility section -->
      <div>
        <h3 class="text-2xl">
          Utility Pages
        </h3>
        <div class="flex flex-col gap-8 mt-9 justify-start items-start">
          <router-link to="/" class="uppercase">404 Error Page</router-link>
          <router-link to="/" class="uppercase">Password Protected</router-link>
          <router-link to="/" class="uppercase">Styleguide</router-link>
          <router-link to="/" class="uppercase">Licensing</router-link>
          <router-link to="/" class="uppercase">Changelog</router-link>
        </div>
      </div>
      
    </div>
    <div class="mt-8 flex flex-col gap-3 sm:flex-row justify-between items-center">
      <p class="uppercase">
        © 2022 Made by Pawel Gola. Powered by Webflow.
      </p>
      <div class="flex gap-4">
        <a href="#" class="uppercase underline">
          Privacy
        </a>
        <a href="#" class="uppercase underline">
          Imprint
        </a>
      </div>
    </div>
  </footer>
</template>