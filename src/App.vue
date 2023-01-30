
<script setup>
import Menu from "./components/Menu.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div id="app-wrapper" class="min-w-full min-h-screen bg-skin-color p-5">
    <div id="page-wrapper" class="border border-slate-900 min-w-full min-h-full h-full p-12">

      <!-- Global Menu -->
      <Menu/>

      <!-- View -->
      <main id="page-content-wrapper" class="my-16">
        <router-view></router-view>
      </main>

      <!-- Footer -->
      <Footer/>

    </div>
  </div>
</template>
