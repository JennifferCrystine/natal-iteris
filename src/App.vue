<template>
  <v-app>
    <AppBarraLateral/>
    <AppRodaPe/>
  <v-main>
      <router-view/>
  </v-main>
  </v-app>
</template>

<script>
import AppRodaPe from './components/shared/AppRodaPe'
import AppBarraLateral from './components/shared/AppBarraLateral'
export default {
    name:'App',
    components: {
      AppBarraLateral,
      AppRodaPe
    }
}
</script>

<style scoped>

</style>