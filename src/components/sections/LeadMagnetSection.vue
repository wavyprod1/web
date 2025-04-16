<template>
  <section
    id="qualificazione"
    class="lead-magnet-section surface-section px-4 py-8 md:px-6 lg:px-8"
  >
    <div class="section-content-container mx-auto text-center">
      <h2 class="text-4xl font-bold mb-3">
        Pronto a Fare il <span class="text-primary">Salto di Qualità Sonoro?</span>
      </h2>
      <p class="text-lg line-height-3 text-color-secondary mb-4">
        Se sei un artista indipendente attivo (hai pubblicato almeno 4 brani nell'ultimo anno e hai
        più di 100 ascoltatori mensili) e sei seriamente intenzionato a fare, potremmo essere fatti
        per lavorare insieme.
      </p>
      <p class="text-lg line-height-3 text-color-secondary mb-5">
        Il primo passo? Una <strong>chiamata esplorativa gratuita di 15 minuti</strong>.
        <br />Parleremo del tuo progetto, delle tue sfide e ti darò un feedback strategico iniziale.
        Inoltre, se emergerà la giusta sintonia potresti essere selezionato per una
        <strong>Sessione Esclusiva di Ascolto Reale di 1 ora</strong> nel mio studio, totalmente
        gratuita.<br />
        Un'occasione unica per sperimentare dal vivo il mio metodo e capire come possiamo sbloccare
        il vero potenziale della tua musica.
      </p>

      <!-- Bottone CTA Calendly -->
      <div class="cta-container mb-2">
        <a :href="calendlyLink" target="_blank" rel="noopener noreferrer" class="no-underline">
          <CallToActionButton
            label="Organizziamo la chiamata"
            icon="pi pi-calendar-plus"
            severity="primary"
            size="large"
            class="p-button-raised"
          />
        </a>
      </div>

      <p class="text-sm text-color-secondary mt-0">
        <i class="pi pi-info-circle mr-1" style="font-size: 0.8rem"></i>
        I posti per la sessione gratuita sono limitati. Prenota ora la tua chiamata.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import CallToActionButton from '@/components/common/CallToActionButton.vue'

// --- SOSTITUISCI CON IL TUO LINK CALENDLY REALE ---
const calendlyLink = ref('https://calendly.com/tuo-link-calendly')
// ----------------------------------------------------
</script>

<style scoped>
.section-content-container {
  max-width: 960px; /* Leggermente più stretto per focus sul testo */
}

.no-underline {
  text-decoration: none;
}

/* Opzionale: aggiusta lo stile del bottone se necessario */
/* .cta-container .p-button { */
/* Aggiungi stili custom se la severity non basta */
/* } */

/* Stile per il testo di scarsità */
.text-sm {
  font-size: 0.875rem;
}
</style>
