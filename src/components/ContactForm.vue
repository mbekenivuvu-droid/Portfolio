<script setup>
import { reactive, ref } from 'vue'
import { site } from '../data/site.js'

const form = reactive({
  first_name: '',
  surname: '',
  email: '',
  message: '',
})

const status = ref('idle')
const feedback = ref('')

async function onSubmit() {
  status.value = 'sending'
  feedback.value = ''

  try {
    const response = await fetch(`https://formspree.io/f/${site.formspreeId}`, {
      method: 'POST',
      body: new FormData(Object.entries(form).reduce((data, [key, value]) => {
        data.append(key, value)
        return data
      }, new FormData())),
      headers: { Accept: 'application/json' },
    })

    if (!response.ok) throw new Error(`Request failed: ${response.status}`)

    status.value = 'success'
    feedback.value = 'Thanks for reaching out! Your message has been sent.'
    Object.assign(form, { first_name: '', surname: '', email: '', message: '' })
  } catch (error) {
    status.value = 'error'
    feedback.value = 'Something went wrong. Please try again or email me directly.'
  }
}
</script>

<template>
  <div class="contact-form">
    <h2>Leave your information</h2>

    <p
      v-if="status === 'success'"
      class="form-alert form-alert--success"
      role="status"
    >
      {{ feedback }}
    </p>
    <p v-else-if="status === 'error'" class="form-alert form-alert--error" role="alert">
      {{ feedback }}
    </p>

    <form @submit.prevent="onSubmit">
      <input
        v-model="form.first_name"
        type="text"
        name="first_name"
        placeholder="Your name"
        autocomplete="given-name"
        required
      />
      <br /><br />

      <input
        v-model="form.surname"
        type="text"
        name="surname"
        placeholder="Your surname"
        autocomplete="family-name"
        required
      />
      <br /><br />

      <input
        v-model="form.email"
        type="email"
        name="email"
        placeholder="Your email"
        autocomplete="email"
        required
      />
      <br /><br />

      <textarea
        v-model="form.message"
        name="message"
        placeholder="Your message"
        required
      ></textarea>
      <br /><br />

      <button type="submit" class="btn-secondary-small" :disabled="status === 'sending'">
        {{ status === 'sending' ? 'Sending...' : 'Send' }}
      </button>
    </form>
  </div>
</template>
