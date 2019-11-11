<template>
  <div>
    <h2>Type video name to search:</h2>
    <input @input="onInput"/>
  </div>
</template>

<script>
  export default {
    name: 'SearchBar',
    methods: {
      onInput(event) {
        if (event.target.value.length >= 3) {
          this.$emit('termChange', event.target.value)
        }
      }
    }
  }
</script>

<style scoped>
  input {
    width: 75%;
  }

  div {
    text-align: center;
    margin: 20px;
  }
</style>
