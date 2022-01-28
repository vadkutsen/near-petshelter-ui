<template>
  <div class="max-w-sm bg-white rounded overflow-hidden shadow-lg h-full " id="pet-card">
    <div class="col-sm-6 col-md-4 col-lg-3">
      <div class="panel panel-default panel-pet">
        <div class="panel-body">
          <img class="w-full" :src="item[1].picture" />
          <div class="font-bold text-xl mb-2">{{ item[1].name }}</div>
          <strong>Breed</strong>:
          <span class="pet-breed">{{ item[1].breed }}</span
          ><br />
          <strong>Age</strong>:
          <span class="pet-age">{{ item[1].age }}</span
          ><br />
          <strong>Location</strong>:
          <span class="pet-location">{{ item[1].location }}</span
          ><br />
          <div v-if="!item[1].adopter">
            <button
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2"
              type="button"
              @click.prevent="handleAdopt(item[0])"
              :disabled='disabled'
            >
              Adopt
            </button>
          </div>
          <div v-else>
            <strong>Adopter</strong>:
            <span class="pet-adopter">{{ item[1].adopter }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Loading v-model:active="isLoading" :is-full-page="fullPage" />
</template>

<script>
import { adopt } from "@/services/near"
import { ref } from "vue"
import Loading from "vue-loading-overlay"
import "vue-loading-overlay/dist/vue-loading.css"
export default {
  components: {
    Loading,
  },
  props: {
    item: {
      typeof: Array,
    },
  },
  setup() {
    const disabled = ref(false)
    const err = ref(null)
    const isLoading = ref(false)
    const fullPage = ref(true)
    const handleAdopt = async (petId) => {
      try {
        disabled.value = true
        isLoading.value = true
        await adopt(petId)
        isLoading.value = false
      } catch (e) {
        err.value = e;
        alert(err.value)
        disabled.value = false
        isLoading.value = false
      }
    }
    return {
      handleAdopt,
      disabled,
      isLoading,
      fullPage,
      adopt,
    }
  },
}
</script>