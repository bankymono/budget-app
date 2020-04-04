import React, { Component } from 'react'
import {connect} from 'react-redux'
import { updateBudget } from '../redux/budget/budgetActions'


class BudgetForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            budget : '',
            budgetFeedback:''
        }     
        
    }

    submitEventHandler = (event)=>{
        event.preventDefault()
        const budgetInput = document.querySelector('#budgetInput')
        if (budgetInput.value === '' || budgetInput.value < 0){
            this.setState({
                budgetFeedback:<p id="budgetFeedback">value cannot be empty or negative</p>
            })
            setTimeout(()=>{
                this.setState({
                    budgetFeedback:'',
                    budget:''
                })
            },4000)
        }
        else{
            this.props.updateBudget(this.state.budget)
            this.setState({
                budget:''
            })
        }

    }

    budgetInputHandler = (e)=>{
                this.setState({
            budget:e.target.value
        })
    }

    render() {
        return (
            <div>
                {this.state.budgetFeedback}
                <form onSubmit={this.submitEventHandler}>
                    <label>Please Enter your Budget</label>
                    <br />
                    <input onChange = {this.budgetInputHandler} type="number" id="budgetInput" value={this.state.budget}/>
                    <br />
                    <button>Calculate</button>
                </form>
                <br/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateBudget:value=>dispatch(updateBudget(value))
    }
}

export default connect(null,mapDispatchToProps)(BudgetForm)
