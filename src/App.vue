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
  <router-view/>
</template>

<script>
import * as nearAPI from "near-api-js"
import Login from '@/components/Login.vue'

const { connect, keyStores, WalletConnection } = nearAPI


const config = {
  networkId: "testnet",
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  nodeUrl: "https://rpc.testnet.near.org",
  walletUrl: "https://wallet.testnet.near.org",
  helperUrl: "https://helper.testnet.near.org",
  explorerUrl: "https://explorer.testnet.near.org",
};

  let near,wallet,contract;


export default {
  components: {
    Login
  },
  name: "App",
  data () {
    return  {
      isSignedIn: false,
      accountName: '',
      accountBalance: ''
    }
  },
  async mounted () {
    near = await connect(config);
    wallet = new WalletConnection(near)
    this.accountName = wallet.account().accountId;
    this.isSignedIn = wallet.isSignedIn();
    this.accountBalance = await (await wallet.account().getAccountBalance()).total;
    contract = new nearAPI.Contract(
      wallet.account(),
      'dev-1624361503584-14593035611926',
      {
        viewMethods: ["list_all"]
      }
    )
    console.log(await contract.list_all())
  },
  methods: {
    signIn () {
      wallet.requestSignIn(
    "dev-1624361748873-65273220647634", // contract requesting access
  );
    },
    signOut () {
      wallet.signOut()
      this.isSignedIn = wallet.isSignedIn()
    }
    }
  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a.router-link-active {
  border-bottom: 0.1em solid indigo;
}
</style>
