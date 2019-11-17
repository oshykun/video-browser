<template>
  <div>
    Please wait...
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'AuthHandler',
    methods: mapActions(['finalizeLogin']),
    created() {
      // get everything after # from URL(path)
      // e.g. http://localhost:8080/oauth2/callback#/access_token=f2f1d5b828ea93c49c9346f475453c6eb90f985
      // #/access_token=f2f1d5b828ea93c49c9346f475453c6eb90f985
      this.finalizeLogin(window.location.hash);
    },
  };
</script>

<style scoped>

</style>
