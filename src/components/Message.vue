<template>
   <div class="mt-4 mx-6 relative block rounded-lg border border-gray-300 bg-white shadow-sm px-6 py-6 cursor-pointer hover:border-gray-400 sm:flex sm:justify-between focus:outline-none">
                    <div class="flex items-center">
                      <div class="text-sm">
                        <RadioGroupLabel as="div" class="font-medium text-gray-900">
                          {{ item.author }}
                        </RadioGroupLabel>
                        <RadioGroupDescription as="div" class="text-gray-500">
                          {{ item.message }}
                        </RadioGroupDescription>
                      </div>
                    </div>
                    <RadioGroupDescription as="div" class="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right">
                      <div class="font-medium text-gray-900">{{ item.tip }} </div>
                    </RadioGroupDescription>
                    <div class="border-transparent absolute -inset-px rounded-lg border-2 pointer-events-none" aria-hidden="true" />
                  </div>
</template>

<script>
import {  RadioGroupDescription, RadioGroupLabel } from '@headlessui/vue'
export default {
    props: ['item'],
    setup() {
    return {
      RadioGroupDescription,
      RadioGroupLabel,
    }
  },
}
</script>

<style>

</style>