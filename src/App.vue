<template>
  <Header></Header>
  <Corpo></Corpo>
</template>

<script>

import Corpo from '@/components/layouts/Corpo.vue'
import Header from '@/components/layouts/Header.vue'



export default {
  name: 'App',
  components: {
    Header,
    Corpo
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
