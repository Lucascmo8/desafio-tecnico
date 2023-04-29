<template>
    <section id="tasksList">
        <EmptyListMessage v-if="tasksStores.allTasksCreated.length == 0"/>
        <CardTask v-for="(task,index) in tasksStores.allTasksCreated" :key="index" :tag="index" :title="task.title" :description="task.description" :isDone="task.isDone"/>
    </section>
</template>

<script>
    import CardTask from './CardTask.vue'
    import EmptyListMessage from './EmptyListMessage.vue';
    import { useTasksStore } from '../stores/TasksStore';

    export default{
        name:"TasksList",
        setup(){
            const tasksStores = useTasksStore()
            return {tasksStores}
        },
        components:{
            CardTask,
            EmptyListMessage,
        },
    }

</script>

<style scoped>
    #tasksList{
        @apply h-auto sm:w-[520px] bg-slate-300 m-auto mt-16 flex flex-col gap-2 text-black rounded-lg p-2 shadow-md  overflow-y-auto
    }
</style>