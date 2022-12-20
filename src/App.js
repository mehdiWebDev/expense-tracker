import Expenses from './components/expenses/Expenses';
import ExpenseForm from './components/Expense-form/ExpenseForm';
import FilterByYear from './components/FilterByYear/FilterByYear';
import { useState } from 'react';

function App() {

  const [expenses , setExpenses] = useState([
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);

  const addExpense =(expenseToAdd)=>{
    setExpenses(prevState =>  [expenseToAdd,...prevState])
  }

  // const deleteExpense = (id) => {
  //   setExpenses(prevState => {
  //     return prevState.filter(item => item.id != id)
  //   })
  // }

  // const updateExpense = (id,updatedItem) => {
  //   setExpenses(prevState =>{
  //     prevState.map( (item)=>{
  //       if(item.id == id){
  //         return {...item,...updatedItem}
  //       }
  //     } )
  //   })

  // }

  return (  
    <div>
      <ExpenseForm addExpense={addExpense} />
      <Expenses expenses={expenses}/> 
    </div>  


  );
}

export default App;
