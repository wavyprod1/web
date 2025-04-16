<template>
  <section
    id="problem-solution"
    class="problem-solution-section surface-section px-4 py-8 md:px-6 lg:px-8"
  >
    <div class="section-content-container mx-auto">
      <div class="text-center mb-6">
        <h2 class="text-4xl font-bold mb-3">La Tua Arte Merita Più di un Trattamento Generico.</h2>
      </div>

      <div class="grid">
        <!-- Colonna Problema -->
        <div class="col-12 md:col-6 p-3">
          <Card class="h-full shadow-none border-1 surface-border">
            <template #title>
              <div class="flex align-items-center">
                <i class="pi pi-exclamation-triangle text-red-500 text-3xl mr-3"></i>
                <span class="text-2xl font-semibold">Le Situazione Comune</span>
              </div>
            </template>
            <template #content>
              <ul class="list-none p-0 m-0 text-color-secondary text-lg">
                <li class="mb-3 flex align-items-start">
                  <i class="pi pi-times-circle text-color-secondary mr-3 mt-1"></i>
                  <span
                    >Ti senti frustrato perché i produttori sembrano più interessati a imporre il
                    loro stile che a capire il tuo messaggio?</span
                  >
                </li>
                <li class="mb-3 flex align-items-start">
                  <i class="pi pi-times-circle text-color-secondary mr-3 mt-1"></i>
                  <span
                    >Hai la sensazione che il potenziale emotivo della tua musica rimanga
                    intrappolato dietro arrangiamenti che non le rendono giustizia?</span
                  >
                </li>
                <li class="flex align-items-start">
                  <i class="pi pi-times-circle text-color-secondary mr-3 mt-1"></i>
                  <span
                    >Sei un artista indipendente attivo e determinato, ma ti manca una guida esperta
                    per crescere dentro e fuori dallo studio</span
                  >
                </li>
              </ul>
            </template>
          </Card>
        </div>

        <!-- Colonna Soluzione -->
        <div class="col-12 md:col-6 p-3">
          <Card class="h-full shadow-none border-1 surface-border">
            <template #title>
              <div class="flex align-items-center">
                <i class="pi pi-check-circle text-green-500 text-3xl mr-3"></i>
                <span class="text-2xl font-semibold">La Mia Soluzione</span>
              </div>
            </template>
            <template #content>
              <ul class="list-none p-0 m-0 text-color-secondary text-lg">
                <li class="mb-3 flex align-items-start">
                  <i class="pi pi-star-fill text-primary mr-3 mt-1"></i>
                  <span
                    >Analizziamo insieme il testo, esploriamo le emozioni che vuoi trasmettere</span
                  >
                </li>
                <li class="mb-3 flex align-items-start">
                  <i class="pi pi-star-fill text-primary mr-3 mt-1"></i>
                  <span>Creiamo insieme la produzione su misura per il tuo brano</span>
                </li>
                <li class="flex align-items-start">
                  <i class="pi pi-star-fill text-primary mr-3 mt-1"></i>
                  <span
                    >Ti aiuto a valutare scelte e possibilità per valorizzare la tua carriera e la
                    tua arte</span
                  >
                </li>
              </ul>
            </template>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Card from 'primevue/card'
// Import altri componenti se necessario
</script>

<style scoped>
/* Contenitore interno per limitare la larghezza */
.section-content-container {
  max-width: 1200px; /* Stessa larghezza max della Hero Section per coerenza */
}

/* Rende le Card alte uguali nella stessa riga */
.grid .col-12,
.grid .col-12 > .p-card {
  display: flex;
  flex-direction: column;
}
.grid .col-12 > .p-card {
  flex-grow: 1; /* Fa sì che la card occupi tutto lo spazio del contenitore colonna */
}

/* Opzionale: rimuovi padding interno del contenuto della card se vuoi più controllo */
/* .p-card :deep(.p-card-content) {
    padding: 0;
  } */

/* Opzionale: Stile leggermente diverso per il titolo della card */
/* .p-card :deep(.p-card-title) {
     margin-bottom: 1rem;
  } */
</style>
