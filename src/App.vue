<template lang="html">
  <div id="app">
    <navigation />
    <transition name="slide" mode="out-in">
      <router-view :key="$route.path" />
    </transition>
  </div>
</template>
<script>
import Navigation from '@/components/Navigation'

export default {
  title: 'App',

  components: {
    Navigation
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
}

* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.slide-enter-active,
.side-leave-active {
  transition: opacity 0.3s ease-in;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}
</style>
