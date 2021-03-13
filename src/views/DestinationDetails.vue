<template lang="html">
  <div>
    <section>
      <div class="destination-details">
        <img
          :src="require(`@/assets/${destination.image}`)"
          :alt="destination.name"
        />
        <div class="destination-details__description">
          <h1>{{ destination.name }}</h1>
          <p>{{ destination.description }}</p>
        </div>
      </div>
    </section>
    <section class="experiences">
      <h2>Top experiences in {{ destination.name }}</h2>
      <div class="cards">
        <div
          v-for="experience in destination.experiences"
          :key="experience.slug"
          class="card"
        >
          <router-link
            :to="{
              name: 'ExperienceDetails',
              params: { experienceSlug: experience.slug }
            }"
          >
            <img
              :src="require(`@/assets/${experience.image}`)"
              :alt="experience.name"
            />
            <span class="card__text">
              {{ experience.name }}
            </span>
          </router-link>
        </div>
      </div>
      <router-view :key="$route.path" />
    </section>
  </div>
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
  max-width: 1200px;
  margin: 60px auto;
}

.destination-details {
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

.experiences {
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  h2 {
    margin-bottom: 1rem;
    font-size: 1.4rem;
  }

  .cards {
    display: flex;
    justify-content: space-between;

    .card {
      display: flex;
      flex-direction: column;
      position: relative;

      img {
        flex: 1 1 auto;
        max-width: 250px;
        border-radius: 0.2rem;
      }

      &__text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-weight: 600;
        font-size: 1.4rem;
        color: #fff;
        white-space: nowrap;
      }
    }
  }
}
</style>
