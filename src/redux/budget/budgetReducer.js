import {UPDATE_BUDGET} from '../actionTypes'
const budgetState = {
    budget:0
}

const budgetReducer = (state=budgetState,action)=>{
    switch(action.type){
        case UPDATE_BUDGET:
            return {
                ...state,
                budget:parseFloat(action.payload)
            }
        default:
            return state
    }

}

export default budgetReducer