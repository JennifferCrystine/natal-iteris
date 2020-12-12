<template>
  <v-container class="home d-flex flex-column align-center fill-height mt-5">
    <h1 class="text-h4 text-center">Natal Solidário</h1>
    <p class="text-center mt-5">
      O natal este ano será diferenciado. Papai Noel -
      assim como todos nós - está se cuidando nesta pandemia
      e não poderá visitar de casa em casa para entregar os presentes.
      Mas e agora, as crianças ficarão sem seus presentinhos de natal? 😱
      Não, os duendes atualizaram o papai Noel com o aplicativo. Você escolhe uma cartinha
    </p>

    <BotaoPrimeiraPagina/>
  </v-container>

  
</template>

<script>

import BotaoPrimeiraPagina from '@/components/shared/BotaoPrimeiraPagina'
export default {
  name: 'Home',
  components: {
    BotaoPrimeiraPagina,
    
    
  }
}
  


