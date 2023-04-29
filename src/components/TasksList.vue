<template>
    <section id="tasksList">
        <CardTask/>
        <CardTask/>
        
    </section>
</template>

<script>
import CardTask from './CardTask.vue'

    export default{
        name:"TasksList",
        data(){
            return{
                
            }
        },
        components:{
            CardTask,
        }
    }

</script>

<style scoped>
    #tasksList{
        @apply h-auto sm:w-[520px] bg-slate-300 m-auto mt-16 flex flex-col gap-2 text-black rounded-lg p-2 shadow-md  overflow-y-auto
    }
</style>