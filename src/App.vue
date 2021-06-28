<template>
  <Sender/>
</template>

<script>
import Sender from '@/views/Sender.vue'

export default {
  components: {
    Sender
  },
  name: "App",
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
