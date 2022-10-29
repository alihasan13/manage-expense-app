import React, { useState } from "react";
import "./ExpenseFrom.css";
const ExpenseFrom = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({enteredTitle:'',enteredAmount:'',enteredDate:''});

  const changeHandlerTitle = (event) => {
    // setUserInput({...userInput,enteredTitle:event.target.value});
    // setUserInput((prevState)=>{
    //   return {...prevState,enteredTitle:event.target.value}
    // })
    setEnteredTitle(event.target.value);
  };
  const changeHandlerAmount = (event) => {
    // setUserInput({...userInput,enteredAmount:event.target.value});
    setEnteredAmount(event.target.value);
  };
  const changeHandlerDate = (event) => {
    // setUserInput({...userInput,enteredDate:event.target.value});
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onExpenseDataSave(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  const cancelHandler=()=>{props.setStopEdit(false)}
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label className="new-expense__control label">Title</label>
          <input
            value={enteredTitle}
            onChange={changeHandlerTitle}
            className="new-expense__control input"
            type="text"
          />
        </div>
        <div className="new-expense__control">
          <label className="new-expense__control label">Amount</label>
          <input
            value={enteredAmount}
            onChange={changeHandlerAmount}
            className="new-expense__control input"
            type="number"
            min=".001"
            step=".001"
          />
        </div>
        <div className="new-expense__control">
          <label className="new-expense__control label">Date</label>
          <input
            value={enteredDate}
            onChange={changeHandlerDate}
            className="new-expense__control input"
            type="date"
            min="2021-01-01"
            max="2025-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancle} >Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseFrom;
