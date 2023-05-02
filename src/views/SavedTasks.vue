<template>
  <main>
    <TasksList :tasks="tasksStores.savedTasks" page="saved"/>
  </main>
</template>

<script>
  import TasksList from '../components/TasksList.vue'
  import { useTasksStore } from '../stores/TasksStore';
  export default {
    setup(){
      const tasksStores = useTasksStore()
      return {tasksStores}
    },
    components:{
      TasksList
    },
    
  }
</script>

<style scoped>
  main{
    @apply h-screen w-screen bg-slate-950 pt-24 pb-10 px-4 text-white fixed overflow-y-auto
  }
</style>
