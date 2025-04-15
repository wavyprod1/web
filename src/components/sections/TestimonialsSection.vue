<template>
    <section id="testimonianze" class="testimonials-section surface-ground px-4 py-8 md:px-6 lg:px-8">
      <div class="section-content-container mx-auto">
        <div class="text-center mb-6">
          <h2 class="text-4xl font-bold mb-3">Cosa Dicono di <span class="text-primary">WavyProd1</span></h2>
          <p class="text-xl text-color-secondary line-height-3">La soddisfazione di chi ha già scelto di lavorare insieme.</p>
        </div>
  
        <Carousel
          :value="testimonials"
          :numVisible="calculateNumVisible()"
          :numScroll="1"
          :responsiveOptions="responsiveOptions"
          circular
          :autoplayInterval="5000"
          :showIndicators="true"
          :showNavigators="true"
          containerClass="custom-carousel-container"
          :pt="{ indicators: { class: 'mt-4' } }"
        >
          <template #item="slotProps">
            <div class="testimonial-item p-3 h-full">
              <!-- Applica flex-column alla card per controllare i figli verticalmente -->
              <Card class="flex flex-column h-full shadow-2 border-round">
                <template #header>
                  <img
                    :src="slotProps.data.screenshotUrl"
                    :alt="'Screenshot testimonianza da ' + slotProps.data.authorName"
                    class="testimonial-image border-round-top"
                    style="width: 100%; height: 200px; object-fit: cover;"
                  />
                </template>
                <!-- Aggiungi flex-grow-1 al contenuto per farlo espandere -->
                <template #content class="flex-grow-1">
                  <blockquote class="mt-0 mb-3">
                    <p class="text-lg line-height-3 text-color m-0">"{{ slotProps.data.quote }}"</p>
                  </blockquote>
                </template>
                <!-- Il footer rimarrà naturalmente in basso perché è l'ultimo elemento flex -->
                <template #footer>
                   <div class="text-right">
                      <p class="font-semibold text-primary m-0">{{ slotProps.data.authorName }}</p>
                      <p v-if="slotProps.data.authorTitle" class="text-sm text-color-secondary m-0">{{ slotProps.data.authorTitle }}</p>
                   </div>
                </template>
              </Card>
            </div>
          </template>
        </Carousel>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  // ... (lo script rimane invariato) ...
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  import Carousel from 'primevue/carousel';
  import Card from 'primevue/card';
  // Tag non è più usato qui se non lo metti altrove
  // import Tag from 'primevue/tag';
  
  import testimonialsData from '@/assets/data/testimonials.json';
  
  interface Testimonial {
    id: number;
    authorName: string;
    authorTitle?: string;
    quote: string;
    screenshotUrl: string;
  }
  
  const testimonials = ref<Testimonial[]>(testimonialsData);
  const windowWidth = ref(window.innerWidth);
  
  const responsiveOptions = ref([
      { breakpoint: '1199px', numVisible: 3, numScroll: 1 },
      { breakpoint: '991px', numVisible: 2, numScroll: 1 },
      { breakpoint: '767px', numVisible: 1, numScroll: 1 }
  ]);
  
  const calculateNumVisible = () => {
    if (windowWidth.value >= 1200) return 3;
    if (windowWidth.value >= 992) return 3;
    if (windowWidth.value >= 768) return 2;
    return 1;
  };
  
  const updateWidth = () => { windowWidth.value = window.innerWidth; }
  onMounted(() => { window.addEventListener('resize', updateWidth); updateWidth(); });
  onBeforeUnmount(() => { window.removeEventListener('resize', updateWidth); });
  </script>
  
  <style scoped>
  /* ... (gli stili esistenti rimangono per lo più invariati) ... */
  
  .section-content-container {
    max-width: 1200px;
  }
  
  .testimonial-item {
     display: flex;
  }
  
  .testimonial-item .p-card {
    /* Già flex e h-full dal template */
  }
  
  /* Assicura che lo slot content usi lo spazio disponibile */
  /* Potrebbe non essere necessario se il blocco quote ha già altezza variabile */
  :deep(.testimonial-item .p-card .p-card-body) {
      display: flex;
      flex-direction: column;
      flex-grow: 1; /* Fa espandere il corpo della card */
  }
  :deep(.testimonial-item .p-card .p-card-content) {
     flex-grow: 1; /* Fa espandere la sezione content per spingere il footer */
  }
  
  
  .testimonial-image {
    /* Stili immagine */
  }
  
  :deep(.p-carousel .p-carousel-indicators .p-link) {
      width: 0.8rem; height: 0.8rem; border-radius: 50%;
  }
  :deep(.p-carousel .p-carousel-prev),
  :deep(.p-carousel .p-carousel-next) {
      align-self: center; background-color: var(--p-surface-card-transparent);
      border-radius: 50%; color: var(--p-text-color); width: 3rem; height: 3rem;
  }
  :deep(.p-carousel .p-carousel-prev:hover),
  :deep(.p-carousel .p-carousel-next:hover) {
      background-color: var(--p-surface-hover);
  }
  :deep(.p-carousel .p-carousel-prev) { margin-left: -0.5rem; }
  :deep(.p-carousel .p-carousel-next) { margin-right: -0.5rem; }
  </style>