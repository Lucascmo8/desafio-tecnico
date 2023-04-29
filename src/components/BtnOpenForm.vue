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
        @apply bg-blue-700 p-2 rounded-lg transition-all ease-in-out shadow-md float-right hover:bg-blue-500 hover:scale-105
    }
</style>