<template>
  <ul>
    <li v-for="deg in degs" v-bind:key="deg">
      <h1>
        <span>{{base}}</span><sup>{{deg}}</sup> = {{base ** deg}}
      </h1>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      base: 2
    }
  },
  props: {
    degs: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul {
  list-style-type: none;
  padding: 0;
}
</style>
