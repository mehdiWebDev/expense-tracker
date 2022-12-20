import './expenseform.css'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const ExpenseForm = ({addExpense}) =>{

    const [title,setTitle]= useState("");
    const [amount,setAmout]=useState(0);
    const [date,setDate]=useState("");

    const handleTitleCahnge =(e)=>{
      setTitle(e.target.value)
    }
    const handleAmountCahnge =(e)=>{
     setAmout(e.target.value)   
    }

    const handleDateCahnge =(e)=>{
        setDate( e.target.value )
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        const expenseData ={
            id:uuidv4(),
            title,
            amount,
            date:new Date(date)
        }

        setTitle("");
        setAmout(0);
        setDate("");

        addExpense(expenseData)
    }



    return(
        <div className="new-expense">
            <form onSubmit={handleSubmit}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label >Title</label>
                        <input type="text" value={title} onChange={handleTitleCahnge}/>
                    </div>

                    <div className="new-expense__control">
                        <label >Amount</label>
                        <input type="number" min=".01" step=".01" value={amount} onChange={handleAmountCahnge}/>
                    </div>

                    <div className="new-expense__control">
                        <label >Date</label>
                        <input type="date" value={date}  onChange={handleDateCahnge}/>
                    </div>
                </div>

                <div className="new-expense__actions">
                    <button type="submit" > Add expense  </button>
                </div>
            </form>
        </div>
    )
}

export default ExpenseForm