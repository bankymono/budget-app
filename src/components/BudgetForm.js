import React, { Component } from 'react'
import {connect} from 'react-redux'
import { updateBudget } from '../redux/budget/budgetActions'


class BudgetForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            budget : '',
        }
        
    }

    submitEventHandler = (event)=>{
        event.preventDefault()
        this.props.updateBudget(this.state.budget)
    }

    budgetInputHandler = (e)=>{

        this.setState({
            budget:e.target.value
        })

        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitEventHandler}>
                    <label>Please Enter your Budget</label>
                    <br />
                    <input onChange = {this.budgetInputHandler} type="text" />
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
