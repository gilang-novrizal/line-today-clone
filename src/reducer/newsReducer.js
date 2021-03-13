import {method} from "../action/newsAction"
const INITIAL_STATE={}

const newsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case method.GET:
            return(action.payload)
        default: 
            return state
    }
}

export default newsReducer