<template>
  <section>
    <h1>Saved Tasks</h1>
    <TasksListVue :tasks="tarefas"/>
  </section>
</template>

<script>
  import TasksListVue from '../components/TasksList.vue'
  import { useTasksStore } from '../stores/TasksStore';
  export default {
    setup(){
      const tasksStores = useTasksStore()
      return {tasksStores}
    },
    data(){
      return{
        tarefas:this.tasksStores.getSavedTasksLocalStorage()
      }
    },
    components:{
      TasksListVue
    },
    
  }
</script>

<style scoped>
  section{
    @apply h-screen w-screen bg-slate-950 pt-24 pb-10 px-4 text-white fixed overflow-y-auto flex justify-center
  }
</style>
