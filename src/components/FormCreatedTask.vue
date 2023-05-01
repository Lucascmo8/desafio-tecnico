<template>
    <div id="modalForm" >
        <button id="btnCloseForm" @click="tasksStores.closeFormCreateTask"><i class="uil uil-times"></i></button>
        <form id="FormCreateTask" class="animate__animated animate__bounceIn" @submit.prevent="tasksStores.createTaskCloseForm(titleTask,descriptionTask)" v-show="tasksStores.showFormCreateTask">
            <h2>Preencha os campos abaixo:</h2>
            <input id="titleTaskInput" type="text" placeholder="Título da tarefa" maxlength="15" required v-model="titleTask">
            <textarea name="" id="descriptionTaskInput" placeholder="Descreva os detalhes da tarefa" v-model="descriptionTask"></textarea>
            <button id="btnSubmit" type="submit" >Criar Tarefa <i class="uil uil-focus-add"></i></button>
        </form>
    </div>
</template>

<script>
    import { useTasksStore } from '../stores/TasksStore';
    export default{
        name:"FormCreatedTask",
        setup(){
            const tasksStores = useTasksStore()
            return {tasksStores}
        },
        data(){
            return{
                titleTask:"",
                descriptionTask:undefined,
            }
        },
        methods:{
            beforeLeave(el) {
                el.classList.add('animate__flipOutX')
            }
        }
    }
</script>

<style scoped>
    #modalForm{
        @apply h-screen w-screen absolute top-0 left-0 z-50 flex flex-col bg-[#00000088]
    }

    #btnCloseForm{
        @apply text-5xl self-end
    }

    #FormCreateTask{
        @apply h-auto w-10/12 sm:w-96 px-2 py-4 flex flex-col gap-2 items-center self-center justify-self-center bg-white text-black rounded-lg shadow-md
    }

    #titleTaskInput{
        @apply w-11/12 p-2 border border-black rounded-lg
    }

    #descriptionTaskInput{
        @apply h-32 w-11/12 p-2 border border-black rounded-lg 
    }

    #btnCloseForm{
        @apply text-white
    }

    #btnSubmit{
        @apply w-11/12 p-2 float-right bg-blue-700 text-white rounded-lg shadow-md transition-all ease-in-out hover:bg-blue-500 hover:scale-105
    }
</style>