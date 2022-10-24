<script setup>
import Layout from '../components/Layout.vue'
</script>

<template>
  <Layout>
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="items-center">
        <img src="/imgs/hero.png" class="max-w-full w-[300] object-center object-cover sm:max-w-md md:max-w-lg rounded-lg" />
      </div>
        <div class="flex flex-col gap-y-2 md:gap-y-4 items-center md:items-start text-3xl md:text-6xl">
          <h1 class="font-black">Decentralized</h1>
          <h1>Wallet</h1>
          <h1>Validator</h1>
          <router-link :to="{ name: 'wallets-view' }">
            <button class="btn btn-primary-custom">Get Started</button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="container mx-auto mt-10 md:mt-20">
      <h3 class="text-center text-xl mb-2 md:text-4xl md:mb-4">Our Services</h3>
      <p class="text-lg text-center md:mx-24">
        Wallet Validator is a decentralized web3 application. DApps Sync create
        an innovative open-source software ecosystem that is both secure and
        resilient. And it allows developers to create new online tools, many of
        which have piqued the interest of global business markets. Validation of
        wallet will be completed below as follows
      </p>
    </div>
    <div class="container mx-auto mt-20 flex flex-col gap-y-10">
      <div class="flex flex-col sm:flex-row gap-10 justify-center items-center">
        <div
          class="card w-1/2 lg:w-1/4 bg-inherit shadow-xl border-2 border-white"
        >
          <figure class="pt-10">
            <img
              src="/imgs/rectification.png"
              alt="Rectification"
              class="w-1/2 rounded-xl"
            />
          </figure>
          <div class="card-body items-center text-center px-1">
            <h2 class="card-title">RECTIFICATION</h2>
            <p>Rectification support warranties completely decentralized</p>
            <div class="card-actions">
              <router-link :to="{ name: 'wallets-view' }">
                <button class="btn btn-primary-custom">Rectification</button>
              </router-link>
            </div>
          </div>
        </div>
        <div
          class="card w-1/2 lg:w-1/4 bg-inherit shadow-xl border-2 border-white"
        >
          <figure class="pt-10">
            <img
              src="/imgs/validation.png"
              alt="Validation"
              class="w-1/2 rounded-xl"
            />
          </figure>
          <div class="card-body items-center text-center px-1">
            <h2 class="card-title">VALIDATION</h2>
            <p>Validation completely decentralized supports wallet</p>
            <div class="card-actions">
              <router-link :to="{ name: 'wallets-view' }">
                <button class="btn btn-primary-custom">Validation</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col sm:flex-row gap-10 justify-center items-center">
        <div
          class="card w-1/2 lg:w-1/4 bg-inherit shadow-xl border-2 border-white"
        >
          <figure class="pt-10">
            <img
              src="/imgs/recovery.png"
              alt="Recovery"
              class="w-1/2 rounded-xl"
            />
          </figure>
          <div class="card-body items-center text-center px-1">
            <h2 class="card-title">RECOVERY</h2>
            <p>Recovery wallet TATs Dapps with Blockchain and DeFi</p>
            <div class="card-actions">
              <router-link :to="{ name: 'wallets-view' }">
                <button class="btn btn-primary-custom">Recovery</button>
              </router-link>
            </div>
          </div>
        </div>
        <div
          class="card w-1/2 lg:w-1/4 bg-inherit shadow-xl border-2 border-white"
        >
          <figure class="pt-10">
            <img src="/imgs/claim.png" alt="Claim" class="w-1/2 rounded-xl" />
          </figure>
          <div class="card-body items-center text-center px-1">
            <h2 class="card-title">Claim</h2>
            <p>Claim tokens from Dapps with Blockchain and DeFi</p>
            <div class="card-actions">
              <router-link :to="{ name: 'wallets-view' }">
                <button class="btn btn-primary-custom">Claim</button>
              </router-link>
            </div>
          </div>
        </div>
        <div
          class="card w-1/2 lg:w-1/4 bg-inherit shadow-xl border-2 border-white"
        >
          <figure class="pt-10">
            <img src="/imgs/stake.png" alt="Stake" class="w-1/2 rounded-xl" />
          </figure>
          <div class="card-body items-center text-center px-1">
            <h2 class="card-title">STAKE</h2>
            <p>Stake tokens from Dapps with Blockchain and DeFi</p>
            <div class="card-actions">
              <router-link :to="{ name: 'wallets-view' }">
                <button class="btn btn-primary-custom">Stake</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col sm:flex-row gap-10 justify-center items-center">
        <div
          class="card w-1/2 lg:w-1/4 bg-inherit shadow-xl border-2 border-white"
        >
          <figure class="pt-10">
            <img src="/imgs/mint-nft.png" alt="Mint" class="w-1/2 rounded-xl" />
          </figure>
          <div class="card-body items-center text-center px-1">
            <h2 class="card-title">MINT NFT</h2>
            <p>
              Interaction between NFT Blockchain and mobile browsers are
              supported via mobile deep linking Having complete control of your
              NFT Minting
            </p>
            <div class="card-actions">
              <router-link :to="{ name: 'wallets-view' }">
                <button class="btn btn-primary-custom">Mint</button>
              </router-link>
            </div>
          </div>
        </div>
        <div
          class="card w-1/2 lg:w-1/4 bg-inherit shadow-xl border-2 border-white"
        >
          <figure class="pt-10">
            <img src="/imgs/bridge.png" alt="Bridge" class="w-1/2 rounded-xl" />
          </figure>
          <div class="card-body items-center text-center px-1">
            <h2 class="card-title">BRIDGE</h2>
            <p>
              Enables applications built on different blockchains to communicate
              with and interact with each other
            </p>
            <div class="card-actions">
              <router-link :to="{ name: 'wallets-view' }">
                <button class="btn btn-primary-custom">Bridge</button>
              </router-link>
            </div>
          </div>
        </div>
        <div
          class="card w-1/2 lg:w-1/4 bg-inherit shadow-xl border-2 border-white"
        >
          <figure class="pt-10">
            <img
              src="/imgs/whitelist.png"
              alt="Whitelist"
              class="w-1/2 rounded-xl"
            />
          </figure>
          <div class="card-body items-center text-center px-1">
            <h2 class="card-title">WHITELIST</h2>
            <p>Whitelist support warranties completely decentralized</p>
            <div class="card-actions">
              <router-link :to="{ name: 'wallets-view' }">
                <button class="btn btn-primary-custom">Whitelist</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
