import React, { Component } from 'react'
import {connect} from 'react-redux'


class Output extends Component {
    render() {
        const balance = this.props.budget-this.props.totalExpenses
        let balanceOutputColorClass = 'colorRed'
        if(balance < 0)
            balanceOutputColorClass='colorRed'
        else if(balance>0) balanceOutputColorClass='colorGreen'
        else if(balance===0)balanceOutputColorClass='colorBlack'
            return (
                <div>
                   <div>BUDGET
                       <div>{this.props.budget}</div>
                   </div>
                   
                   <div>EXPENSES  
                       <div>{this.props.totalExpenses}</div>
                   </div>
                   
                   <div className={balanceOutputColorClass}>BALANCE  
                       <div>{balance}</div>
                   </div>
                   
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