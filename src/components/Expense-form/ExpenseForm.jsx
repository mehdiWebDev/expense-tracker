import './expenseform.css'
import { useState } from 'react'
const ExpenseForm = () =>{

    const [title,setTitle]= useState("");
    const [anount,setAmout]=useState(0);
    const [date,setDate]=useState("");

    const handleTitleCahnge =(e)=>{
      setTitle(e.target.value)
    }
    const handleAmountCahnge =(e)=>{
     setAmout(e.target.value)   
    }

    const handleDateCahnge =(e)=>{
        setDate(e.target.value)
    }



    return(
        <div className="new-expense">
            <form>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label >Title</label>
                        <input type="text" onChange={handleTitleCahnge}/>
                    </div>

                    <div className="new-expense__control">
                        <label >Amount</label>
                        <input type="number" min=".01" step=".01" onChange={handleAmountCahnge}/>
                    </div>

                    <div className="new-expense__control">
                        <label >Date</label>
                        <input type="date"  onChange={handleDateCahnge}/>
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