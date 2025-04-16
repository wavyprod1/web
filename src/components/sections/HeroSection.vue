<template>
  <section id="hero" class="hero-section surface-ground text-color py-8">
    <div class="hero-content-container mx-auto px-4 md:px-6 lg:px-8">
      <!-- Changed to flex-column for both mobile and desktop -->
      <div class="flex flex-column align-items-center gap-5">
        <!-- Text section -->
        <div class="w-full md:w-8/12 text-center mt-5 md:mt-0">
          <h1 class="text-6xl font-bold mb-3">
            Finalmente il produttore <br />che capisce davvero la tua musica <br />(e te)
            <span class="block text-primary font-normal text-3xl mt-2"
              >Smetti di accontentarti di produzioni generiche.<br />
              Trasformiamo insieme la tua visione artistica in un suono
              <span class="text-primary">unico</span><br />
              che emoziona e ti rappresenta.</span
            >
          </h1>

          <div class="flex flex-column md:flex-row gap-3 justify-content-center">
            <CallToActionButton
              v-tooltip.bottom="'Prenota una chiamata\nesplorativa gratuita'"
              label="Parliamo del tuo progetto"
              icon="pi pi-phone"
              class="w-full md:w-auto"
            />
          </div>
        </div>

        <!-- Image section -->
        <div class="w-full md:w-6/12 flex justify-content-center">
          <div
            class="hero-image-placeholder surface-card border-round shadow-2 flex align-items-center justify-content-center"
            style="width: 300px; height: 300px; max-width: 80vw; max-height: 80vw"
          >
            <!--i class="pi pi-image" style="font-size: 5rem"></i>-->
            <img
              src="/images/hero-image.jpg"
              alt="Elia Hero"
              class="max-w-full max-h-full border-round"
            />
            <!-- Oppure <img src="/images/hero-image.jpg" alt="WavyProd1 Studio" class="max-w-full max-h-full border-round"> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
import CallToActionButton from '@/components/common/CallToActionButton.vue'
import Tooltip from 'primevue/tooltip'
// import Avatar from 'primevue/avatar';

// La funzione scrollToContact non è più necessaria qui, quindi la rimuoviamo
// const scrollToContact = () => { ... };

// TODO: Sostituisci 'https://www.instagram.com/tuo_profilo_instagram' con il tuo link reale
</script>

<style scoped>
/* Stili rimangono invariati */
.hero-section {
  min-height: 80vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-content-container {
  width: 100%;
  max-width: 1200px; /* Larghezza massima */
  margin: 0 auto; /* Centratura orizzontale */
}

.hero-image-placeholder img {
  display: block;
  width: 100%;
  height: auto;
  max-height: 350px;
  object-fit: cover;
}

.no-underline {
  text-decoration: none;
}

@media (max-width: 767px) {
  /* md breakpoint */
  .hero-section {
    padding-top: 4rem;
    padding-bottom: 4rem;
    min-height: auto;
  }
  h1.text-6xl {
    font-size: 3rem !important;
  }
  h1 .text-3xl {
    font-size: 1.5rem !important;
  }
  /* Aggiungiamo che il link prenda tutta la larghezza su mobile */
  .flex.flex-column a .p-button {
    width: 100%;
  }
  /* O in alternativa, si può mettere w-full direttamente sull'<a> */
  /* .flex.flex-column a { width: 100%; } */
}
</style>
