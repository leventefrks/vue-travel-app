<template lang="html">
  <div class="login">
    <h1>Login</h1>
    <div class="form">
      <label for="username">Username</label>
      <input v-model="username" type="text" name="username" class="input" />
      <label for="password">Password</label>
      <input v-model="password" type="password" class="input" />
      <button @click="login" class="btn">Login</button>
    </div>
  </div>
</template>

<script>
import store from '@/store'
export default {
  data() {
    return {
      username: null,
      password: null
    }
  },

  methods: {
    login() {
      store.user = this.username
      const redirectPath = this.$route.query.redirect || '/'
      this.$router.push(redirectPath)
    }
  }
}
</script>
<style scoped lang="scss">
.login {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin-top: 60px;
}

h1 {
  margin-bottom: 2rem;
  text-align: center;
}

.form {
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 0 auto;

  .input {
    border: 1px solid #ccc;
    padding: 0.5rem;
    margin: 1rem 0;
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
