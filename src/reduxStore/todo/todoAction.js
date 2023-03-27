import { ADD, DELETE, EDIT } from "./todoType";


export const add =(string)=>{
    return{
        type:ADD,
        payload:string
    }
}

export const editTodo = (i, data)=>{
    return{
        type:EDIT,
        payload:{i, data}
    }
}

export const deleteTodo = (i)=>{
    return{
        type:DELETE, 
        payload:i
    }
}