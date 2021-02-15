<template>
  <section>
    <h1>User {{user.name}}</h1>
  </section>
</template>

<script>
export default {
  async asyncData({$axios, params}) {
    const user = await $axios.$get(`https://jsonplaceholder.typicode.com/users/${params.user}`);
    return {user};
  },
  validate({params}) {
    if (params.user % 2 === 0) {
      return true;
    }
    return false;
  }
}
</script>
