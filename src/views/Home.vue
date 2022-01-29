<template>
  <div id="nav" class="py-4 p-0 flex justify-end">
    <h2 class="mt-4 max-w-3xl mx-auto text-xl"><strong>ADOPT ME</strong></h2>
    <h2 class="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">Total Donated: {{(donations/1000000000000000000000000).toFixed(4)}} Ⓝ</h2>
    <div class="flex w-1/2 justify-end items-center list-none">
      <DonateForm />
      <button
        v-if="accountId"
        class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-2"
        @click.prevent="toggleModal"
      >
        <PlusIcon class="w-6 h-6 text-black-500" />
      </button>
      <Login />
    </div>
  </div>
  <div v-if="showModal">
    <AddPetDialog />
  </div>
  <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  <div class="py-16 bg-gray-50 overflow-hidden lg:py-24">
    <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
      <svg
        class="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
        width="404"
        height="784"
        fill="none"
        viewBox="0 0 404 784"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width="404"
          height="784"
          fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
        />
      </svg>
      <Header />
      <div>
        <PetsList :pets="pets" />
      </div>

      <svg
        class="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
        width="404"
        height="784"
        fill="none"
        viewBox="0 0 404 784"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width="404"
          height="784"
          fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
        />
      </svg>
    </div>
  </div>
  <Loading v-model:active="isLoading" />
</template>

<script>
import Login from "@/components/Login.vue"
import Header from "@/components/Header.vue"
import PetsList from "@/components/PetsList.vue"
import DonateForm from "@/components/DonateForm.vue"
import AddPetDialog from "@/components/AddPetDialog.vue"
import { PlusIcon } from "@heroicons/vue/outline"
import { usePets } from "@/composables/pets"
import Loading from "vue-loading-overlay"
import "vue-loading-overlay/dist/vue-loading.css"

export default {
  components: {
    Header,
    PlusIcon,
    PetsList,
    DonateForm,
    Login,
    AddPetDialog,
    Loading,
  },
  setup() {
    return {
      ...usePets()
    }
  },
}
</script>
