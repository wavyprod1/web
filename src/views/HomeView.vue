<template>
  <div class="home-view">
    <HeroSection />
    <ProblemSolutionSection />
    <ServicesSection />
    <AudioPortfolioSection />
    <TestimonialsSection />
    <AboutMeSection />
    <FinalCTASection /> <!-- Aggiunto il componente CTA/Contatti -->

    <!-- Rimosso il placeholder finale -->

  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue';
import ProblemSolutionSection from '@/components/sections/ProblemSolutionSection.vue';
import ServicesSection from '@/components/sections/ServicesSection.vue';
import AudioPortfolioSection from '@/components/sections/AudioPortfolioSection.vue';
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue';
import AboutMeSection from '@/components/sections/AboutMeSection.vue';
import FinalCTASection from '@/components/sections/FinalCTASection.vue'; // Importa il nuovo componente

// Altre importazioni se necessarie
</script>

<style scoped>
.home-view { /* ... */ }
/* Rimosso lo stile .placeholder-section */
</style>