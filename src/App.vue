<template>
  <v-app>
    <AppBarraLateral/>
    <Home/>
  <v-main>
      <router-view/>
  </v-main>
  </v-app>
</template>

<script>

import AppBarraLateral from './components/shared/AppBarraLateral'
import Home from './views/Home'
export default {
    name:'App',
    components: {
      AppBarraLateral,
      Home
    }
}
</script>

<style scoped>

</style>