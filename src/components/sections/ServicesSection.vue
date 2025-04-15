<template>
    <section id="servizi" class="services-section surface-ground px-4 py-8 md:px-6 lg:px-8">
      <div class="section-content-container mx-auto">
        <div class="text-center mb-6">
          <h2 class="text-4xl font-bold mb-3">Porta la Tua Musica al <span class="text-primary">Livello Successivo</span></h2>
          <p class="text-xl text-color-secondary line-height-3">Offro soluzioni focalizzate per dare alla tua musica il suono professionale che merita.</p>
        </div>
  
        <div class="grid">
          <!-- Pacchetto 1: Starter Pack -->
          <div class="col-12 md:col-6 p-3">
            <Card class="h-full shadow-2 border-round"> <!-- Usiamo shadow-2 per differenziare un po' -->
              <template #title>
                <div class="text-center text-2xl font-semibold mb-3">Suono da Playlist <br class="md:hidden"/>Starter Pack</div>
              </template>
              <template #content>
                <p class="text-color-secondary text-lg line-height-3 text-center">
                  Ideale per iniziare: trasforma la tua traccia in un brano pronto per le playlist,
                  con un suono pulito, potente e competitivo sulle piattaforme principali.
                  Metti in risalto la tua voce e la tua musica.
                </p>
              </template>
            </Card>
          </div>
  
          <!-- Pacchetto 2: Next Level -->
          <div class="col-12 md:col-6 p-3">
            <Card class="h-full shadow-2 border-round">
               <template #title>
                <div class="text-center text-2xl font-semibold mb-3">Collaborazione Singolo <br class="md:hidden"/>Next Level</div>
               </template>
               <template #content>
                 <p class="text-color-secondary text-lg line-height-3 text-center">
                   Per chi punta in alto: una produzione completa e su misura,
                   dall'idea iniziale al master finale. Sviluppiamo insieme la tua visione artistica
                   per creare un singolo di impatto, con qualità da etichetta.
                 </p>
               </template>
            </Card>
          </div>
        </div>
  
        <!-- Call to Action Button -->
        <div class="mt-6 text-center">
            <CallToActionRainbowButton/>
        </div>
  
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import Card from 'primevue/card';
  import Button from 'primevue/button';
  import CallToActionRainbowButton from '@/components/common/CallToActionRainbowButton.vue';
  </script>
  
  <style scoped>
  .section-content-container {
    max-width: 1200px;
  }
  
  /* Rende le Card alte uguali */
  .grid .col-12,
  .grid .col-12 > .p-card {
    display: flex;
    flex-direction: column;
  }
  .grid .col-12 > .p-card {
     flex-grow: 1;
  }
  
  /* Stile per il bottone custom (già definito in custom-styles.css, ma potremmo aggiungere specificità qui se necessario) */
  .no-underline {
    text-decoration: none;
  }
  
  /* Aggiunge un a capo nel titolo della card solo su mobile per leggibilità */
  @media (min-width: 768px) { /* md breakpoint */
    .md\:hidden {
      display: none;
    }
  }
  </style>