<template>
  <div id="app">
    <h1>FRMW_004</h1>
    <h2>Artem Skadin</h2>
    <h4 id="author" title="GossJS" hidden>Artem Skadin</h4>
    <button @click="value++" >⬆</button>
    <input v-model="value" />
    <Degs :degs="degs()" />
  </div>
</template>

<script>
import Degs from './components/Degs.vue'

export default {
  name: 'App',
  data() {
    return {
      value: 3
    }
  },
  components: {
    Degs
  },
  methods: {
    increaseValue() {
      this.value += 1
    },
    degs() {
      return Array.from({length: this.value}, (v, i) => 10 + i)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
