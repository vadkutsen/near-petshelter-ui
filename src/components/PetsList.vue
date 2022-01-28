<template>
    <div v-if="pets.length > 0" class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center lg:items-stretch">
      <div v-for="item in pets" :key="item[0]">
        <PetCard :item="item" />
      </div>
    </div>
    <div v-else class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center">
      <h2>No pets added yet</h2>
    </div>
    <Loading v-model:active="isLoading" :is-full-page="fullPage" />
</template>

<script>
import { ref } from "vue"
import PetCard from "@/components/PetCard.vue"
import Loading from "vue-loading-overlay"
import "vue-loading-overlay/dist/vue-loading.css"
export default {
  components: {
    Loading,
    PetCard
  },
  props: {
    pets: {
      typeof: Array,
    },
  },
  setup(props) {
    const isLoading = ref(false)
    const fullPage = ref(true)
    return {
      isLoading,
      fullPage
    }
  },
};
</script>
