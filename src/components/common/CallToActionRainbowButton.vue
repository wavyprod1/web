<template>
    <a
      href="https://www.instagram.com/wavyprod1"
      target="_blank"
      rel="noopener noreferrer"
      class="no-underline cta-rainbow-button-wrapper"
    >
      <Button
        :label="label"
        :icon="icon"
        :size="size"
        class="pastel-rainbow-bg" 
      />
    </a>
  </template>
  
  <script setup lang="ts">
  // Rimosso 'computed' perché non più necessario
  import Button from 'primevue/button';
  
  // Props personalizzabili: label, icon, size
  // href, target, rel sono fissi ora.
  const props = defineProps({
    label: {
      type: String,
      default: 'Lavoriamo Insieme'
    },
    icon: {
      type: String,
      default: 'pi pi-play-circle'
    },
    size: {
      type: String,
      default: 'large'
    }
  });
  
  </script>
  
  <style scoped lang="css">
  /* Stili specifici per questo componente, basati sul tuo CSS funzionante */
  
  .no-underline {
    text-decoration: none;
  }
  
  /* Gestione larghezza wrapper */
  .cta-rainbow-button-wrapper {
     display: inline-block;
     width: auto;
  }
  @media (max-width: 767px) { /* md breakpoint */
     .cta-rainbow-button-wrapper {
        width: 100%;
     }
     .cta-rainbow-button-wrapper :deep(.p-button) {
         width: 100%;
     }
  }
  
  
  /* --- INIZIO CSS SPECIFICO RAINBOW BUTTON (Adattato per Scoped) --- */
  
  /* Non serve più la classe base .pastel-rainbow-bg qui, perché applichiamo
     direttamente a :deep(.p-button.pastel-rainbow-bg) */
  
  /* Stato base (Light Mode) del Bottone */
  :deep(.p-button.pastel-rainbow-bg) {
    background: var(--pastel-rainbow-stripes-light) !important;
    color: var(--pastel-text-light) !important;
    border: none !important;
    --p-button-label-font-weight: 700; /* Sovrascrive variabile per bold */
    transition: background 0.3s ease, color 0.3s ease;
    width: 100%; /* Forza il bottone ad adattarsi al wrapper */
  }
  
  /* Stato base (Dark Mode) del Bottone - usando html.p-dark */
  :global(html.p-dark) :deep(.p-button.pastel-rainbow-bg) {
    background: var(--pastel-rainbow-stripes-dark) !important;
    color: var(--pastel-text-dark) !important;
    --p-button-label-font-weight: 700; /* Mantiene bold */
  }
  
  /* --- Effetto Hover Invertito --- */
  /* Hover in Light Mode -> Dark Styles */
  :deep(.p-button.pastel-rainbow-bg:hover:not(:disabled)) {
    background: var(--pastel-rainbow-stripes-dark) !important;
    color: var(--pastel-text-dark) !important;
  }
  
  /* Hover in Dark Mode -> Light Styles */
  :global(html.p-dark) :deep(.p-button.pastel-rainbow-bg:hover:not(:disabled)) {
    background: var(--pastel-rainbow-stripes-light) !important;
    color: var(--pastel-text-light) !important;
  }
  
  /* --- Stili Label e Icona --- */
  /* Base Light */
  :deep(.p-button.pastel-rainbow-bg .p-button-label),
  :deep(.p-button.pastel-rainbow-bg .p-button-icon) {
    color: var(--pastel-text-light) !important;
    transition: color 0.3s ease;
  }
  /* Base Dark */
  :global(html.p-dark) :deep(.p-button.pastel-rainbow-bg .p-button-label),
  :global(html.p-dark) :deep(.p-button.pastel-rainbow-bg .p-button-icon) {
    color: var(--pastel-text-dark) !important;
  }
  
  /* Hover Light -> Dark */
  :deep(.p-button.pastel-rainbow-bg:hover:not(:disabled) .p-button-label),
  :deep(.p-button.pastel-rainbow-bg:hover:not(:disabled) .p-button-icon) {
    color: var(--pastel-text-dark) !important;
  }
  /* Hover Dark -> Light */
  :global(html.p-dark) :deep(.p-button.pastel-rainbow-bg:hover:not(:disabled) .p-button-label),
  :global(html.p-dark) :deep(.p-button.pastel-rainbow-bg:hover:not(:disabled) .p-button-icon) {
    color: var(--pastel-text-light) !important;
  }
  
  /* --- Automatic Dark Mode Handling (dal tuo CSS) --- */
  /* Adattato con :deep() dove necessario */
  @media (prefers-color-scheme: dark) {
    /* La regola generica .pastel-rainbow-bg non serve più qui dentro */
  
    :deep(.p-button.pastel-rainbow-bg) {
      background: var(--pastel-rainbow-stripes-dark) !important;
      color: var(--pastel-text-dark) !important;
      /* Il font-weight dovrebbe ereditare dal selettore :global(html.p-dark) precedente,
         ma possiamo aggiungerlo per sicurezza se preferisci-color-scheme ha precedenza */
       /* --p-button-label-font-weight: 700; */
    }
  
    :deep(.p-button.pastel-rainbow-bg .p-button-label),
    :deep(.p-button.pastel-rainbow-bg .p-button-icon) {
      color: var(--pastel-text-dark) !important;
    }
  
    :deep(.p-button.pastel-rainbow-bg:hover:not(:disabled)) {
      background: var(--pastel-rainbow-stripes-light) !important;
      color: var(--pastel-text-light) !important;
    }
  
    :deep(.p-button.pastel-rainbow-bg:hover:not(:disabled) .p-button-label),
    :deep(.p-button.pastel-rainbow-bg:hover:not(:disabled) .p-button-icon) {
      color: var(--pastel-text-light) !important;
    }
  }
  
  /* --- FINE CSS SPECIFICO RAINBOW BUTTON --- */
  </style>