import React, { Component } from 'react'
import {connect} from 'react-redux'

class ExpensesList extends Component {


    render() {
        const expenses = this.props.expenses.map(expense => {
            return(
                <div>
                    <div>{expense.title}</div>
                    <div>{expense.amount}</div>
                </div>
            )
        })
        return (
            <div>
                <div>  
                    <div>Expense Title</div>
                    <div>Expense Value</div>
                </div>
                <div>  
                    {expenses}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        expenses:state.expensesState.expensesList
    }
}

export default connect(mapStateToProps,)(ExpensesList)
