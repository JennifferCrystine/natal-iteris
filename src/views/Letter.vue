<template>
  <v-container class="d-flex flex-column justify-space-between align-center">
    <h1 class="text-h4 mb-5 mt-2">Cartas 💌🎅</h1>
    <div class="" v-for="(carta, index) of cartas" :key="index">      
        <p class="conteudo text-body"> {{ carta.description }} </p> <br>
        <img width="100%" widclass="desenho" :src="carta.photo" alt="criança"/>  <br>
        <span class="text-caption">Nome: {{ carta.name }}</span>  <br>
        <span class="text-caption">Endereço: {{ carta.address }}</span>
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

<style scoped>
</style>
