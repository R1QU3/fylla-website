import { createApp } from 'vue'
import '../dist/output.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

// Pages
import Home from './view/Home.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    }
  ]
})

const app = createApp(App);
app.use(router)
app.mount('#app')
