<template>
  <div class="login">
    <h1>Welcome {{ user }}</h1>
    <p>
      <router-link
        :to="{
          name: 'invoices'
        }"
        >Invoices</router-link
      >
    </p>
    <button @click="logOut" class="btn">Log out</button>
  </div>
</template>
<script>
import store from '@/store'

export default {
  data() {
    return {
      user: store.user
    }
  },
  methods: {
    logOut() {
      store.user = null
      this.$router.push('/')
    }
  }
}
</script>
<style lang="scss" scoped>
.login {
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }

  a {
    color: #333;
    text-decoration: none;
  }

  .btn {
    width: 150px;
    background-color: #42b983;
    border: none;
    outline: none;
    padding: 0.5rem;
    font-size: 1.2rem;
    color: #fff;
    margin: 1rem auto;
    cursor: pointer;
  }
}
</style>
