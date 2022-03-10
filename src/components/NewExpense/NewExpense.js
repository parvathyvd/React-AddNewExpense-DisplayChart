import React from 'react';
import ExpenseForm from './ExpenseForm'
import './NewExpense.css';

const NewExpense = (props) => {
    return (
        <div className='new-expense'>
           <ExpenseForm newExpense = {(exp)=>props.addExpense(exp)}/>
        </div>
    );
};

export default NewExpense;