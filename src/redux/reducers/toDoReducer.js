import { ADD_TASK, COMPLETE_TASK, DELETE_TASK,EDIT_TASK, UPDATE_TASK } from "../types/ToDoTypes"

const initialState = {
    taskList: [],
    taskDone: [],
    taskEdit:{}        
}

export const toDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            console.log('add-task');
            state.taskList = [...state.taskList, {id:Date.now(), taskName: action.taskName, taskDone: false }]
            return { ...state }
        case DELETE_TASK:
            if(action.whichTask === 'taskList'){
                state.taskList = state.taskList.filter((task) => task.taskName !== action.taskName)
            }
            if(action.whichTask === 'taskDone'){
                state.taskDone = state.taskDone.filter((task) => task.taskName !== action.taskName)
            }
            return { ...state }
        case COMPLETE_TASK:
            state.taskDone = [...state.taskDone, {id:Date.now(), taskName: action.taskName, taskDone: true }]
            state.taskList = state.taskList.filter((task) => task.taskName !== action.taskName)
            return { ...state }
        case EDIT_TASK:
            console.log('edit-task');
            return { ...state,taskEdit:action.task }
        case UPDATE_TASK:
            console.log('update-task');
            state.taskEdit = {...state.taskEdit,taskName:action.taskName}
            let taskListUpdate = [...state.taskList]
            let index = taskListUpdate.findIndex(task => task.id === state.taskEdit.id)
            if(index != -1){
                taskListUpdate[index] = state.taskEdit
            }
            state.taskList = taskListUpdate
            state.taskEdit = {id:-1, taskName: '', taskDone: false }
            return { ...state}
        default:
            return state
    }
}
