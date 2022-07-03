<template>
  <div class="hello">
    <h1>{{ headline }}</h1>
    <todo-form></todo-form>

    <template v-if="memos.length > 0">
      <todo-item v-for="(todo, index) in memos" :key="index" :todo="todo"></todo-item>
      <small>Click any memo to mark as done</small>
    </template>
    <h3 v-else>No memos</h3>
  </div>
</template>

<script>
import TodoForm from '../components/TodoForm.vue'
import TodoItem from '../components/TodoItem.vue'

export default {
  name: 'HelloWorld',
  components: { TodoForm, TodoItem },
  props: {
    headline: String
  },
  computed: {
    memos() { return this.$store.getters.memos }
  }
}
</script>

<style scoped>
.hello {
  max-width: 300px;
  margin: 0 auto;
}
small {
  color: gray;
}
</style>
