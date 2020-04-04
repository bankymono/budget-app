import React, { Component } from 'react'
import {connect} from 'react-redux'
import {updateExpenses} from '../redux/Expenses/ExpensesAction'

class ExpenseForm extends Component {
    constructor(props){
        super(props)

        this.state ={
            title:'',
            amount:'',
            expenseFeedback:''
        }
        
    }

    submitEventHandler = (event)=>{
        event.preventDefault()
        const expenseTitle = document.querySelector('#title').value
        const expenseAmount = document.querySelector('#amount').value

        if (expenseTitle === '' || expenseAmount === '' || expenseAmount < 0){
            this.setState({
                expenseFeedback:<p id="expenseFeedback">values cannot be empty or negative</p>
            })
            setTimeout(()=>{
                this.setState({
                    expenseFeedback:'',
                    title: '',
                    amount:''
                })
            },4000)
        }else{
        this.props.updateExpenses(this.state)
        this.setState({
            title:'',
            amount:''
        })
        }
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
                {this.state.expenseFeedback}
                <form onSubmit={this.submitEventHandler}>
                    <label>
                        Please Enter Your Expense
                        <br/>
                        <input id = "title" type='text' onChange={this.expenseInputHandler} value={this.state.title} />
                    </label>
                    <br/>
                    <label>
                        Please Enter Expense Amount
                        <br/>
                        <input id = "amount" type='number' onChange={this.expenseAmountInputHandler} value={this.state.amount} />
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
