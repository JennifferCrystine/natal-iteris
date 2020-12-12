<template>
  <v-app>
    <AppBarraLateral/>
  <v-main>
      <router-view/>
  </v-main>
  </v-app>
</template>

<script>

import AppBarraLateral from './components/shared/AppBarraLateral'
export default {
    name:'App',
    components: {
      AppBarraLateral,
    }
}
</script>

<style scoped>

</style>