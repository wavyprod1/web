<template>
  <!-- Applica la classe per lo sfondo custom direttamente al nav -->
  <nav class="navbar-component shadow-2 navbar-rainbow-bg">
    <div
      class="navbar-content-container mx-auto px-4 md:px-6 lg:px-8 flex justify-content-between align-items-center"
    >
      <!-- Testo "Logo" a Sinistra -->
      <div class="navbar-logo">
        <a href="#hero" @click.prevent="scrollToTop" aria-label="Torna in cima" class="logo-link">
          <span class="logo-text">Elia Pirrello</span>
        </a>
      </div>

      <!-- Menubar per i Link a Destra -->
      <div class="navbar-menu">
        <Menubar :model="items" class="links-menubar"> </Menubar>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Menubar from 'primevue/menubar'

const items = ref([
  { label: 'Il problema', url: '#problem-solution' },
  { label: 'Iniziamo', url: '#qualificazione' },
  { label: 'Il Mio Metodo', url: '#metodo' },
  { label: 'Portfolio', url: '#portfolio' },
  { label: 'Dicono di Me', url: '#testimonianze' },
  { label: 'Chi Sono', url: '#about-me' },
  { label: 'Contatti', url: '#contatti' },
])

// Funzione per scrollare in cima
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.navbar-component {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  /* Stile base (Light Mode) per lo sfondo gradiente */
  background: var(--pastel-rainbow-stripes-light) !important; /* Usa il gradiente light */
  opacity: 1;
  box-shadow: var(--p-shadow-2);
  transition: background 0.3s ease; /* Transizione per il background */
  /* Colore testo di default per light mode (da custom-styles.css) */
  color: var(--pastel-text-light) !important;
}

/* Contenitore interno */
.navbar-content-container {
  max-width: 1200px;
  height: 60px; /* Mantieni altezza navbar */
}

/* Stile per il testo del "logo" */
.navbar-logo .logo-link {
  text-decoration: none;
  color: inherit; /* Eredita colore dal .navbar-component */
}
.navbar-logo .logo-text {
  font-size: 1.5rem; /* Dimensione font per il nome */
  font-weight: 600; /* Peso semi-bold */
  /* Il colore viene ereditato da .navbar-component */
  transition: color 0.3s ease; /* Transizione colore testo */
}

/* Stili per il Menubar dei link a destra */
.navbar-menu {
}

/* Stili :deep() per Menubar */
:deep(.links-menubar) {
  padding: 0;
  border: none;
  background-color: transparent;
}

:deep(.links-menubar .p-menubar-button) {
  display: none;
}

/* Stile link menu - assicurati che usino il colore corretto */
:deep(.links-menubar .p-menuitem-link) {
  transition:
    background-color 0.2s,
    color 0.2s;
  border-radius: var(--p-border-radius);
  /* Forza il colore del testo ad ereditare quello della navbar */
  color: inherit !important;
}
/* Rimuovi icona se non le vuoi */
:deep(.links-menubar .p-menuitem-icon) {
  display: none;
}
:deep(.links-menubar .p-menuitem-text) {
  /* Rimuovi padding extra se le icone non ci sono */
  padding: 0.75rem 1rem; /* Adatta padding se necessario */
}

:deep(.links-menubar .p-menuitem-link:hover) {
  /* Sfondo hover standard o custom */
  background-color: rgba(255, 255, 255, 0.1); /* Leggero bianco trasparente su gradiente */
  /* Oppure usa var(--p-surface-hover); se preferisci */
}

/* --- Media Query per Dark Mode --- */
@media (prefers-color-scheme: dark) {
  .navbar-component {
    /* Sovrascrivi background per DARK MODE */
    background: var(--pastel-rainbow-stripes-dark) !important; /* Usa il gradiente dark */
    /* Sovrascrivi colore testo per DARK MODE */
    color: var(--pastel-text-dark) !important;
  }

  /* Non serve più invertire il logo immagine */
  /* .logo-image { filter: invert(1); } */

  /* Stile hover link in dark mode */
  :deep(.links-menubar .p-menuitem-link:hover) {
    background-color: rgba(0, 0, 0, 0.1); /* Leggero nero trasparente */
  }
}

/* --- Media Query per Mobile --- */
@media (max-width: 991px) {
  .navbar-menu {
    display: none;
  }
  .navbar-content-container {
    justify-content: center !important;
    display: flex;
    height: 50px;
  }
  .navbar-logo .logo-text {
    font-size: 1.3rem;
  } /* Riduci testo logo */
}

@media (max-width: 767px) {
}
</style>
