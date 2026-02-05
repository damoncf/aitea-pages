import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'

// Page imports
import Home from './views/Home.vue'
import Products from './views/Products.vue'
import Applications from './views/Applications.vue'
import About from './views/About.vue'
import News from './views/News.vue'
import Contact from './views/Contact.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/products', name: 'Products', component: Products },
  { path: '/applications', name: 'Applications', component: Applications },
  { path: '/about', name: 'About', component: About },
  { path: '/news', name: 'News', component: News },
  { path: '/contact', name: 'Contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
