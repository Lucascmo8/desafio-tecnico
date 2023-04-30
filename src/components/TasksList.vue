<template>
    <section id="tasksList">
        <EmptyListMessage v-if="tasks.length == 0"/>
        <CardTask v-for="(task,index) in tasks" :key="index" :tag="index" :title="task.title" :description="task.description" :page="page" :isDone="task.isDone"/>
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
        props:{tasks:Object,page:String},
        components:{
            CardTask,
            EmptyListMessage,
        },
    }

</script>

<style scoped>
    #tasksList{
        @apply h-auto sm:w-[520px] bg-slate-400 m-auto mt-16 flex flex-col gap-2 text-black rounded-lg p-2 shadow-md  overflow-hidden
    }
</style>