<template>
  <div class="px-5 flex w-1/2 justify-end items-center">
      <button v-if="!this.$props.isSignedIn" @click="$emit('signIn')" class="self-end rounded-3xl  py-3 px-10 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Login
      </button>
      <div v-else>
          <div class="flex items-center justify-between">
            <div class="flex items-center justify-center h-12 w-36 rounded-md bg-indigo-500 text-white mx-2">
              <UserIcon  class="w-6 h-6 text-black-500"/>
              <h4 class="mr-2">{{accountName}}</h4>
            </div>
            <div class="flex items-center justify-center h-12 w-32 rounded-md bg-indigo-500 text-white mx-2">
              <CashIcon  class="w-6 h-6 text-black-500 mx-2"/>
              <h4>{{getBalance}}</h4>
              <span class="mx-1 text-white-500 font-bold sm:text-sm ">
                        Ⓝ
                </span>
            </div>
             <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-2">
                 <LogoutIcon class="w-6 h-6 text-black-500" @click="$emit('signOut')"/>
            </div>
          </div>      
      </div>
    </div>
</template>

<script>
import { UserIcon, CashIcon, LogoutIcon} from '@heroicons/vue/outline'
export default {
    components: {
        UserIcon,
        CashIcon,
        LogoutIcon
    },
    props:{
        isSignedIn: {
            typeof:Boolean,
            required:true
        },
        accountName: {
            typeof:String,
            required:false
        },
        balance: {
            typeof:Number,
            required: false
        }
    },
    computed: {
        getBalance () {
            return (this.balance/1000000000000000000000000).toFixed(5)
        }
    }
}
</script>

<style>

</style>