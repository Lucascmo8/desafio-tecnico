import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTasksStore = defineStore('tasks', {
    state(){
        return{
            showFormCreateTask:false,
            allTasksCreated:JSON.parse(localStorage.getItem('tasks')) ?? []
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
        }
    },
    getters:{
    
    }
})
