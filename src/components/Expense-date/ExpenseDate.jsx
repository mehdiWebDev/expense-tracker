import './expensedate.css'
const ExpenseDate = ({date}) => {
  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{new Date(date).getMonth()}</div>
      <div className='expense-date__year'>{new Date(date).getFullYear()}</div>
      <div className='expense-date__day'>{new Date(date).getDate()}</div>
    </div>
  );
};

export default ExpenseDate;
