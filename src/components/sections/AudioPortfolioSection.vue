<template>
  <section id="portfolio" class="audio-portfolio-section surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="section-content-container mx-auto">
      <div class="text-center mb-6">
        <h2 class="text-4xl font-bold mb-3">
          Ascolta il Mio <span class="text-primary">Lavoro</span>
        </h2>
        <p class="text-xl text-color-secondary line-height-3">
          Una selezione di brani che mostrano diversi stili e competenze.
        </p>
      </div>

      <!-- Player Area -->
      <div v-if="selectedTrack" class="player-area surface-card p-4 border-round shadow-2 mb-5">
        <div class="flex flex-column md:flex-row md:align-items-center gap-4">
          <!-- Track Info -->
          <div class="flex-grow-1">
            <h3 class="text-2xl font-bold mt-0 mb-2">{{ selectedTrack.title }}</h3>
            <p class="mt-0 mb-1 text-lg text-color-secondary">
              <i class="pi pi-user mr-2"></i>{{ selectedTrack.artist }}
            </p>
            <p class="mt-0 mb-1 text-color-secondary">
              <i class="pi pi-tag mr-2"></i>{{ selectedTrack.genre }}
              <span v-if="selectedTrack.label" class="ml-2"
                >| <i class="pi pi-building mx-2"></i>{{ selectedTrack.label }}</span
              >
            </p>
            <div class="mt-2">
              <span class="font-semibold mr-2">Ruoli:</span>
              <Tag
                v-for="role in selectedTrack.roles"
                :key="role"
                :value="role"
                severity="contrast"
                class="mr-1 mb-1"
              ></Tag>
            </div>
          </div>

          <!-- Controls -->
          <div class="player-controls flex align-items-center gap-3 mt-3 md:mt-0">
            <Button
              :icon="isPlaying ? 'pi pi-pause' : 'pi pi-play'"
              @click="togglePlayPause"
              rounded
              text
              severity="contrast"
              aria-label="Play/Pause"
              size="large"
            />
            <div class="time-display text-sm text-color-secondary w-full">
              <span>{{ formatTime(currentTime) }}</span> / <span>{{ formatTime(duration) }}</span>
              <ProgressBar
                :value="progressPercentage"
                :showValue="false"
                style="height: 6px"
                class="mt-1"
              ></ProgressBar>
            </div>
          </div>
        </div>
        <!-- Audio Element -->
        <audio
          ref="audioPlayerRef"
          :src="selectedTrack.audioSrc"
          @loadedmetadata="handleMetadata"
          @timeupdate="handleTimeUpdate"
          @ended="handleEnded"
          preload="metadata"
          class="hidden"
        ></audio>
      </div>
      <!-- Messaggio se nessuna traccia è selezionata (non dovrebbe apparire con l'init) -->
      <div
        v-else
        class="text-center text-color-secondary p-5 surface-card border-round shadow-2 mb-5"
      >
        Caricamento player...
      </div>

      <!-- Track List Box -->
      <div class="track-list-box border-1 surface-border border-round">
        <DataView :value="tracks" dataKey="id" layout="list">
          <template #list="slotProps">
            <!-- Il contenuto scorrevole sarà gestito dal CSS sottostante -->
            <div class="grid grid-nogutter">
              <div v-for="(item, index) in slotProps.items" :key="item.id" class="col-12">
                <div
                  class="p-3 surface-border flex align-items-center cursor-pointer hover:surface-hover list-item"
                  :class="{
                    'surface-highlight': selectedTrack && item.id === selectedTrack.id,
                    'border-top-1': index !== 0,
                  }"
                  @click="selectTrack(item)"
                >
                  <div class="flex-grow-1">
                    <div class="font-semibold text-lg">{{ item.title }}</div>
                    <div class="text-sm text-color-secondary">{{ item.genre }}</div>
                  </div>
                  <i
                    v-if="selectedTrack && item.id === selectedTrack.id"
                    class="pi pi-volume-up text-primary text-xl ml-3"
                  ></i>
                  <i v-else class="pi pi-play text-color-secondary text-xl ml-3"></i>
                </div>
              </div>
            </div>
          </template>
          <template #empty>
            <div class="p-3 text-center text-color-secondary">Nessuna traccia trovata.</div>
          </template>
        </DataView>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, nextTick } from 'vue' // Aggiunto nextTick
import DataView from 'primevue/dataview'
import Button from 'primevue/button'
import Tag from 'primevue/tag'
import ProgressBar from 'primevue/progressbar'

import tracksData from '@/assets/data/portfolio-tracks.json'

interface Track {
  id: number
  title: string
  artist: string
  genre: string
  label?: string
  roles: string[]
  audioSrc: string
}

// Stato reattivo
const tracks = ref<Track[]>(tracksData)
const selectedTrack = ref<Track | null>(null)
const audioPlayerRef = ref<HTMLAudioElement | null>(null)
const isPlaying = ref(false)
const currentTime = ref(0)
const duration = ref(0)

const progressPercentage = computed(() => {
  return duration.value > 0 ? (currentTime.value / duration.value) * 100 : 0
})

const selectTrack = (track: Track) => {
  // Salva lo stato corrente di play/pause se la traccia è la stessa
  const wasPlaying = selectedTrack.value?.id === track.id && isPlaying.value

  if (selectedTrack.value?.id !== track.id) {
    selectedTrack.value = track
    isPlaying.value = false
    currentTime.value = 0
    duration.value = 0

    // Usa nextTick per assicurarsi che l':src sia aggiornato nel DOM
    // prima di provare a caricare il nuovo audio
    nextTick(() => {
      if (audioPlayerRef.value) {
        audioPlayerRef.value.load()
        // Non tentare il play automatico qui, lo farà togglePlayPause se necessario
      }
    })
  } else {
    // Se si clicca sulla traccia già selezionata, fa play/pausa
    togglePlayPause()
  }
}

const togglePlayPause = () => {
  if (!audioPlayerRef.value || !selectedTrack.value) return // Non fare nulla se non c'è traccia

  if (isPlaying.value) {
    audioPlayerRef.value.pause()
    isPlaying.value = false
  } else {
    // Prova a far partire l'audio
    const playPromise = audioPlayerRef.value.play()
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // La riproduzione è partita con successo
          isPlaying.value = true
        })
        .catch((error) => {
          console.error('Errore durante la riproduzione:', error)
          // Potrebbe essere necessario che l'utente interagisca di nuovo
          isPlaying.value = false
        })
    } else {
      // Fallback se .play() non restituisce una Promise (raro)
      isPlaying.value = true
    }
  }
}

const handleMetadata = () => {
  if (audioPlayerRef.value) {
    duration.value = audioPlayerRef.value.duration
  }
}

const handleTimeUpdate = () => {
  if (audioPlayerRef.value) {
    currentTime.value = audioPlayerRef.value.currentTime
  }
}

const handleEnded = () => {
  isPlaying.value = false
}

const formatTime = (seconds: number): string => {
  if (isNaN(seconds) || seconds === Infinity || seconds < 0) {
    return '00:00'
  }
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = Math.floor(seconds % 60)
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
}

// Seleziona la prima traccia al montaggio
onMounted(() => {
  if (tracks.value.length > 0) {
    selectedTrack.value = tracks.value[0]
    // Non chiamiamo play(), solo carichiamo i dati.
    // Il :src reattivo dovrebbe bastare, ma aggiungiamo un controllo
    // per assicurarci che il riferimento audio sia disponibile
    nextTick(() => {
      if (audioPlayerRef.value) {
        // La durata verrà impostata dall'evento 'loadedmetadata'
        // console.log("Audio player reference available on mount for track:", selectedTrack.value?.title);
      } else {
        // console.warn("Audio player reference not available on mount.");
      }
    })
  }
})
</script>

<style scoped>
.section-content-container {
  max-width: 1200px;
}

.player-area {
  /* Aggiungi stili se necessario */
}

.player-controls {
  /* Aggiungi stili se necessario */
}

.time-display {
  min-width: 120px;
}

/* Contenitore per la lista tracce con scroll */
.track-list-box {
  overflow: hidden; /* Nasconde l'overflow del contenitore esterno */
}

/* Applica lo scroll e l'altezza massima al contenuto interno del DataView */
/* Selezioniamo il contenitore effettivo degli elementi */
:deep(.p-dataview-content) {
  max-height: 300px; /* <<-- IMPOSTA ALTEZZA MASSIMA DESIDERATA QUI */
  overflow-y: auto; /* Abilita lo scroll verticale solo se necessario */
  background: transparent; /* Assicura che lo sfondo interno non copra il box */
  padding: 0 !important; /* Rimuove padding interno se presente per controllo fine */
}

/* Stile per l'item della lista */
.list-item {
  /* Rimuovi il bordo superiore dal primo elemento */
  /* (gestito ora da :class nel template) */
}

.hover\:surface-hover:hover {
  background-color: var(--p-surface-hover);
}

.hidden {
  display: none;
}

/* Opzionale: rimuovere il padding dal contenitore principale del DataView */
/* se il padding viene gestito dagli item individuali */
:deep(.p-dataview) {
  padding: 0;
}

/* Assicura che il padding sull'item funzioni anche senza il padding del contenitore */
:deep(.p-dataview .p-dataview-content > .grid > .col-12 > .list-item) {
  /* Se hai rimosso il padding da p-dataview, potresti doverlo riapplicare qui */
  /* padding: 1rem; */ /* Già presente come p-3 nel template */
}
</style>
