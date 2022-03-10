import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'Glass',
      amount: 9.12,
      date: new Date(2020, 5, 14),
    },
    { id: 'e3', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e4',
      title: 'Car Insurance',
      amount: 214.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e5',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenseList, setExpenseList] = useState(expenses);

  const addExpenseHandler = (newExp) =>{
    console.log('got in the app', newExp)
    //clean way of updating 
    setExpenseList((prevExpenses) => {
     return [...prevExpenses, newExp]
    })
    // or you can just use [...expenses, newExp] but not the really correct way
  }

 
  
  return (
    <div>
      <NewExpense addExpense = {(exp)=>addExpenseHandler(exp)} />
      <Expenses expenses={expenseList}/>
    </div>
  );
}

export default App;
