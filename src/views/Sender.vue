<template>
<div id="nav" class="py-4 p-0 flex justify-end">
    <div class="flex w-1/2 justify-end items-center list-none">
    <!-- <ul class="flex">
      <li class="nav-item">
        <router-link to="/" class="px-3 py-2 flex items-center text-sm uppercase font-semibold leading-snug text-indigo-500 hover:opacity-75 active:text-black-700">Sender</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/owner" class="px-3 py-2 flex items-center text-sm uppercase font-semibold leading-snug text-indigo-500 hover:opacity-75">Owner</router-link>
      </li>
    </ul> -->
    <Login :isSignedIn='isSignedIn' :accountName='accountName' :balance='accountBalance' v-on:signIn='signIn' v-on:signOut='signOut'/>
    </div>
  </div>
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

      <Header/>

      <div class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
        <info/>
        <message-form :recipients='recipients' :isRecipientsLoaded='isRecipientsLoaded' v-on:sendMessage='sendMessage'/>
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
          <LearnSection/>

          <MessageHistory :history='history'/>
        </div>
      </div>
    </div>
  </div>

   <loading v-model:active="loading"
                 :can-cancel="true"
                 :is-full-page="fullPage"/>

</template>

<script>
import Login from '@/components/Login.vue'
import Header from '@/components/Header.vue'
import Info from '@/components/Info.vue'
import MessageForm from '@/components/MessageForm.vue'
import LearnSection from '@/components/LearnSection.vue'
import MessageHistory from '@/components/MessageHistory.vue'
import * as nearAPI from "near-api-js"
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

const { connect, keyStores, WalletConnection } = nearAPI


const config = {
  networkId: "testnet",
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  nodeUrl: "https://rpc.testnet.near.org",
  walletUrl: "https://wallet.testnet.near.org",
  helperUrl: "https://helper.testnet.near.org",
  explorerUrl: "https://explorer.testnet.near.org",
};

  let near,wallet,contract,thankYouContract;

export default {
  data () {
    return  {
      loading:false,
      fullpage:true,
      isSignedIn: false,
      accountName: '',
      accountBalance: '',
      recipients: [],
      isRecipientsLoaded:false,
      history:[
  {
    id: 1,
    sender: 'jane.near',
    text: 'Thanks for helping me with my first smart contract!',
    contribution: 2000000000000000000000000
  },
  {
    id: 2,
    sender: 'john.near',
    text: 'Appreciate your questions in the Zoom meeting',
    contribution: 0
  },
  {
    id: 3,
    sender: 'mary.near',
    text: 'Loved your examples today, thank you!!!',
    contribution: 10000000000000000000000000
  },
  {
    id: 4,
    sender: '',
    text: 'You\'re so awesome',
    contribution: 0
  }
]
    }
  },
  components: {
    Header,
    Info,
    MessageForm,
    LearnSection,
    MessageHistory,
    Login,
    Loading
  },
  async mounted () {
    near = await connect(config);
    wallet = new WalletConnection(near)
    this.accountName = wallet.account().accountId;
    this.isSignedIn = wallet.isSignedIn();
    this.accountBalance = await (await wallet.account().getAccountBalance()).total;
    contract = new nearAPI.Contract(
      wallet.account(),
      'dev-1624882444476-83521585546083',
      {
        viewMethods: ["list_all"]
      }
    )
    this.recipients = await contract.list_all()
    this.isRecipientsLoaded = true
  },
    methods: {
    signIn () {
      wallet.requestSignIn(
    "dev-1624882791000-17054952591347", // contract requesting access
      );
    },
    signOut () {
      wallet.signOut()
      this.isSignedIn = wallet.isSignedIn()
    },
    async getRecipients () {
      console.log('inside')
      return await contract.list_all()
    },
    async sendMessage (value,message,amount,anon) {
      thankYouContract = new nearAPI.Contract(
      wallet.account(),
      value,
      {
        viewMethods: ["list"],
        changeMethods: ["say"],
        sender:wallet.account()
      }
    )
    this.loading=true
    if (amount>0) {
      console.log('with amount')
      await thankYouContract.say({message:message,anonymous:anon,attachedDeposit:amount})
    }else{
      console.log('without amount')
      await thankYouContract.say({message:message,anonymous:anon})
    }
      this.history = await thankYouContract.list()
      console.log(this.history)
      this.loading=false
    }
  }
}
</script>
