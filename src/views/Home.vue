<template>
  <v-container class="home d-flex flex-column align-center fill-height mt-5">
  
    <h1 class="text-h4 text-center">Natal Solidário    
      <v-avatar>
        <img
          src="@/assets/papainoel.png"
          alt="Papai Noel"
        >
      </v-avatar></h1>     

    <div class="texto-imagem d-flex flex-column align-center justify-space-between">
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

    </div>

    <v-btn class="signin mt-15" x-large rounded to ="/letter" color="green darken-4">
        <v-icon>mdi-pine-tree</v-icon> <span class="">Doe aqui</span>
    </v-btn>
  </v-container>

  
</template>

<script>


export default {
  name: 'Home',
  components: {

    
  }
}
  


