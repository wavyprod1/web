// src/composables/useScrollSpy.ts
import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollSpy(sectionIds: string[], options?: IntersectionObserverInit) {
  const visibleSection = ref<string | null>(null)
  let observer: IntersectionObserver | null = null

  const defaultOptions: IntersectionObserverInit = {
    rootMargin: '-50% 0px -50% 0px', // Trigger quando il centro della sezione passa il centro della viewport
    threshold: 0, // Appena un pixel è visibile (ma rootMargin è più efficace per 'centro')
    ...options,
  }

  onMounted(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleSection.value = entry.target.id
        }
      })
    }, defaultOptions)

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer?.observe(element)
      } else {
        console.warn(`[useScrollSpy] Element with id "${id}" not found.`)
      }
    })
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { visibleSection }
}

// Helper function per lo smooth scroll
export function scrollToSection(sectionId: string): void {
  const sectionElement = document.getElementById(sectionId)
  if (sectionElement) {
    sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
  } else {
    console.warn(`[scrollToSection] Element with id "${sectionId}" not found.`)
  }
}
