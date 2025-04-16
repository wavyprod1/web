<template>
  <section id="contatti" class="contact-section surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div class="section-content-container mx-auto text-center">
      <h2 class="text-4xl font-bold mb-3">Pronto a Creare?</h2>
      <p class="text-xl text-color-secondary line-height-3 mb-6">
        Hai un progetto in mente o vuoi semplicemente discutere delle tue idee?
        <br class="hidden md:inline" />
        Contattami, sarò felice di ascoltarti.
      </p>

      <!-- Bottone CTA Principale -->
      <div class="mb-5">
        <CallToActionButton
          v-tooltip.bottom="'Prenota una chiamata\nesplorativa gratuita'"
          label="Parliamo del tuo progetto"
          icon="pi pi-phone"
          class="w-full md:w-auto"
        />
      </div>

      <!-- Link Social/Email Alternativi -->
      <div class="alternative-contacts">
        <p class="text-lg mb-3">Oppure seguimi / scrivimi direttamente:</p>
        <div class="flex justify-content-center align-items-center gap-4">
          <!-- Link Instagram -->
          <a
            href="https://www.instagram.com/wavyprod1"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-link text-color hover:text-primary transition-colors duration-300"
            aria-label="Seguimi su Instagram"
            v-tooltip.bottom="'Instagram'"
          >
            <i class="pi pi-instagram text-4xl"></i>
          </a>

          <!-- Link Email -->
          <a
            href="mailto:wavywork1@gmail.com"
            class="contact-link text-color hover:text-primary transition-colors duration-300"
            aria-label="Inviami una Email"
            v-tooltip.bottom="'Inviami una Email'"
          >
            <i class="pi pi-envelope text-4xl"></i>
          </a>
          <!-- Aggiungi altri link/icone qui se necessario (es. LinkedIn, etc.) -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue' // ref non è strettamente necessario qui ma lo lasciamo per coerenza
import CallToActionButton from '@/components/common/CallToActionButton.vue'
import Button from 'primevue/button' // Importalo se usi altri bottoni
import Tooltip from 'primevue/tooltip' // Importa la direttiva Tooltip

// Direttiva v-tooltip (necessaria per abilitare i tooltip)
// Non serve importarla direttamente nello script se usi la registrazione globale
// ma per chiarezza la lasciamo qui (o puoi importarla globalmente in main.ts)
// Se non è registrata globalmente, aggiungi:
// import { directive as Tooltip } from 'primevue/tooltip';
// const vTooltip = Tooltip; // Rinomina per usarla nel template (non standard)
// NOTA: L'approccio standard è la registrazione globale o la direttiva nel template.

// --- IMPORTANTE ---
// SOSTITUISCI con il tuo indirizzo email reale!
// const userEmail = 'tua.email@example.com';
// (Non serve più la variabile se metti l'email direttamente nell'href)
</script>

<style scoped>
.section-content-container {
  max-width: 800px; /* Rendiamo questa sezione un po' più stretta per focus */
}

.contact-link {
  text-decoration: none;
  display: inline-flex; /* Per allineare bene l'icona */
  align-items: center;
  justify-content: center;
}

.contact-link i {
  transition: transform 0.2s ease-in-out;
}

.contact-link:hover i {
  transform: scale(1.15); /* Leggero ingrandimento icona su hover */
}

/* Stili per i tooltip di PrimeVue (se necessario personalizzare) */
:deep(.p-tooltip .p-tooltip-text) {
  font-size: 0.9rem;
}
</style>
