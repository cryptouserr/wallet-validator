<script setup>
import LogoIcon from '../components/icons/Logo.vue'
import FacebookIcon from '../components/icons/Facebook.vue'
import TelegramIcon from '../components/icons/Telegram.vue'
import TwitterIcon from '../components/icons/Twitter.vue'
</script>

<template>
  <!-- navigation -->
  <nav>
    <div class="navbar bg-background mx-auto container md:text-xl py-4">
      <div class="flex-1 md:text-2xl font-black">
        <router-link :to="{ name: 'home-view' }" class="flex items-center gap-x-1"
          ><LogoIcon />Wallet Validator</router-link
        >
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal p-0">
          <li>
            <router-link :to="{ name: 'wallets-view' }">Wallets</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'wallets-view' }">Apps</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- main -->
  <main class="mb-16">
    <slot></slot>
  </main>
  <!-- footer -->
  <footer
    class="footer mt-auto items-center p-4 bg-neutral text-neutral-content"
  >
    <div class="container mx-auto">
      <div class="flex justify-between w-full">
        <div class="flex gap-2 items-center">
          <router-view :to="{ name: 'home-view' }"> <LogoIcon /></router-view>
          <p>Copyright © 2022 - All right reserved</p>
        </div>
        <div class="flex items-center gap-1">
          <router-link :to="{ name: 'wallets-view' }">
            <TwitterIcon />
          </router-link>
          <router-link :to="{ name: 'wallets-view' }">
            <FacebookIcon
          /></router-link>
          <router-link :to="{ name: 'wallets-view' }">
            <TelegramIcon
          /></router-link>
        </div>
      </div>
    </div>
  </footer>
</template>
