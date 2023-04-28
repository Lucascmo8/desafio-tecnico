<template>
  <main>
    <h1>Olá mundo</h1>
    <BtnOpenForm />
    <FormCreatedTask />
  </main>
</template>

<script>
  import BtnOpenForm from '../components/BtnOpenForm.vue'
  import FormCreatedTask from '../components/FormCreatedTask.vue';
  export default {
    components:{
      BtnOpenForm,
      FormCreatedTask
    }  
  }
</script>

<style scoped>
  main{
    @apply h-screen bg-slate-950 py-20 px-4 text-white
  }
</style>