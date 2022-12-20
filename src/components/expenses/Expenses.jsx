import './expense.css'
import Expenseitem from '../Expense-item/ExpenseItem'
import Card from '../shared/card/Card';
import FilterByYear from '../FilterByYear/FilterByYear';
import { useState } from 'react';
import ExpensesChart from '../ExpensesChart/ExpensesChart';


const Expenses = ({expenses})=>{

  const [year,setYear] = useState(2020);

  const handleChangeYear =(e)=>{
    setYear(e.target.value)
  }

  const filtredExpenses = expenses.filter(item => {
    return item.date.getFullYear() === parseInt( year)
  } )
 
    return (
        <Card className="expenses" >
             <FilterByYear selected={year} handleChangeYear={handleChangeYear} />

             <ExpensesChart expenses={filtredExpenses} />

             {
              
              filtredExpenses.length === 0 ? 
              (
                <p style={{color:"red"}}> Found no expenses  </p>
               ) : 

               (
                filtredExpenses.map(( f )=>{
                  return <Expenseitem key={f.id} date={ f.date } amount={f.amount} title={ f.title }/>
                 })
               )
             }


              
        </Card>
    )
}
export default Expenses