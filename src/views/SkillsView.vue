<script setup>
import SkillCard from '../components/SkillCard.vue'
import { skills } from '../data/site.js'
</script>

<template>
  <section class="skills-section">
    <h1 class="section-title">My Skills</h1>

    <p class="section-intro">
      Here are the tools I use and what I'm currently learning as I grow in web development.
    </p>

    <div class="skills-grid">
      <SkillCard v-for="skill in skills" :key="skill.name" :skill="skill" />
    </div>
  </section>
</template>
