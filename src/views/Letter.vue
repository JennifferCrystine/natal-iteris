<template>
  <v-container class="d-flex flex-column justify-space-between">
    <div class="" v-for="(carta, index) of cartas" :key="index">      
        <p> {{ carta.description }} </p>
        <img :src="carta.photo" alt="criança" />
        <span>Nome: {{ carta.name }}</span>
        <span>Endereço: {{ carta.address }}</span>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Letter",
  data() {
    return {
      cartas: [],
    };
  },
  created() {
    fetch("https://it3yui.firebaseio.com/natal.json")
      .then((resultado) => resultado.json())
      .then((json) => {
        this.cartas = json;
      });
  },
};
</script>
