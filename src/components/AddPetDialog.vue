<template>
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
              Add New Pet
            </h3>
          </div>
          <!--body-->
          <form @submit.prevent="handleAddPet">
            <div class="relative p-6 flex-auto">
              <div class="col-span-1 lg:col-span-6">
                <div class="mb-4 px-2 w-full">
                  <label class="block mb-1 text-sm" for="name">Name</label>
                  <input
                    id="name"
                    v-model="form.name"
                    class="form-control w-full border px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none"
                    type="text"
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
                @click.prevent="toggleModal"
              >
                Cancel
              </button>
              <button
                class="text-indigo-700 bg-transparent border border-solid border-indigo-700 hover:bg-indigo-700 hover:text-white active:bg-indigo-700 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="submit"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Loading v-model:active="isLoading" :is-full-page="false" />
</template>

<script>
import { usePets } from "@/composables/pets"
import Loading from "vue-loading-overlay"
import "vue-loading-overlay/dist/vue-loading.css"

export default {
  components: {
    Loading
  },
  setup() {
    return {
      ...usePets(),
    }
  },
}
</script>
