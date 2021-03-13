<template>
  <div class="hello">
    <div class="destinations">
      <div v-for="destination in destinations" :key="destination.name">
        <router-link
          :to="{
            name: 'DestinationDetails',
            params: { slug: destination.slug }
          }"
        >
          <figure>
            <router-link
              :to="{
                name: 'DestinationDetails',
                params: { slug: destination.slug }
              }"
            >
              <img
                :src="require(`@/assets/${destination.image}`)"
                :alt="destination.name"
              />
            </router-link>
          </figure>
          <h2>{{ destination.name }}</h2>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'Home',

  computed: {
    destinations() {
      return store.destinations
    }
  }
}
</script>
<style lang="scss" scoped>
.destinations {
  display: flex;
  max-width: 1200px;
  margin: 100px auto;
  align-items: center;
  justify-content: space-around;

  img {
    max-width: 250px;
    border-radius: 0.2rem;
    box-shadow: 3px 2px 10px #ccc;
  }

  h2 {
    margin-top: 0.5rem;
  }

  a {
    color: #333;
    text-decoration: none;
  }
}
</style>
