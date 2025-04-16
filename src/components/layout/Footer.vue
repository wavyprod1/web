<template>
  <footer class="site-footer surface-ground px-4 py-5 md:px-6 lg:px-8 border-top-1 surface-border">
    <div
      class="footer-content max-w-screen-xl mx-auto flex flex-column sm:flex-row justify-content-between align-items-center gap-3"
    >
      <!-- Copyright & P.IVA (Sinistra/Centro) -->
      <div class="copyright-vat text-center sm:text-left">
        <span class="text-color-secondary block sm:inline mb-2 sm:mb-0 sm:mr-4"
          >© {{ currentYear }} WavyProd1. Tutti i diritti riservati.</span
        >
      </div>

      <!-- Social Icons & Email (Destra) -->
      <div class="p-iva flex align-items-center gap-4">
        <span class="text-color-secondary text-sm">P.IVA: 12345678901</span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
// Tooltip è registrato globalmente
// import Tooltip from 'primevue/tooltip'; // Non serve import se globale

const currentYear = computed(() => new Date().getFullYear())

// --- IMPORTANTE ---
// SOSTITUISCI P.IVA, EMAIL e altri link social!
</script>

<style scoped>
.footer-content {
  /* Stile per limitare larghezza se necessario */
}

.footer-link {
  text-decoration: none;
  display: inline-flex;
}

.footer-link i {
  transition: transform 0.2s ease-in-out;
}

.footer-link:hover i {
  transform: scale(1.15);
}

.copyright-vat span {
  /* Stile aggiuntivo se necessario */
}
</style>
