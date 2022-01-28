<template>
  <div id="nav" class="py-4 p-0 flex justify-end">
    <h2 class="mt-4 max-w-3xl mx-auto text-xl"><strong>ADOPT ME</strong></h2>
    <h2 class="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">Total Donated: {{donations/1000000000000000000000000}} Ⓝ</h2>
    <div class="flex w-1/2 justify-end items-center list-none">
      <DonateForm />
      <!-- <form v-if="accountId" @submit.prevent="handleDonate" class="flex w-1/2 justify-end items-center list-none">
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
      </form> -->
      <button
        v-if="accountId"
        class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-2"
        @click="toggleModal"
      >
        <PlusIcon class="w-6 h-6 text-black-500" />
      </button>
      <Login />
    </div>
  </div>
  <div v-if="showModal">
    <div
      class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
    >
      <div class="relative w-auto my-6 mx-auto max-w-6xl">
        <!--content-->
        <div
          class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
        >
          <!--header-->
          <div
            class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t"
          >
            <h3 class="text-3xl font-semibold">
              Add a Pet
            </h3>
            <button
              class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              @click="toggleModal"
            >
              <span
                class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"
              >
                ×
              </span>
            </button>
          </div>
          <!--body-->
          <form @submit.prevent="handleSubmit">
            <div class="relative p-6 flex-auto">
              <div class="col-span-1 lg:col-span-6">
                <div class="mb-4 px-2 w-full">
                  <label class="block mb-1 text-sm" for="name">Name</label>
                  <input
                    id="name"
                    v-model="form.name"
                    class="form-control w-full border px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none"
                    type="text"
                    autofocus
                    placeholder="Pet name..."
                    required
                  />
                </div>
                <div class="mb-4 px-2 w-full">
                  <label class="block mb-1 text-sm" for="picture"
                    >Image Link</label
                  >
                  <span
                    ><small
                      ><i
                        >*Please upload an image to IPFS or another host first
                        and then paste a link here.</i
                      ></small
                    ></span
                  >
                  <input
                    id="picture"
                    v-model="form.picture"
                    class="w-full border px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none"
                    type="text"
                    placeholder="Pet's image link..."
                    required
                  />
                </div>
                <div class="mb-4 px-2 w-full">
                  <label class="block mb-1 text-sm" for="age">Age</label>
                  <input
                    id="age"
                    v-model="form.age"
                    class="w-full border px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none"
                    type="number"
                    placeholder="Pet age..."
                    min="0"
                    required
                  />
                </div>
                <div class="mb-4 px-2 w-full">
                  <label class="block mb-1 text-sm" for="breed">Breed</label>
                  <input
                    id="breed"
                    v-model="form.breed"
                    class="w-full border px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none"
                    type="text"
                    placeholder="Pet breed..."
                    required
                  />
                </div>
                <div class="mb-4 px-2 w-full">
                  <label class="block mb-1 text-sm" for="location"
                    >Location</label
                  >
                  <input
                    id="location"
                    v-model="form.location"
                    class="w-full border px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none"
                    type="text"
                    placeholder="Location..."
                    required
                  />
                </div>
              </div>
            </div>
            <!--footer-->
            <div
              class="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b"
            >
              <button
                class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                v-on:click="toggleModal"
              >
                Cancel
              </button>
              <button
                class="text-green-500 bg-transparent border border-solid border-green-500 hover:bg-green-500 hover:text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="submit"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </div>
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
      <Loading v-model:active="isLoading" :is-full-page="fullPage" />
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
</template>

<script>
import { wallet } from "@/services/near"
import Login from "@/components/Login.vue"
import Header from "@/components/Header.vue"
import PetsList from "@/components/PetsList.vue"
import DonateForm from "@/components/DonateForm.vue"
import Loading from "vue-loading-overlay"
import "vue-loading-overlay/dist/vue-loading.css"
import { getPets, addPet, getDonations, donate } from "@/services/near"
import { PlusIcon } from "@heroicons/vue/outline"
import { onMounted, ref, reactive } from "vue"

export default {
  components: {
    Header,
    PlusIcon,
    PetsList,
    DonateForm,
    Login,
    Loading,
  },
  setup() {
    const accountId = wallet.getAccountId()
    const showModal = ref(false)
    const isLoading = ref(false)
    const fullPage = ref(true)
    const donations = ref(0)
    const pets = ref([])
    const err = ref(null)
    const form = reactive({
      name: "",
      picture: "",
      age: 0,
      breed: "",
      location: "",
    })
    onMounted(async () => {
      isLoading.value = true;
      try {
        donations.value = await getDonations()
        pets.value = await getPets()
        isLoading.value = false
      } catch (e) {
        err.value = e
        alert(err.value)
        isLoading.value = false
      }
    })
    const toggleModal = () => {
      showModal.value = !showModal.value
    }
    const handleSubmit = async () => {
      const pet = {
        name: form.name.trim(),
        picture: form.picture.trim(),
        age: form.age,
        breed: form.breed.trim(),
        location: form.location.trim(),
      }
      isLoading.value = true
      try {
        await addPet(pet)
        toggleModal()
        pets.value = await getPets()
        isLoading.value = false
      } catch (e) {
        err.value = e
        alert(err.value)
        isLoading.value = false
      }
    }
    // const handleDonate = async () => {
    //   isLoading.value = true
    //   try {
    //     await donate(donation.value)
    //     isLoading.value = false
    //   } catch (e) {
    //     err.value = e
    //     alert(err.value)
    //     console.log(err.value)
    //     isLoading.value = false
    //   }
    // }
    return {
      accountId,
      pets,
      addPet,
      showModal,
      isLoading,
      fullPage,
      form,
      toggleModal,
      handleSubmit,
      donations,
    }
  },
}
</script>
