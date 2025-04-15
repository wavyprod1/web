<template>
    <section id="hero" class="hero-section surface-ground text-color py-8">
      <div class="hero-content-container mx-auto px-4 md:px-6 lg:px-8">
        <div class="flex flex-column md:flex-row align-items-center gap-5">
  
          <!-- Colonna Immagine: Ordine 1 su mobile, Ordine 2 su desktop -->
          <div class="w-full md:w-6/12 order-1 md:order-2 flex justify-content-center">
            <div class="hero-image-placeholder surface-card p-5 border-round shadow-2 flex align-items-center justify-content-center" style="width: 300px; height: 300px; max-width: 80vw; max-height: 80vw;">
               <i class="pi pi-image" style="font-size: 5rem"></i>
               <!-- Oppure <img src="/images/hero-image.jpg" alt="WavyProd1 Studio" class="max-w-full max-h-full border-round"> -->
            </div>
          </div>
  
          <!-- Colonna Testo: Ordine 2 su mobile, Ordine 1 su desktop -->
          <div class="w-full md:w-6/12 order-2 md:order-1 text-center md:text-left mt-5 md:mt-0">
            <h1 class="text-6xl font-bold mb-3">
              WavyProd1
              <span class="block text-primary font-normal text-3xl mt-2">Produzioni Musicali & Sound Design</span>
            </h1>
            <p class="mt-0 mb-5 line-height-3 text-color-secondary text-lg">
              Trasformo le tue idee in suono. Dalle tracce che emozionano alle sonorizzazioni che immergono, do vita alla tua visione artistica.
            </p>
  
            <div class="flex flex-column md:flex-row gap-3 justify-content-center md:justify-content-start">
                      <!-- Bottoni con struttura <a><Button>...</Button></a> -->
          <div class="flex flex-column md:flex-row gap-3 justify-content-center md:justify-content-start">
            <CallToActionRainbowButton/>
            <a href="https://www.instagram.com/wavyprod1" target="_blank" rel="noopener noreferrer" class="no-underline">
               <Button
                label="Seguimi su Instagram"
                icon="pi pi-instagram"
                severity="secondary"
                outlined
                size="large"
                class="w-full md:w-auto"
               />
            </a>
          </div>
          </div>
          </div>
  
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import Button from 'primevue/button';
  import CallToActionRainbowButton from '@/components/common/CallToActionRainbowButton.vue';
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
  
  @media (max-width: 767px) { /* md breakpoint */
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