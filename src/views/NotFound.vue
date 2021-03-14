<template>
  <section>
    <h1>Not found</h1>
    <router-link to="/">home</router-link>
  </section>
</template>
<style lang="scss" scoped>
section {
  max-width: 1200px;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;

  h1 {
    font-size: 4rem;
    font-weight: 600;
  }

  a {
    margin-top: 1rem;
    text-decoration: none;
    color: #333;
  }
}
</style>
