<script setup>
import ProjectCard from '../components/ProjectCard.vue'
import { projects } from '../data/site.js'
</script>

<template>
  <section class="projects-section">
    <h1 class="section-title">My Projects</h1>

    <div class="Projects">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>
