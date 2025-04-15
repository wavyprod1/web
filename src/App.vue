<template>
  <div id="app-layout">
    <Navbar />

    <main class="main-content">
      <RouterView /> <!-- Qui viene renderizzata HomeView (o altre viste future) -->
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/layout/Navbar.vue' // Importa la Navbar
import Footer from './components/layout/Footer.vue' // Importa il Footer
</script>

<style scoped>
/* Puoi definire uno stile globale per il layout qui se necessario */
#app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Assicura che il layout occupi almeno tutta l'altezza dello schermo */
}

.main-content {
  flex-grow: 1; /* Fa sì che il contenuto principale occupi lo spazio disponibile */
}
</style>

<style>
/* Stili Globali (NON scoped) - Usare con cautela */
/* Idealmente, la maggior parte dello stile viene dal tema PrimeVue */
body {
  margin: 0;
  font-family: var(--p-font-family); /* Usa il font definito dal tema Aura */
  background-color: var(--p-surface-ground); /* Usa il colore di sfondo definito da Aura */
  color: var(--p-text-color); /* Usa il colore del testo definito da Aura */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>