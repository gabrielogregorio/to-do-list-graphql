<template>
<div class="content">
  <div class="todolist">
    <div class="title">
      <h1>Lista de Tarefas</h1>
    </div><!-- title -->

    <div class="tasks" v-for="task in tasks" v-bind:key="task._id">
      <Task
        :selectedProps="(task.selected === 'true')"
        :text="task.title"
        @deleteTask="deleteTask(task._id)"
        @updateTask="updateTask(task._id, task.title, task.selected === 'true')" />
    </div><!-- tasks -->

    <div class="tasks-options">
      <div class="options-basic">
        <input type="text" name="" id="" v-model="taskItem">
        <button class="icon add" @click="setTask()"><i class="fas fa-plus-circle"></i></button>
      </div><!-- options-basic -->

      <div @click="newDay()" class="options-advanced">
        Novo dia
      </div><!-- options-advanced -->
    </div><!-- tasks-options -->
  </div><!-- todolist -->
</div><!-- content -->
</template>

<script>
import Task from './components/Task.vue'
import { request } from 'graphql-request'
import queries from './graphql/queries'
import mutations from './graphql/mutations'
import 'dotenv/config'

export default {
  name: 'App',

  data() {
    return {
      tasks: [],
      taskItem: ''
    }
  },

  components: {
    Task
  },

  created() {
    console.log(process.env.VUE_APP_API_HOST)
    this.getTasks()
  },

  methods: {
    async getTasks() {
      request(process.env.VUE_APP_API_HOST,  queries.QueryTasks).then((data) => {
        this.tasks = data.tasks
      })
    },

    async setTask() {
      request(process.env.VUE_APP_API_HOST,  mutations.addTask(this.taskItem)).then(() => {
          this.getTasks()
      })
    },

    async updateTask(id, title, selected) {
      request(process.env.VUE_APP_API_HOST,  mutations.updateTask(id, title, selected)).then(() => {
          this.getTasks()
      })
    },

    async newDay() {
      request(process.env.VUE_APP_API_HOST,  mutations.newDay()).then(() => {
          this.getTasks()
      })
    },

    async deleteTask(id) {
      request(process.env.VUE_APP_API_HOST,  mutations.deleteTask(id)).then(() => {
          this.getTasks()
      })
    }
  }
}
</script>

<style>

* {
  border: 0;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Heebo', sans-serif;
}

body {
  background: url(/images/img.webp) no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.content {
  width: 95vw;
  min-height: 70vh;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: white;
  padding: 50px 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}

.todolist {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.todolist .tasks {
  padding: 0 2%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
}

.todolist .tasks-options {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
}

.todolist .tasks-options .options-basic {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 2%;
}

.todolist .tasks-options .options-basic input {
  flex: 1;
  background: #ffffff33;
  outline: none;
  border: 1px solid #ffffff44;
  padding: 5px 10px;
  color: white;
}

.todolist .tasks-options .options-basic button {
  background: transparent;
  border: 0;
  outline: none;
}

.todolist .tasks-options .options-basic button.icon {
  cursor: pointer;
  background: transparent;
  color: white;
  padding: 10px;
  font-size: 1rem;
}

.todolist .tasks-options .options-basic button.add {
  background: #1c63fc99;
}

.todolist .tasks-options .options-advanced {
  cursor: pointer;
  background: #ffffff33;
  padding: 10px 25px;
  border-radius: 10px;
}

.todolist .tasks-options .options-advanced:hover {
  background: #ffffff55;
}

.title {
  width: 100%;
}

.title h1 {
  text-align: center;
  padding: 20px 0;
}


@media screen and (min-width: 600px){
  .content {
    width: 500px;
    min-height: 400px;
  }
}
</style>
