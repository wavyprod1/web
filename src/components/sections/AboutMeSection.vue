<template>
  <section id="about-me" class="about-me-section surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="section-content-container mx-auto">
      <div class="grid align-items-center">
        <!-- Colonna Immagine (Sinistra su Desktop, Sopra su Mobile) -->
        <div class="col-12 md:col-5 lg:col-4 text-center md:text-left flex justify-content-center md:justify-content-start">
          <!-- Usa un tag <img> standard invece di Avatar -->
          <img
            src="/images/about.jpg"
            alt="Foto profilo Elia Pirrello" 
            class="about-me-image shadow-2" 
          />
        </div>

        <!-- Colonna Testo (Destra su Desktop, Sotto su Mobile) -->
        <div class="col-12 md:col-7 lg:col-8 mt-5 md:mt-0">
          <h2 class="text-4xl font-bold mb-3">Chi Sono</h2>
          <p class="text-xl line-height-3 text-color-secondary mb-4">
            Piacere, sono Elia Pirrello! La musica è la mia passione fin da bambino. Con
            un background che spazia dal pianoforte classico e jazz alla produzione moderna,
            il mio obiettivo è semplice: aiutare artisti e creator a trovare il loro suono unico
            e a raccontare la loro storia attraverso l'audio.
          </p>
          <p class="text-lg line-height-3 text-color-secondary">
            Credo nella collaborazione, nella qualità e nell'attenzione ai dettagli. Che tu abbia
            bisogno di una produzione completa, un mix professionale o un sound design d'impatto,
            sono qui per trasformare la tua visione in realtà sonora.
          </p>
          <!-- Opzionale: Aggiungere un piccolo link/bottone qui se serve -->
          <!-- <Button label="Scopri di più sui servizi" outlined class="mt-3" @click="$router.push('/servizi')" /> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Non importiamo più Avatar
// import Avatar from 'primevue/avatar'
// import Button from 'primevue/button';
</script>

<style scoped>
.section-content-container {
  max-width: 1200px;
}

/* Rimuovi la regola specifica per .about-me-avatar se presente */
/* .about-me-avatar { ... } */

/* Applica stile all'immagine standard */
.about-me-image {
  display: block; /* Necessario per applicare correttamente alcuni stili */
  width: 200px; /* Larghezza fissa */
  height: 200px; /* Altezza fissa uguale alla larghezza */
  border-radius: 50%; /* Rende l'immagine circolare */
  object-fit: cover; /* Assicura che l'immagine copra l'area senza distorcersi */
  min-width: 150px; /* Minimo su mobile */
  min-height: 150px; /* Minimo su mobile */
}

/* Opzionale: Centra l'immagine verticalmente */
/* .grid > .col-12:first-child { ... } */
</style>