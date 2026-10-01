<script setup>
import { site } from '../data/site.js'
</script>

<template>
  <section class="hero">
    <div class="hero-text">
      <p class="intro">Welcome to my portfolio</p>
      <h1>Hi, I'm <span>{{ site.name }}</span></h1>

      <h2>{{ site.role }}</h2>

      <p>{{ site.tagline }}</p>

      <div class="buttons">
        <RouterLink to="/projects" class="btn-primary">View My Work</RouterLink>
        <RouterLink to="/about" class="btn-secondary">Learn More</RouterLink>
      </div>
    </div>
  </section>
</template>
