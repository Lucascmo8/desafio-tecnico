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
        methods:{

        }
    }
</script>

<style scoped>
    header#navBar{
        @apply w-full h-20 fixed top-0 left-0 p-4 z-50 bg-slate-900 text-white flex justify-between items-center shadow-md
    }
    
    h1{
        @apply text-lg font-semibold
    }

    .active{
        @apply bg-slate-400 p-2 rounded-lg shadow-md
    }

    nav{
        @apply flex gap-4 
    }

    nav a{
        @apply bg-slate-700 p-2 rounded-lg transition-all ease-in-out shadow-md hover:bg-slate-300 hover:scale-105 
    } 
</style>