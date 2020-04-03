import React, { Component } from 'react'
import {connect} from 'react-redux'
import {updateExpenses} from '../redux/Expenses/ExpensesAction'

class ExpenseForm extends Component {
    constructor(props){
        super(props)

        this.state ={
            title:'',
            amount:0
        }
        
    }

    submitEventHandler = (event)=>{
        event.preventDefault()
        this.props.updateExpenses(this.state)
    }

    expenseInputHandler = (event) =>{
        this.setState({
            title:event.target.value
        })
    }    


    expenseAmountInputHandler = (event) =>{
        this.setState({
            amount:event.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitEventHandler}>
                    <label>
                        Please Enter Your Expense
                        <br/>
                        <input type='text' onChange={this.expenseInputHandler} required />
                    </label>
                    <br/>
                    <label>
                        Please Enter Expense Amount
                        <br/>
                        <input type='text' onChange={this.expenseAmountInputHandler} required />
                    </label>
                    <br/>
                    <button>
                        Add Expense
                    </button>
                    <br/>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        updateExpenses:(value) =>{
        dispatch(updateExpenses(value))
    }
}
}

export default connect(null,mapDispatchToProps)(ExpenseForm)
