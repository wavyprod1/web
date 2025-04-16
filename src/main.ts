import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Import PrimeVue e Utilità Tema
import PrimeVue from 'primevue/config'
import { definePreset } from '@primeuix/themes' // <--- Importa definePreset
import Aura from '@primeuix/themes/aura' // Importa il tema base Aura

// Import PrimeFlex & PrimeIcons
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'

// Importa i tuoi stili custom
import '@/assets/css/custom-styles.css'

import Tooltip from 'primevue/tooltip'

// Crea il tuo preset custom basato su Aura con primario Blu
const MyAuraBlue = definePreset(Aura, {
  semantic: {
    primary: {
      // Sovrascrivi la palette primaria
      50: '{blue.50}', // Mappa ai token primitivi 'blue'
      100: '{blue.100}',
      200: '{blue.200}',
      300: '{blue.300}',
      400: '{blue.400}',
      500: '{blue.500}', // Colore principale
      600: '{blue.600}',
      700: '{blue.700}',
      800: '{blue.800}',
      900: '{blue.900}',
      950: '{blue.950}',
    },
    // Qui potresti aggiungere altre sovrascritture semantiche se necessario
    // ad esempio per i colori 'surface' come visto nella documentazione
  },
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(PrimeVue, {
  theme: {
    preset: MyAuraBlue, // <--- USA IL TUO PRESET PERSONALIZZATO
    // Non servono opzioni extra per ora se vuoi il comportamento di default
    // options: { ... }
  },
  ripple: true,
})

// Registra la direttiva Tooltip globalmente
app.directive('tooltip', Tooltip)

app.mount('#app')
