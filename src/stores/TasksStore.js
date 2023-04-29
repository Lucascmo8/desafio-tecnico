import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTasksStore = defineStore('tasks', {
    state(){
        return{
            showFormCreateTask:false,
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
                titleTask:titleTask,
                descriptionTask:descriptionTask.trim() ?? "Não há descrição da tarefa",
                isDone:false
            }
            this.addTaskLocalStorage(task)
            this.closeFormCreateTask()
        },
        addTaskLocalStorage(task){
            const allTasks = this.getTasksLocalStorage()
            allTasks.push(task)
            return localStorage.setItem("tasks",JSON.stringify(allTasks))
        },
        deleteTask(indexTask){
            
        },  
        reloadTask(evento,numeroDoPedido){
            
        }

    },
    getters:{
    
    }
})
