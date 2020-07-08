<template>
  <div id="app">
    <h1>FRMW_005</h1>
    <h2>Artem Skadin</h2>
    <h4 id="author" title="GossJS" hidden>Artem Skadin</h4>
    <div>
      <i>R: </i>
      <input v-model="r" type="number" min="0" max="255" @change="changeBgd" />
      <input v-model="r" type="range" min="0" max="255" @input="changeBgd" />
    </div>
    <div>
      <i>G: </i>
      <input v-model="g" type="number" min="0" max="255" @change="changeBgd" />
      <input v-model="g" type="range" min="0" max="255" @input="changeBgd" />
    </div>
    <div>
      <i>B: </i>
      <input v-model="b" type="number" min="0" max="255" @change="changeBgd" />
      <input v-model="b" type="range" min="0" max="255" @input="changeBgd" />
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      r: 255,
      g: 255,
      b: 255
    }
  },
  components: {},
  methods: {
    changeBgd() {
      document.body.style.backgroundColor = `rgb(${this.r},${this.g},${this.b})`
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
