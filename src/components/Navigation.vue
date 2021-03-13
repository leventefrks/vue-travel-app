<template lang="html">
  <nav id="nav">
    <ul class="nav-links">
      <li class="links">
        <router-link to="/">Home</router-link>
      </li>
      <li
        v-for="destination in destinations"
        :key="destination.name"
        class="links"
      >
        <router-link
          :to="{
            name: 'DestinationDetails',
            params: { slug: destination.slug }
          }"
          >{{ destination.name }}</router-link
        >
      </li>
    </ul>
  </nav>
</template>
<script>
import store from '@/store'

export default {
  name: 'Navigation',

  data() {
    return {
      destinationId: this.$route.params.id,
      destinations: store.destinations
    }
  }
}
</script>
<style lang="scss" scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-links {
    display: flex;
    align-items: center;
    list-style-type: none;
    font-size: 1.2rem;
    padding: 1rem 0;

    a {
      font-weight: bold;
      color: #2c3e50;
      text-decoration: none;
      padding: 0 20px;

      &.active {
        color: #42b983;
      }
    }
  }
}
</style>
