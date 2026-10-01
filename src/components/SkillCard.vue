<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  skill: {
    type: Object,
    required: true,
  },
})

const level = ref(0)

onMounted(() => {
  requestAnimationFrame(() => {
    level.value = props.skill.level
  })
})
</script>

<template>
  <div class="skill-card">
    <h3>{{ skill.name }}</h3>

    <div
      class="bar"
      role="progressbar"
      :aria-valuenow="skill.level"
      aria-valuemin="0"
      aria-valuemax="100"
      :aria-label="skill.name"
    >
      <div class="fill" :style="{ '--level': `${level}%` }"></div>
    </div>

    <p>{{ skill.description }}</p>
  </div>
</template>
