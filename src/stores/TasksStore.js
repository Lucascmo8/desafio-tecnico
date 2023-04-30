import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTasksStore = defineStore('tasks', {
    state(){
        return{
            showFormCreateTask:false,
            allTasksCreated:JSON.parse(localStorage.getItem('tasks')) ?? [],
            allTasksSaved:JSON.parse(localStorage.getItem('savedTasks')) ?? [],
        }
    },
    actions: {
        openFormCreateTask(){
            this.showFormCreateTask = true
        },
        closeFormCreateTask(){
            this.showFormCreateTask = false
        },
        getTasksLocalStorage() {
            return JSON.parse(localStorage.getItem('tasks')) ?? []
        },
        createTaskCloseForm(titleTask,descriptionTask){
            const task={
                title:titleTask,
                description:descriptionTask ?? "Não há descrição da tarefa",
                isDone:false
            }
            this.addTask(task)
            this.closeFormCreateTask()
        },
        addTask(task){
            const allTasks = this.getTasksLocalStorage()
            allTasks.push(task)
            this.addTaskLocalStorage(allTasks)
        },
        addTaskLocalStorage(tasks){
            localStorage.setItem("tasks",JSON.stringify(tasks))
            this.updateTaskList()
        },
        updateTaskList(){
            this.allTasksCreated = this.getTasksLocalStorage()
        },
        completeTask(tag){
            const allTasks = this.getTasksLocalStorage()
            allTasks[tag].isDone = true
            this.addTaskLocalStorage(allTasks)
        },
        deleteTask(tag,page){
            if(page == 'home'){
                const allTasks = this.getTasksLocalStorage()
                allTasks.splice(tag,1)
                this.addTaskLocalStorage(allTasks)
                return
            }else{
                const allSavedTasks = this.getSavedTasksLocalStorage()
                allSavedTasks.splice(tag,1)
                this.addSavedTaskLocalStorage(allSavedTasks)
            }
            
        },
        getSavedTasksLocalStorage() {
            return JSON.parse(localStorage.getItem('savedTasks')) ?? []
        },
        saveTask(tag){
            const allSavedTasks = this.getSavedTasksLocalStorage()
            allSavedTasks.push(this.getTasksLocalStorage()[tag])
            this.deleteTask(tag,'home')
            this.addSavedTaskLocalStorage(allSavedTasks)
        },
        addSavedTaskLocalStorage(allSavedTasks){
            localStorage.setItem("savedTasks",JSON.stringify(allSavedTasks))
            this.updateSavedTaskList()
        },
        updateSavedTaskList(){
            this.allTasksSaved = this.getSavedTasksLocalStorage()
        },

    },
    getters:{
    
    }
})
