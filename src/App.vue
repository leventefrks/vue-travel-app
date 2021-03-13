<template lang="html">
  <div id="app">
    <navigation />
    <router-view :key="$route.path" />
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
</style>
