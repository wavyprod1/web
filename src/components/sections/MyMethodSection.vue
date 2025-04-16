<template>
  <section id="metodo" class="my-method-section surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div class="section-content-container mx-auto">
      <!-- Titolo Principale e Intro -->
      <div class="text-center mb-6">
        <h2 class="text-4xl font-bold mb-3">
          Oltre la Produzione: Un <span class="text-primary">Viaggio Creativo</span> Insieme
        </h2>
        <p class="text-xl text-color-secondary line-height-3">
          Il mio approccio va oltre la tecnica: è una partnership dedicata a dare vita alla tua
          visione sonora unica.
        </p>
      </div>

      <!-- Sezione 1: Filosofia -->
      <div class="mb-5 md:mb-6">
        <!-- Usa Flexbox per allineare icona e testo nel titolo -->
        <h3 class="text-3xl font-semibold mb-3 text-primary flex align-items-center gap-2">
          <i class="pi pi-comments"></i>
          <span>La Filosofia: Capire Prima di Creare</span>
        </h3>
        <p class="text-lg line-height-3 text-color-secondary">
          Credo fermamente che la grande musica nasca dall'ascolto profondo. Prima di toccare
          qualsiasi strumento o software, dedico tempo a comprendere te, la tua arte, il messaggio
          che vuoi comunicare e la visione che guida il tuo brano. Analizziamo insieme il testo, le
          influenze e le emozioni per costruire una solida base creativa condivisa, assicurandoci di
          essere sulla stessa lunghezza d'onda.
        </p>
      </div>

      <!-- Sezione 2: Processo -->
      <div class="mb-5 md:mb-6">
        <!-- Usa Flexbox per allineare icona e testo nel titolo -->
        <h3 class="text-3xl font-semibold mb-3 text-primary flex align-items-center gap-2">
          <i class="pi pi-sync"></i>
          <span>Il Processo: Dalla Tua Idea al Suono Finale</span>
        </h3>
        <p class="text-lg line-height-3 text-color-secondary">
          Ogni progetto è un percorso a sé, ma generalmente collaboriamo attraverso fasi collaudate:
          dall'incontro iniziale per definire chiaramente gli obiettivi, allo sviluppo di proposte
          sonore (se necessario), alla co-produzione creativa in studio o a distanza, passando per
          la registrazione di alta qualità, l'editing meticoloso che preserva l'intenzione, fino al
          mixaggio bilanciato che esalta ogni elemento e al mastering finale ottimizzato per
          brillare su tutte le piattaforme. La tua voce e il tuo feedback sono cruciali in ogni
          step.
        </p>
      </div>

      <!-- Sezione 3: Esempi di Collaborazione -->
      <div class="mb-5 md:mb-6">
        <h3 class="text-3xl font-semibold mb-4 text-center text-primary">
          Come Possiamo Collaborare (Esempi)
        </h3>
        <div class="grid">
          <!-- Esempio 1: Elevare Traccia Esistente -->
          <div class="col-12 md:col-6 p-3">
            <div class="p-4 border-1 surface-border border-round h-full flex flex-column">
              <!-- Usa Flexbox per allineare icona e testo nel titolo h4 -->
              <h4
                class="text-2xl font-semibold mt-0 mb-3 flex align-items-center gap-2 justify-content-center md:justify-content-start"
              >
                <i class="pi pi-wrench"></i>
                <span
                  >Hai già una traccia ma non "suona"? <br class="hidden md:inline" />La Eleviamo
                  Insieme.</span
                >
              </h4>
              <p class="text-lg line-height-3 text-color-secondary m-0 flex-grow-1">
                Partiamo dalla tua demo o produzione esistente. Analizziamo insieme cosa funziona e
                cosa può essere migliorato, poi interveniamo con precisione: editing chirurgico,
                mixaggio professionale che dia spazio e impatto, mastering competitivo e, se serve,
                aggiunte produttive mirate (sound design, piccole variazioni, automazioni creative)
                per far emergere il vero potenziale del brano, sempre rispettandone l'anima
                originale.
              </p>
            </div>
          </div>
          <!-- Esempio 2: Creare da Zero -->
          <div class="col-12 md:col-6 p-3">
            <div class="p-4 border-1 surface-border border-round h-full flex flex-column">
              <!-- Usa Flexbox per allineare icona e testo nel titolo h4 -->
              <h4
                class="text-2xl font-semibold mt-0 mb-3 flex align-items-center gap-2 justify-content-center md:justify-content-start"
              >
                <i class="pi pi-star"></i>
                <span
                  >Hai un Testo e una Visione? <br class="hidden md:inline" />Creiamo il Tuo Singolo
                  da Zero.</span
                >
              </h4>
              <p class="text-lg line-height-3 text-color-secondary m-0 flex-grow-1">
                Questo è il percorso completo per trasformare la tua scintilla creativa – anche solo
                un testo, una melodia o un'idea – in un singolo finito e impattante. Costruiamo
                insieme l'arrangiamento perfetto, selezioniamo i suoni che raccontano la tua storia,
                registriamo, produciamo e finalizziamo il tutto con una qualità sonora da etichetta,
                assicurandoci che ogni scelta rifletta la tua identità artistica unica.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Sezione 4: Risultato -->
      <div class="mb-6">
        <!-- Usa Flexbox per allineare icona e testo nel titolo -->
        <h3 class="text-3xl font-semibold mb-3 text-primary flex align-items-center gap-2">
          <i class="pi pi-gift"></i>
          <span>Il Risultato: Più Che una Canzone</span>
        </h3>
        <p class="text-lg line-height-3 text-color-secondary">
          Lavorare insieme significa ottenere un prodotto audio di cui essere fieri, ma l'esperienza
          va oltre. È un'opportunità di crescita artistica, di affinare la tua visione sonora e di
          acquisire maggiore consapevolezza del tuo potenziale. Non avrai solo una traccia finita,
          ma un'esperienza collaborativa arricchente e un partner creativo affidabile per i tuoi
          progetti futuri.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'

// --- SOSTITUISCI CON IL TUO LINK CALENDLY REALE ---
const calendlyLink = ref('https://calendly.com/tuo-link-calendly')
// ----------------------------------------------------
</script>

<style scoped>
.section-content-container {
  max-width: 1200px;
}

/* Assicura che le colonne degli esempi abbiano la stessa altezza */
.grid .col-12 .p-4 {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.grid .col-12 .p-4 p {
  flex-grow: 1;
}

.no-underline {
  text-decoration: none;
}

/* Rimuovi la regola per vertical-align-bottom se presente */
/* .vertical-align-bottom { ... } */

/* Opzionale: aggiusta leggermente la dimensione dell'icona nei titoli h3/h4 se necessario */
h3 i.pi,
h4 i.pi {
  font-size: 1.8rem; /* Riduci leggermente se troppo grande rispetto a h3 */
}
h4 i.pi {
  font-size: 1.5rem; /* Riduci leggermente se troppo grande rispetto a h4 */
}
</style>
