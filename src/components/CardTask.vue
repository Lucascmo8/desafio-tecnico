<template>
    <div class="cardTaskContainer animate__animated animate__fadeInUp">
        <div class="titleAndButtonsTask" :class="{'isVisibleDescription': isVisibleDescription,'isTaskDone': isDone }">
            <div class="titleAndToggleDescription">
                <button @click.prevent="toogleDescription">
                    <i class="uil uil-angle-down" v-if="!isVisibleDescription"></i>
                    <i class="uil uil-angle-up" v-else></i>
                </button>
                <h3>{{ title }}</h3>
            </div>
            <div class="btnTaskContainer">
                <button class="btnTask done" v-if="!isDone" @click="tasksStores.completeTask(tag)">Concluir</button>
                <button class="btnTask save" v-else v-show="page == 'home'" @click="tasksStores.moveTaskToSavedList(tag)">Salvar</button>
                <button class="btnTask delete" @click="tasksStores.removeTask(tag,page)">Excluir</button>
            </div>
        </div>
        <transition name="exitDescription" @before-leave="beforeLeave">
            <div class="description animate__animated animate__flipInX" :class="{'isTaskDone': isDone}" v-if="isVisibleDescription">
                <p>{{ description }}</p>
            </div>
        </transition>
    </div>
</template>

<script>
    import { useTasksStore } from '../stores/TasksStore';
    export default{
        name:"CardTask",
        setup(){
            const tasksStores = useTasksStore()
            return {tasksStores}
        },
        data(){
            return{
                isVisibleDescription:false,
                isTaskDone:false,
            }
        },
        props:['title','description','isDone','tag','page'],
        methods:{
            toogleDescription(){
                this.isVisibleDescription = !this.isVisibleDescription
                
            },
            beforeLeave(el) {
                el.classList.add('animate__flipOutX')
            }
        }
    }

</script>

<style scoped>
    .titleAndButtonsTask{
        @apply p-2 grid grid-cols-2 justify-items-center gap-2 bg-slate-100 rounded-lg shadow-md 
    }

    .isVisibleDescription{
        @apply rounded-b-none border-b transition-all ease-in-out
    }

    .isTaskDone,.description.isTaskDone{
        @apply bg-green-700 text-white
    }

    .titleAndToggleDescription{
        @apply flex items-center justify-self-start
    }

    .btnTaskContainer{
        @apply flex justify-self-end gap-2 
    }

    .btnTask{
        @apply w-20 p-2 text-white rounded-lg shadow-md transition-all ease-in-out hover:scale-105
    }

    .done{
        @apply bg-green-700 hover:bg-green-500
    }

    .save{
        @apply bg-blue-500 hover:bg-blue-400
    }

    .delete{
        @apply bg-red-700 hover:bg-red-500
    }

    .description{
        @apply flex justify-between items-center bg-slate-100 rounded-b-lg rounded-t-none py-2 px-4 shadow-md
    }
</style>