<template lang="html">
  <div>
    <section>
      <div class="experience-details">
        <img
          :src="require(`@/assets/${experience.image}`)"
          :alt="experience.name"
        />
        <div class="experience-details__description">
          <h1>{{ experience.name }}</h1>
          <p>{{ experience.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'ExperienceDetails',

  props: {
    slug: {
      type: String,
      required: true
    },

    experienceSlug: {
      type: String,
      required: true
    }
  },

  computed: {
    destination() {
      return store.destinations.find(
        destination => destination.slug === this.slug
      )
    },

    experience() {
      return this.destination.experiences.find(
        experience => experience.slug === this.experienceSlug
      )
    }
  }
}
</script>

<style scoped lang="scss">
section {
  max-width: 1200px;
  margin: 60px auto;
}

.experience-details {
  display: flex;

  img {
    border-radius: 0.3rem;
    box-shadow: 2px 2px 5px #ccc;
  }

  &__description {
    margin-left: 30px;

    h1 {
      margin-bottom: 1rem;
      font-size: 2rem;
    }

    p {
      line-height: 26px;
    }
  }
}
</style>
