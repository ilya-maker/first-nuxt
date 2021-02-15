<template>
  <div class="navbar" >
    <p class="title">
      First NUXT
    </p>
    <a-menu v-model="current" mode="horizontal">
      <a-menu-item key="home">
        <nuxt-link no-prefetch exact to="/" active-class="current">
          <a-icon type="home" />
          Home
        </nuxt-link>
      </a-menu-item>
      <a-menu-item key="about">
        <nuxt-link no-prefetch to="/about" active-class="current">
          <a-icon type="info" />
          About
        </nuxt-link>
      </a-menu-item>
      <a-menu-item key="users">
        <nuxt-link no-prefetch to="/users" active-class="current">
          <a-icon type="man" />
          Users
        </nuxt-link>
      </a-menu-item>
      <a-menu-item key="login" v-if="!hasToken">
        <nuxt-link no-prefetch to="/login" active-class="current">
          <a-icon type="login" />
          Login
        </nuxt-link>
      </a-menu-item>
      <a-menu-item key="logout" v-else>
        <a @click.prevent="logout" active-class="current" href="#">
          <a-icon type="logout" />
          Logout
        </a>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: [this.$route.path],
    };
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logOut')
      this.$router.push('/login')
    },
  },
  computed: {
    hasToken() {
      return this.$store.getters['auth/hasToken']
    }
  }
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
}
.title {
  font-size: 1.2rem;
  margin: 0 20px 0 0;
}
</style>
