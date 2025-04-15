<template>
    <section id="about-me" class="about-me-section surface-section px-4 py-8 md:px-6 lg:px-8">
      <div class="section-content-container mx-auto">
        <div class="grid align-items-center">
          <!-- Colonna Immagine (Sinistra su Desktop, Sopra su Mobile) -->
          <div class="col-12 md:col-5 lg:col-4 text-center md:text-left">
            <Avatar
               image="/images/profile/profile-photo.jpg"
               alt="Foto profilo WavyProd1"
               size="xlarge"
               shape="circle"
               class="shadow-2 about-me-avatar"
               style="width: 200px; height: 200px;"
             />
             <!-- Alternativa con <img> se non vuoi Avatar -->
             <!--
             <img
               src="/images/profile/profile-photo.jpg"
               alt="Foto profilo WavyProd1"
               class="shadow-2 border-round about-me-image"
               style="max-width: 250px; height: auto;"
             />
             -->
          </div>
  
          <!-- Colonna Testo (Destra su Desktop, Sotto su Mobile) -->
          <div class="col-12 md:col-7 lg:col-8 mt-5 md:mt-0">
            <h2 class="text-4xl font-bold mb-3">Chi Sono</h2>
            <p class="text-xl line-height-3 text-color-secondary mb-4">
              Piacere, sono [Il Tuo Nome/Nome d'Arte]! La musica è la mia passione fin da bambino.
              Con un background che spazia dal [Tuo Strumento/Genere Iniziale, es. pianoforte classico] alla produzione moderna,
              il mio obiettivo è semplice: aiutare artisti e creator a trovare il loro suono unico e a raccontare la loro storia attraverso l'audio.
            </p>
            <p class="text-lg line-height-3 text-color-secondary">
              Credo nella collaborazione, nella qualità e nell'attenzione ai dettagli. Che tu abbia bisogno di una produzione completa,
              un mix professionale o un sound design d'impatto, sono qui per trasformare la tua visione in realtà sonora.
            </p>
            <!-- Opzionale: Aggiungere un piccolo link/bottone qui se serve -->
            <!-- <Button label="Scopri di più sui servizi" outlined class="mt-3" @click="$router.push('/servizi')" /> -->
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import Avatar from 'primevue/avatar';
  // import Button from 'primevue/button'; // Se aggiungi il bottone opzionale
  </script>
  
  <style scoped>
  .section-content-container {
    max-width: 1200px;
  }
  
  .about-me-avatar,
  .about-me-image {
     /* Assicura che l'immagine non sia troppo piccola su mobile */
     min-width: 150px;
     min-height: 150px;
  }
  
  /* Centra l'immagine verticalmente nel suo contenitore colonna */
  /* Utile specialmente se il testo è molto lungo */
  /* .grid > .col-12:first-child {
     display: flex;
     justify-content: center;
     align-items: center;
  } */
  </style>