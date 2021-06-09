<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="py-16 bg-gray-50 overflow-hidden lg:py-24">
    <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
      <svg class="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
        <defs>
          <pattern id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="784" fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
      </svg>

      <div class="relative">
        <h2 class="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          A better way to say "Thanks!"
        </h2>
        <p class="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
          This application lets you say thanks on the blockchain.  <br>
          That means it's permanent, verifiable, and even comes with tips built-in
        </p>
      </div>

      <div class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
        <div class="relative">
          <h3 class="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
            Say "Thanks!" like you mean it.
          </h3>
          <p class="mt-3 text-lg text-gray-500">
            There's always a good reason to say thank you to others.  Whether someone helped you save some time, correct a mistake, learn something new or develop an idea ... just say "Thanks!".
          </p>

          <dl class="mt-10 space-y-10">
            <div v-for="item in transferFeatures" :key="item.id" class="relative">
              <dt>
                <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-700">{{ item.name }}</p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                {{ item.description }}
              </dd>
            </div>
          </dl>
        </div>
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
    </div>

      <svg class="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
        <defs>
          <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="784" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
      </svg>

      <div class="relative mt-12 sm:mt-16 lg:mt-24">
        <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div class="lg:col-start-2">
            <h3 class="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              Learn to build this yourself!
            </h3>
            <p class="mt-3 text-lg text-gray-500">
              Check out <a href="https://near.university" class="text-blue-500">near.university</a> to learn how to build this decentralized app.
            </p>

            <dl class="mt-10 space-y-10">
              <div v-for="item in communicationFeatures" :key="item.id" class="relative">
                <dt>
                  <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p class="ml-16 text-lg leading-6 font-medium text-gray-700">{{ item.name }}</p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500">
                  {{ item.description }}
                </dd>
              </div>
            </dl>
          </div>

          <div class="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
            <RadioGroup>
              <RadioGroupLabel class="sr-only">
                Message History
              </RadioGroupLabel>
              <div>
                <RadioGroupOption v-for="item in items" :key="item.id">
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
                </RadioGroupOption>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AnnotationIcon, LightningBoltIcon, AcademicCapIcon, DesktopComputerIcon } from '@heroicons/vue/outline'
import { RadioGroup, RadioGroupDescription, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'

const transferFeatures = [
  {
    id: 1,
    name: 'Attach a custom message',
    description:
      'Attach any message to your expression of gratitude.  You can say thanks any way you like as long as it\'s under 500 characters :)',
    icon: AnnotationIcon,
  },
  {
    id: 2,
    name: 'Attach a tip using native NEAR tokens ',
    description:
      'Because money is native to blockchain, you can add a tip to your message of gratitude, up to 5 NEAR',
    icon: LightningBoltIcon,
  },
]
const communicationFeatures = [
  {
    id: 1,
    name: 'Self-paced Courses',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: DesktopComputerIcon,
  },
  {
    id: 2,
    name: 'Certifications and Awards',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: AcademicCapIcon,
  },
]

const items = [
  {
    id: 1,
    author: 'jane.near',
    message: 'Thanks for helping me with my first smart contract!',
    tip: '2 N'
  },
  {
    id: 2,
    author: 'john.near',
    message: 'Appreciate your questions in the Zoom meeting',
    tip: ''
  },
  {
    id: 3,
    author: 'mary.near',
    message: 'Loved your examples today, thank you!!!',
    tip: '10 N'
  },
  {
    id: 4,
    author: '',
    message: 'You\'re so awesome',
    tip: ''
  }
]

export default {
  setup() {
    return {
      items,
      transferFeatures,
      communicationFeatures,
      RadioGroup,
      RadioGroupDescription,
      RadioGroupLabel,
      RadioGroupOption,
    }
  },
}
</script>