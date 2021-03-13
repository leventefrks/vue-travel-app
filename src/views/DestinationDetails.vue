<template>
  <section>
    <h2>{{ destination.name }}</h2>
    <div class="destination-details">
      <img
        :src="require(`@/assets/${destination.image}`)"
        :alt="destination.name"
      />
      <p>{{ destination.description }}</p>
    </div>
  </section>
</template>

<script>
import store from '@/store'

export default {
  name: 'Details',

  props: {
    slug: {
      type: String,
      required: true
    }
  },

  computed: {
    destination() {
      return store.destinations.find(
        destination => destination.slug === this.slug
      )
    }
  }
}
</script>

<style scoped lang="scss">
section {
  margin-top: 60px;
}

h2 {
  text-align: center;
}

.destination-details {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;

  img {
    border-radius: 0.3rem;
    box-shadow: 2px 2px 5px #ccc;
  }

  p {
    margin-left: 30px;
  }
}
</style>
