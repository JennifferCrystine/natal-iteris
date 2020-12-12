<template>
  <v-div class="app-top-bar">
    <v-app-bar color="red darken-4" dark app>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Natal Solidário</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="red darken-4">

          <router-link to="/">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title  class="first">Início</v-list-item-title>
          </v-list-item>
          </router-link>

          <router-link to="/letter">
          <v-list-item>
            <v-list-item-icon>
              <v-icon><mdi-email-letter></mdi-email-letter></v-icon>
            </v-list-item-icon>
            <v-list-item-title class="first">Cartinhas</v-list-item-title>
          </v-list-item>
          </router-link>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-div>
</template>

<script>
  export default {
    name: 'AppBarraNavegacao',
    data: () => ({
      drawer: false,
      group: null,
    }),
};
</script>

<style scoped>
  .app-top-bar a {
    text-decoration: none;        
  }
</style>