<template>
  <v-card>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      color="red"
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src=""></v-img>
        </v-list-item-avatar>

        <v-list-item-title>Natal Solidario</v-list-item-title>

        <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense app >
        
          <router-link to="/home">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
        </router-link>

      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        mini: true,
      }
    },
  }
</script>