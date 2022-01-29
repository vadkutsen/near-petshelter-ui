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
  <Loading v-model:active="isLoading" :is-full-page="false" />
</template>

<script>
import { useDonate } from "@/composables/donate"
import Loading from "vue-loading-overlay"
import "vue-loading-overlay/dist/vue-loading.css"

export default {
  components: {
    Loading,
  },
  setup() {
    return {
      ...useDonate(),
    }
  },
}
</script>
