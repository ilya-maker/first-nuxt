<template>
  <section>
    <h1>User page</h1>
    <ul>
      <li v-for="user of users" :key="user.id">
        <a href="#" @click.prevent="openUser(user.id)">
          User: {{user.name}}
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  async fetch({store}) {
    if (!store.getters['users/getUsers'].lenght) {
      await store.dispatch('users/fetch')
    }
  },
  computed: {
    users() {
      const users = this.$store.getters['users/getUsers'];
      return users;
    }
  },
  methods: {
    openUser(id) {
      this.$router.push(`/users/${id}`)
    }
  }
}
</script>
