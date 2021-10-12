<template>
  <div :class="deleteItem === false ? 'todo-item' : 'todo-item display-none'">
    <div @click="updateTask()" :class="selected === true ? 'todo-content underline' : 'todo-content null-decoration'">
      <p>{{text}}</p>
    </div><!-- todo-content -->

    <div class="todo-delete">
      <button @click="deleteTask()" class="icon delete"><i class="fas fa-trash-alt"></i></button>
    </div><!-- todo-delete -->
  </div><!-- todo-item -->
</template>

<script>
export default {
  name: 'Task',

  props: {
    selectedProps: Boolean,
    text: String
  },

  data() {
    return {
      selected: this.selectedProps,
      deleteItem: false
    }
  },

  created() {},

  watch: {
    selectedProps() {
      this.selected = this.selectedProps
    }
  },

  methods: {
    updateTask() {
      this.$emit('updateTask', '')
    },

    deleteTask() {
      this.deleteItem = true
      this.$emit('deleteTask', '')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.display-none {
  display: none;
}

.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: #ffffff33;
}

.todo-item:hover {
  background: #ffffff44;
}

.todo-item .todo-content {
  cursor: pointer;
  flex: 1;
  padding-left: 2%;
}

.todo-item .todo-content.underline p {
  text-decoration: line-through;
  color: #ffffff33;
}

.todo-item .todo-content.null-decoration p {
  text-decoration: none;
}

.icon {
  cursor: pointer;
  background: transparent;
  color: white;
  padding: 10px;
  font-size: 1rem;
  width: 100%;
}

.delete {
  background: #ff000099;
}
</style>
