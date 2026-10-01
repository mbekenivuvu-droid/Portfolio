<script setup>
import { navLinks, site } from '../data/site.js'
</script>

<template>
  <nav>
    <div class="logo">{{ site.logo }}</div>

    <ul>
      <li v-for="link in navLinks" :key="link.to">
        <RouterLink :to="link.to">{{ link.label }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>
