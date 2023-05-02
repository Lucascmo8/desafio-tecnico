import { defineStore } from 'pinia'

export const useTasksStore = defineStore('tasks', {
    state(){
        return{
            isFormCreateTaskVisible:false,
            allNewsTasks: JSON.parse(localStorage.getItem('tasks')) ?? [],
            savedTasks: JSON.parse(localStorage.getItem('savedTasks')) ?? [],
        }
    },
    actions: {
        openFormCreateTask(){
            this.isFormCreateTaskVisible = true
        },
        closeFormCreateTask(){
            this.isFormCreateTaskVisible = false
        },
        getTasksLocalStorage() {
            return JSON.parse(localStorage.getItem('tasks')) ?? []
        },
        createTask(titleTask,descriptionTask){
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
            this.allNewsTasks = this.getTasksLocalStorage()
        },
        completeTask(tag){
            const allTasks = this.getTasksLocalStorage()
            allTasks[tag].isDone = true
            this.addTaskLocalStorage(allTasks)
        },
        removeTask(tag,page){
            if(page == 'home'){
                const allTasks = this.getTasksLocalStorage()
                allTasks.splice(tag,1)
                this.addTaskLocalStorage(allTasks)
                return
            }
            const allSavedTasks = this.getSavedTasksLocalStorage()
            allSavedTasks.splice(tag,1)
            this.addSavedTaskLocalStorage(allSavedTasks)
            
        },
        getSavedTasksLocalStorage() {
            return JSON.parse(localStorage.getItem('savedTasks')) ?? []
        },
        moveTaskToSavedList(tag){
            const allSavedTasks = this.getSavedTasksLocalStorage()
            allSavedTasks.push(this.getTasksLocalStorage()[tag])
            this.removeTask(tag,'home')
            this.addSavedTaskLocalStorage(allSavedTasks)
        },
        addSavedTaskLocalStorage(allSavedTasks){
            localStorage.setItem("savedTasks",JSON.stringify(allSavedTasks))
            this.updateSavedTaskList()
        },
        updateSavedTaskList(){
            this.savedTasks = this.getSavedTasksLocalStorage()
        },

    }
})
