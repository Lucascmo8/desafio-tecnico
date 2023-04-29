<template>
  <main>
    <h1>Olá mundo</h1>
    <BtnOpenForm />
    <FormCreatedTask />
    <TasksList />
  </main>
</template>

<script>
  import BtnOpenForm from '../components/BtnOpenForm.vue'
  import FormCreatedTask from '../components/FormCreatedTask.vue';
  import TasksList from '../components/TasksList.vue';

  export default {
    components:{
      BtnOpenForm,
      FormCreatedTask,
      TasksList
    }  
  }
</script>

<style scoped>
  main{
    @apply h-screen w-screen bg-slate-950 py-20 px-4 text-white fixed z-40 overflow-y-auto
  }
</style>