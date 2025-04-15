<template>
    <nav class="navbar-component shadow-2">
      <div class="navbar-content-container mx-auto px-4 md:px-6 lg:px-8 flex justify-content-between align-items-center">

        <div class="navbar-logo">
          <a href="#hero" @click.prevent="scrollToTop" aria-label="Torna in cima">
            <img
              src="/images/logo.png"
              alt="WavyProd1 Logo"
              class="logo-image"
            />
          </a>
        </div>

        <div class="navbar-menu">
           <Menubar :model="items" class="links-menubar">
           </Menubar>
        </div>

      </div>
    </nav>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import Menubar from 'primevue/menubar';

  const items = ref([
    { label: 'Problema/Soluzione', url: '#problem-solution' },
    { label: 'Servizi', url: '#servizi' },
    { label: 'Portfolio', url: '#portfolio' },
    { label: 'Testimonianze', url: '#testimonianze' },
    { label: 'Chi Sono', url: '#about-me' },
    { label: 'Contatti', url: '#contatti' }
  ]);

  // Funzione per scrollare in cima
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

</script>

<style scoped>
.navbar-component {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  /* Stile base (Light Mode) */
  background-color: var(--p-surface-100) !important; /* Usa un colore solido chiaro dalla palette */
  opacity: 1;
  box-shadow: var(--p-shadow-2);
  transition: background-color 0.3s ease;
}

.navbar-content-container {
  max-width: 1200px;
  height: 60px;
}

.navbar-logo .logo-image {
  display: block; /* Aggiunto per sicurezza */
  height: 40px;
  width: auto; /* Aggiunto per sicurezza */
  transition: filter 0.3s ease;
}

/* --- Stili Menubar :deep() --- */
:deep(.links-menubar) {
  padding: 0;
  border: none;
  background-color: transparent;
}

:deep(.links-menubar .p-menubar-button) {
  display: none;
}

:deep(.links-menubar .p-menuitem-link) {
   transition: background-color 0.2s;
   border-radius: var(--p-border-radius);
}

:deep(.links-menubar .p-menuitem-link:hover) {
   background-color: var(--p-surface-hover);
}

/* --- Media Query per Dark Mode --- */
/* Applica questi stili quando il sistema è in dark mode */
@media (prefers-color-scheme: dark) {
  .navbar-component {
    /* Sovrascrivi background per DARK MODE */
    background-color: var(--p-surface-800) !important; /* Usa un colore solido scuro dalla palette */
  }

  .logo-image {
    /* Inverti logo per DARK MODE */
    filter: invert(1);
  }
}

/* --- Media Query per Mobile (Responsive) --- */
@media (max-width: 991px) {
  .navbar-menu {
    display: none;
  }
  .navbar-content-container {
    justify-content: center !important; /* Forza il centrato */
    display: flex;
    height: 50px;
  }
  .navbar-logo .logo-image {
    height: 30px;
  }
}

@media (max-width: 767px) {
  /* Puoi aggiungere altri stili specifici per mobile ancora più piccoli */
}
</style>