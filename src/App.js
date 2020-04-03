import React, { Component } from 'react'
import BudgetForm from './components/BudgetForm'
import OutputResult from  './components/Output'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpensesList'
import {Provider} from 'react-redux'
import store from './redux/store'

class App extends Component {


  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <h3>BUDGET APP</h3>
          <BudgetForm />
          <OutputResult />
          <ExpenseForm />
          <ExpenseList /> 
        </div>
    </Provider>
    )
   }
}

export default App;
