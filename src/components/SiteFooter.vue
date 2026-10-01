<script setup>
import { navLinks, site, socialLinks } from '../data/site.js'
</script>

<template>
  <footer>
    <div>
      <h3>Quick Links</h3>
      <p v-for="link in navLinks" :key="link.to">
        <RouterLink :to="link.to">{{ link.label }}</RouterLink>
      </p>
    </div>

    <div>
      <h3>Contact Me</h3>
      <p><a :href="`mailto:${site.email}`">{{ site.email }}</a></p>
      <p>{{ site.location }}</p>
    </div>

    <div>
      <h3>Let's Connect</h3>
      <p v-for="link in socialLinks" :key="link.href">
        <a :href="link.href" target="_blank" rel="noopener noreferrer">
          {{ link.label }}
        </a>
      </p>
    </div>
  </footer>
</template>
