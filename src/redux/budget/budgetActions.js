import {UPDATE_BUDGET} from '../actionTypes'

export const updateBudget = (value) => {
return {
    type: UPDATE_BUDGET,
    payload:value
}
}

