import React, { useState } from "react";
import ExpenseFrom from "./ExpenseFrom";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState();
  const expenseDataSaveHandler = (expenseData) => {
    const data = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(data);
    setIsEditing(false);
  };
  const startEditHandler = () => {
    setIsEditing(true);
  };
  const stopEditHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense ">
      {!isEditing && (
        <button onClick={startEditHandler}>Add new expense</button>
      )}
      {isEditing && (
        <ExpenseFrom
          onExpenseDataSave={expenseDataSaveHandler}
          onCancle={stopEditHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
