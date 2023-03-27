
import { ADD, EDIT, DELETE} from "./todoType";

const initialState=[]

const todoReducer = (state=initialState, action)=>{
    switch(action.type){
        case ADD: return[
            ...state, action.payload
        ]
        // case EDIT : return state = state.map((val, i)=>{
        //         if(i===action.payload.i){
        //             val = action.payload.data
        //         }
        //         return val
        //     })
        case EDIT : state[action.payload.i] = action.payload.data
        return [...state]

        case DELETE :
             state.splice(action.payload, 1)  
        return [...state] 
        
        default: return state 
    }
}

export default todoReducer;