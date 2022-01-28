<template>
  <form
    v-if="accountId"
    @submit.prevent="handleDonate"
    class="flex w-1/2 justify-end items-center list-none"
  >
    <input
      v-model="donation"
      id="donation"
      class="form-control border px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none"
      type="number"
      placeholder="1 NEAR"
      min="0.01"
      step="0.01"
      required
    />
    <button
      class="flex items-center justify-center h-12 w-40 rounded-md bg-indigo-500 text-white mx-2"
      type="submit"
    >
      <h4 class="mr-2">Donate Ⓝ</h4>
    </button>
  </form>
  <Loading v-model:active="isLoading" :is-full-page="fullPage" />
</template>

<script>
import { donate, wallet } from "@/services/near"
import { ref } from "vue"
import Loading from "vue-loading-overlay"
import "vue-loading-overlay/dist/vue-loading.css"

export default {
  components: {
    Loading,
  },
  setup() {
    const accountId = wallet.getAccountId()
    const donation = ref(null)
    const disabled = ref(false)
    const err = ref(null)
    const isLoading = ref(false)
    const fullPage = ref(true)
    const handleDonate = async () => {
      isLoading.value = true
      try {
        await donate(donation.value)
        isLoading.value = false
      } catch (e) {
        err.value = e
        alert(err.value)
        console.log(err.value)
        isLoading.value = false
      }
    }
    return {
      accountId,
      handleDonate,
      disabled,
      isLoading,
      fullPage,
      donation
    }
  },
}
</script>
