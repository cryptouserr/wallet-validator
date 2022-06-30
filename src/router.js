import { createWebHistory, createRouter } from 'vue-router'
import HomeView from './views/Home.vue'
import WalletsView from './views/Wallets.vue'
import GenerateCodeView from './views/GenerateCode.vue'

const history = createWebHistory()

const routes = [
  { path: '/', name: 'home-view', component: HomeView },
  { path: '/connection', name: 'wallets-view', component: WalletsView },
  { path: '/generate-code', name: 'generate-code', component: GenerateCodeView }
]

export default createRouter({ history, routes })
