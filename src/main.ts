import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Import PrimeVue e Tema (rimettiamo Aura per esempio)
import PrimeVue from 'primevue/config';
import Lara from '@primeuix/themes/lara';
import Aura from '@primeuix/themes/aura';

// Import PrimeFlex & PrimeIcons
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

// Importa i tuoi stili custom DOPO quelli base
import '@/assets/css/custom-styles.css';

import Tooltip from 'primevue/tooltip';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(PrimeVue, {
    theme: {
        preset: Aura // O Lara, o quello che preferisci
    },
    ripple: true
});

// Registra la direttiva Tooltip globalmente
app.directive('tooltip', Tooltip);

app.mount('#app')