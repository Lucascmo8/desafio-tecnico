<template>
  <main>
    <BtnOpenForm />
    <Teleport to="body">
      <FormCreatedTask />
    </Teleport>
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
    @apply h-screen w-screen bg-slate-950 pt-24 pb-10 px-4 text-white fixed overflow-y-auto
  }
</style>