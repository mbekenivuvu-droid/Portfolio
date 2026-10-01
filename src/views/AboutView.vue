<script setup>
import { aboutParagraphs } from '../data/site.js'
import { images } from '../data/images.js'
import { buildSrcset, fallbackSrc } from '../utils/images.js'

const image = images.pic
</script>

<template>
  <section class="about-section">
    <h2 class="section-title">About Me</h2>

    <div class="about-container">
      <div class="about-image">
        <picture>
          <source
            type="image/webp"
            :srcset="buildSrcset(image, 'webp')"
            sizes="(max-width: 768px) 90vw, 300px"
          />
          <img
            :src="fallbackSrc(image)"
            :srcset="buildSrcset(image, 'jpg')"
            sizes="(max-width: 768px) 90vw, 300px"
            alt="Vuyolwethu Mbekeni portrait"
            loading="lazy"
            decoding="async"
            width="300"
            height="400"
          />
        </picture>
      </div>

      <div class="about-text">
        <p v-for="paragraph in aboutParagraphs" :key="paragraph">
          {{ paragraph }}
        </p>

        <RouterLink to="/contact" class="read-more">Get in Touch →</RouterLink>
      </div>
    </div>
  </section>
</template>