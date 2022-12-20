import './expense.css'
import Expenseitem from '../Expense-item/ExpenseItem'
import Card from '../shared/card/Card';
import FilterByYear from '../FilterByYear/FilterByYear';
import { useState } from 'react';


const Expenses = ({expenses})=>{

  const [year,setYear] = useState(2020);

  const handleChangeYear =(e)=>{
    setYear(e.target.value)
  }

  console.log(expenses)
  const filtredExpenses = expenses.filter(item => {
    return item.date.getFullYear() === parseInt( year)
  } )
 
    return (
        <Card className="expenses" >
             <FilterByYear selected={year} handleChangeYear={handleChangeYear} />

             {
              
              filtredExpenses.length === 0 ? 
              (
                <p style={{color:"red"}}> nothing </p>
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