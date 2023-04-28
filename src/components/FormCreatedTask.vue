<template>
    <div class="modalForm" v-show="false">
        <button id="btnCloseForm"><i class="uil uil-times"></i></button>
        <form id="FormCreateTask" @submit.prevent="">
            <h2>Preencha os campos abaixo:</h2>
            <input id="titleTaskInput" type="text" placeholder="Título da tarefa" required>
            <textarea name="" id="descriptionTaskInput" placeholder="Descreva os detalhes da tarefa"></textarea>
            <button id="btnSubmit" type="submit">Criar Tarefa <i class="uil uil-focus-add"></i></button>
        </form>
    </div>
</template>
<!-- cols="30" rows="10"  -->
<script>
    export default{
        name:"FormCreatedTask"
    }
</script>

<style scoped>
    .modalForm{
        @apply h-screen w-screen absolute top-0 left-0 z-50 bg-[#00000088] flex flex-col 
    }

    #btnCloseForm{
        @apply text-5xl self-end
    }

    #FormCreateTask{
        @apply h-auto w-10/12 sm:w-96 flex flex-col items-center bg-white rounded-lg shadow-md gap-2 text-black px-2 py-4 self-center justify-self-center
    }

    #titleTaskInput{
        @apply w-11/12 border border-black rounded-lg p-2
    }

    #descriptionTaskInput{
        @apply  w-11/12 h-32 border border-black rounded-lg p-2 
    }

    #btnSubmit{
        @apply w-11/12 bg-blue-700 text-white p-2 rounded-lg transition-all ease-in-out shadow-md float-right hover:bg-blue-500 hover:scale-105
    }
</style>