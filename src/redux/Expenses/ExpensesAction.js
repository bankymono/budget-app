import {UPDATE_EXPENSES} from '../actionTypes'

export const updateExpenses = expense =>{
    return {
        type:UPDATE_EXPENSES,
        payload:expense
    }
}