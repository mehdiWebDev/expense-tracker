import './expensedate.css'
const ExpenseDate = ({date}) => {
  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{date.getUTCMonth()}</div>
      <div className='expense-date__year'>{date.getFullYear()}</div>
      <div className='expense-date__day'>{date.getDate()}</div>
    </div>
  );
};

export default ExpenseDate;
