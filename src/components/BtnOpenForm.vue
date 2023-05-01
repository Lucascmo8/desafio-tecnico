<template>
    <button @click="tasksStores.openFormCreateTask">Criar Tarefa <i class="uil uil-focus-add"></i></button>
</template>

<script>
    import { useTasksStore } from '../stores/TasksStore';

    export default {
        name:"BtnOpenForm",
        setup(){
            const tasksStores = useTasksStore()
            return {tasksStores}
        },
    }
</script>

<style scoped>
    button{
        @apply p-2 float-right bg-blue-700 rounded-lg shadow-md transition-all ease-in-out hover:bg-blue-500 hover:scale-105
    }
</style>