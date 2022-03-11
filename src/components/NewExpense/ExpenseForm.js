import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [addExpenseButton , setAddExpenseButton] = useState(true);

    const addExpense = (event) => {
        event.preventDefault();
        let expenseData = {
            title : title,
            amount : +amount,
            date : new Date(date)
        }
        console.log(expenseData);
        props.newExpense(expenseData)
        setTitle('');
        setAmount('');
        setDate('');
        setAddExpenseButton(true)
    }

    const closeForm = () => {
        console.log('close');
        setAddExpenseButton(true)
    }

    const hideNewExpense = () => {
        setAddExpenseButton(false);
    }

    return (
        <div className=''>
            {addExpenseButton &&
            <button onClick={hideNewExpense}>Add New Expense</button>
            }
            {!addExpenseButton && 
            <form onSubmit={addExpense}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' onChange={(e)=> setTitle(e.target.value)} value={title} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={(e)=> setAmount(e.target.value)} value={amount}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max='2022-12-31' onChange={(e)=> setDate(e.target.value)} value={date}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={closeForm}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
         }
        </div>
       
    );
};

export default ExpenseForm;