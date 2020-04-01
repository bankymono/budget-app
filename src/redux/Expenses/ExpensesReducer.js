import {UPDATE_EXPENSES} from '../actionTypes'

const ExpensesState = {
    lastExpense:{},
    expensesList: [],
    total:0
}

const expensesReducer = (state=ExpensesState,action) =>{
    switch(action.type){
        case UPDATE_EXPENSES:
            return{
                ...state,
                lastExpense:action.payload,
                expensesList:[...state.expensesList,action.payload],
                total:state.total+parseInt(action.payload.amount)
            }
        default:
            return state
    }
}

export default expensesReducer