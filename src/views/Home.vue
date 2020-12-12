<template>
  <v-container class="home d-flex flex-column align-center fill-height mt-5">
    <h1 class="text-h4 text-center">Natal Solidário</h1>
    <p class="text-justify mt-5">
      O natal este ano será diferenciado.
       Papai Noel - assim como todos nós - está
        se cuidando nesta pandemia e não poderá visitar de casa em casa
         para entregar os presentes. Mas e agora, as crianças ficarão sem seus
          presentinhos de natal? 😱 Não, os duendes atualizaram o papai Noel com
          o aplicativo. Você escolhe uma cartinha e ajuda uma criança no processo.
    </p>

    <v-img
      alt="Papai Noel"
      max-height="150"
      max-width="250"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtVdbefQZWhg9ue0VOJFgDl0EtJTT8i67yA&usqp=CAU"
    ></v-img>
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
  


