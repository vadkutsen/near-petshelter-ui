<template>
  <form>
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="text-left pb-6">
                <p class="text-lg leading-6 font-medium text-gray-700">
                Record your message on the blockchain
                </p>
                <p class="mt-2 text-base text-gray-500">
                No better way to say "Thanks!" than to make it permanent.
                </p>
                <p class="mt-2 text-base text-gray-500">
                  You can do that right here.
                </p>
              </div>
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6">
                  <label for="message" class="sr-only">Your message</label>
                  <textarea rows="4" name="message" id="message" autocomplete="message" placeholder="Your message" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div class="col-span-6 sm:col-span-6 lg:col-span-3">
                  <label for="tip" class="sr-only">Tip</label>
                  <div class="mt-1 relative rounded-md shadow-sm">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span class="text-gray-500 sm:text-sm">
                        Ⓝ
                      </span>
                    </div>
                    <input type="text" name="tip" id="tip" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="0" aria-describedby="message-tip" />
                    <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <span class="text-gray-500 sm:text-sm" id="message-tip">
                        NEAR
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col-span-6 sm:col-span-6 lg:col-span-3">
                  <button type="submit" class="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Say Thanks
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
</template>

<script>
export default {
}
</script>

<style>

</style>