import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import ExpensesChart from './ExpensesChart';
import { useState } from 'react';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const onSelectedYearHandler = (year) => {
            setFilteredYear(year);
    }

    const filterExpenses = props.expenses.filter((exp)=>exp.date.getFullYear().toString() === filteredYear )
    return (
        <div>
        <Card className="expenses">
        <ExpenseFilter selected={filteredYear}  onSelectedYear = {(year) => onSelectedYearHandler(year)} />
        <ExpensesChart expenses = {filterExpenses} />
         {filterExpenses.length === 0 ? <p className='expenses-list__fallback'>No Expenses Found</p> : filterExpenses.map((expense, index)=>{
                return <ExpenseItem key={index} title={expense.title} amount={expense.amount} date={expense.date} />
                })}
        </Card>
        </div>

    )
}

export default Expenses;