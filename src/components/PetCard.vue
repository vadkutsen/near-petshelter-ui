<template>
  <div class="relative">
          <h3 class="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
            {{pet.name}}
          </h3>
        </div>
</template>

<script>

export default {
setup(props) {
    return {
      pet: props.pet
    }
  },
}
</script>

<style>

</style>