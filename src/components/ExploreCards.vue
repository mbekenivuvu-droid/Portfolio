<script setup>
import { exploreCards } from '../data/site.js'
</script>

<template>
  <section>
    <br />
    <h2 class="section-title">Explore</h2>
    <br />

    <div class="cards">
      <div v-for="card in exploreCards" :key="card.title" class="card" :class="card.theme">
        <h3>{{ card.title }}</h3>

        <p>{{ card.body }}</p>

        <br />

        <template v-if="card.tags">
          <span v-for="tag in card.tags" :key="tag" class="tags">{{ tag }}</span>
        </template>

        <RouterLink v-else :to="card.to" class="read-more">
          {{ card.linkLabel }}
        </RouterLink>
      </div>
    </div>
  </section>
</template>
