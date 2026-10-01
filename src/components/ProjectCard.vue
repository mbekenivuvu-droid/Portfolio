<script setup>
import { computed } from 'vue'
import { images } from '../data/images.js'
import { buildSrcset, fallbackSrc } from '../utils/images.js'

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})

const image = computed(() => images[props.project.image])
const webpSet = computed(() => buildSrcset(image.value, 'webp'))
const jpgSet = computed(() => buildSrcset(image.value, 'jpg'))
</script>

<template>
  <div class="project1" tabindex="0">
    <picture>
      <source
        type="image/webp"
        :srcset="webpSet"
        sizes="(max-width: 768px) 90vw, 340px"
      />
      <img
        :src="fallbackSrc(image)"
        :srcset="jpgSet"
        sizes="(max-width: 768px) 90vw, 340px"
        :alt="project.alt"
        loading="lazy"
        decoding="async"
        width="340"
        height="212"
      />
    </picture>

    <div class="overlay">
      <h3>{{ project.title }}</h3>
      <span class="tag">{{ project.tag }}</span>
      <p>{{ project.description }}</p>
    </div>
  </div>
</template>
