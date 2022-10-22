import React from "react";
import ExpenseFrom from "./ExpenseFrom";
import "./NewExpense.css";

const NewExpense = (props) => {
  const expenseDataSaveHandler = (expenseData) => {
    const data = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(data);
    console.log(expenseData);
  };
  return (
    <div className="new-expense ">
      <ExpenseFrom onExpenseDataSave={expenseDataSaveHandler} />
    </div>
  );
};

export default NewExpense;
