import { ADD_TASK, DELETE_TASK, COMPLETE_TASK, EDIT_TASK, UPDATE_TASK } from "../types/ToDoTypes";

export const addTaskAction = (taskName) => { 
    return {
        type: ADD_TASK,
        taskName
    }
 }
export const deleteTaskAction = (taskName,whichTask) => { 
    return {
        type: DELETE_TASK,
        taskName,
        whichTask
    }
 }
export const CompeleTaskAction = (taskName) => { 
    return {
        type: COMPLETE_TASK,
        taskName
    }
 }
export const editTaskAction = (task) => { 
    return {
        type: EDIT_TASK,
        task
    }
 }
export const updateTaskAction = (taskName) => { 
    return {
        type: UPDATE_TASK,
        taskName
    }
 }