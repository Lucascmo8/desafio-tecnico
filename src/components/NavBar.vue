<template>
    <header id="navBar">
        <router-link to="/">
            <h1>Lista de Tarefas</h1>
        </router-link>
        <nav>
            <RouterLink to="/" :class="{'active': $route.name == 'home'}">Home</RouterLink>
            <RouterLink to="/savedTasks" :class="{'active': $route.name == 'savedTasks'}">Tarefas salvas</RouterLink>
        </nav>
    </header>
</template>

<script>
    export default{
        name:"NavBar",
    }
</script>

<style scoped>
    header#navBar{
        @apply w-full h-20 p-4 flex justify-between items-center fixed top-0 left-0 z-10 bg-slate-900 text-white shadow-md
    }
    
    h1{
        @apply font-semibold text-xl
    }

    nav{
        @apply flex gap-4 
    }

    nav a{
        @apply p-2 bg-slate-700 rounded-lg shadow-md transition-all ease-in-out hover:bg-slate-300 hover:scale-105 
    }

    
    .active{
        @apply p-2 bg-slate-400 rounded-lg shadow-md
    }
</style>