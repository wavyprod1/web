<template>
  <a
    href="https://calendly.com/wavypersonal1/30min"
    target="_blank"
    rel="noopener noreferrer"
    class="no-underline inline-block"
  >
    <Button
      :label="label"
      :icon="icon"
      :size="size"
      :severity="severity"
      :outlined="outlined"
      :raised="raised"
      :rounded="rounded"
      :text="text"
      :link="link"
      class="w-full"
    />
  </a>
</template>

<script setup lang="ts">
import Button from 'primevue/button'

// Definisci le props per personalizzare l'aspetto del bottone PrimeVue
// I valori di default si basano su un bottone standard/primario
const props = defineProps({
  label: {
    type: String,
    default: 'CTA', // Placeholder generico
  },
  icon: {
    type: String,
    default: null, // Nessuna icona di default
  },
  size: {
    type: String, // 'small', 'large', o null per default
    default: null,
  },
  severity: {
    type: String, // 'primary', 'secondary', 'success', 'info', 'warning', 'danger', 'contrast'
    default: 'primary', // Stile primario di default
  },
  outlined: {
    type: Boolean,
    default: false,
  },
  raised: {
    type: Boolean,
    default: false, // Non rialzato di default
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  text: {
    type: Boolean,
    default: false,
  },
  link: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped>
/* NESSUN CSS CUSTOM NECESSARIO QUI! */
/* L'aspetto è controllato dalle props passate al componente Button di PrimeVue */

.no-underline {
  text-decoration: none;
}

/* Assicura che il link si comporti come blocco per contenere il bottone */
.inline-block {
  display: inline-block;
  width: auto; /* Permette al bottone interno di definire la larghezza */
}

/* Su mobile, potresti voler che il wrapper prenda tutta la larghezza */
/* Ma è meglio gestirlo dove usi il componente con classi PrimeFlex */
/* @media (max-width: 767px) {
     .inline-block {
        width: 100%;
     }
  } */
</style>
