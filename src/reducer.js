
export default function reducer (state=[], action){
    switch(action.type){
        case "add":
            return [...state, action.payload];
        case "edit":
            state[action.payload.id] = action.payload.value
            return state
        case "delete":
            console.log(action.payload)
            // state = state.filter((val, i)=>action.payload===i)
            let value=state.slice(action.payload, 1)
            return value
        default: return state
    }
}