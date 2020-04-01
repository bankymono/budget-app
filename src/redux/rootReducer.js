import {combineReducers} from 'redux'
import budgetReducer from './budget/budgetReducer'
import expensesReducer from './Expenses/ExpensesReducer'

const rootReducer = combineReducers({
    budgetState:budgetReducer,
    expensesState:expensesReducer
})

export default rootReducer