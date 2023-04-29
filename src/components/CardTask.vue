<template>
    <div>
        <div class="cardContainer" :class="{'isVisibleDescription': isVisibleDescription,'isTaskDone': isDone }">
            <div class="titleAndToggleDescription">
                <button @click.prevent="toogleDescription">
                    <i class="uil uil-angle-down" v-if="!isVisibleDescription"></i>
                    <i class="uil uil-angle-up" v-else></i>
                </button>
                <h3>{{ title }}</h3>
            </div>
            <div class="btnTaskContainer">
                <button class="btnTask done" v-if="!isTaskDone">Concluir</button>
                <button class="btnTask save" v-else>Salvar</button>
                <button class="btnTask delete">Excluir</button>
            </div>
        </div>
        <div class="description" :class="{'isTaskDone': isTaskDone }" v-if="isVisibleDescription">
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<script>
    export default{
        name:"CardTask",
        data(){
            return{
                isVisibleDescription:false,
                isTaskDone:false
            }
        },
        props:['title','description','isDonde'],
        methods:{
            toogleDescription(){
                this.isVisibleDescription = !this.isVisibleDescription
            }
        }
    }

</script>

<style scoped>
    .cardContainer{
        @apply bg-slate-100 rounded-lg p-2 shadow-md grid grid-cols-2 justify-items-center gap-2 
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
        @apply flex gap-2 justify-self-end
    }

    .btnTask{
        @apply bg-blue-700 text-white p-2 rounded-lg transition-all ease-in-out shadow-md hover:bg-blue-500 hover:scale-105
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
        @apply bg-slate-100 rounded-b-lg rounded-t-none py-2 px-4 shadow-md flex justify-between items-center
    }
</style>