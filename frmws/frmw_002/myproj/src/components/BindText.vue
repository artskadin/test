<template>
  <div>
    <h1>Скадин Артем</h1>
    <input v-model="value" />
    <br />
    <input v-model="value" />
  </div>
    
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: rgb(18, 135, 225);
}
</style>
