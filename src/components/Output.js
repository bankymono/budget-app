import React, { Component } from 'react'
import {connect} from 'react-redux'


class Output extends Component {
    render() {
        return (
            <div>
               result:{this.props.budget}
               <br/>
               Total Expenses:{this.props.totalExpenses}
               
            </div>
        )
    }
}

const mapStateToProps = state=>{
    return {
        budget:state.budgetState.budget,
        totalExpenses:state.expensesState.total
    }
} 

export default connect(mapStateToProps)(Output)