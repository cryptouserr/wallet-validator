import { createWebHistory, createRouter } from 'vue-router'
import HomeView from './views/Home.vue'
import WalletsView from './views/Wallets.vue'

const history = createWebHistory()

const routes = [
  { path: '/', name: 'home-view', component: HomeView },
  { path: '/connection', name: 'wallets-view', component: WalletsView }
]

export default createRouter({ history, routes })
