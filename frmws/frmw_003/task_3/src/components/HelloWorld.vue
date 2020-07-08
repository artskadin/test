<template>
  <div class="hello">
    <h1>FRMW_003</h1>
    <h2>Artem Skadin</h2>
    <h4 id="author" title="GossJS" hidden>Artem Skadin</h4>
    <ul id="tasks">
      <li v-for="task in tasks" v-bind:key="task">
        {{ task }}
        <input type="checkbox" v-on:change="changeStatus" />
      </li>
    </ul>
      <input v-model="value" placeholder="Пустое" />
      <button v-on:click="addTask" >Добавить задачу</button>
      <br />
      <button v-on:click="removeChecked" >Удалить все выполненные задачи</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    fetch('https://kodaktor.ru/j/tasklist')
      .then(res => res.json())
      .then(data => {this.tasks = data.list})

      return {
        tasks: [],
        value: ''
      }
  },
  components: {},
  methods: {
    addTask() {
      if (this.value.length === 0) {
        alert('Невозможно добавить пустую задачу')
        return
      }
      this.tasks.push(this.value)
      this.value = ''
    },
    changeStatus(event) {
      event.target.checked 
        ? event.target.parentNode.classList.add('crossed')
        : event.target.parentNode.classList.remove('crossed')
    },
    removeChecked() {
      let ul = document.getElementById('tasks')
      Array.from(document.querySelectorAll('li.crossed')).forEach((li) => {
        ul.removeChild(li)
      })
    }
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
