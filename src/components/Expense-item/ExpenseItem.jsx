import './expenseitem.css'
import ExpenseDate from '../Expense-date/ExpenseDate';
import Card from '../shared/card/Card';

const Expenseitem = ({date,amount,title}) => {  

  return (
    <Card className="expense-item">
      <ExpenseDate date={date}/>
      <div className="expense-item__description"> <h2>{title}</h2> </div>
      <div className="expense-item__price">${amount}</div>
    </Card>
  );
};

export default Expenseitem;
