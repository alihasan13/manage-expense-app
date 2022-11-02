import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2019");
  const yearChnageHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
    console.log(selectedYear);
  };
  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });
 


  return (
    <li>
      <Card className="expenses">

        <ExpenseFilter
          yearSelected={selectedYear}
          onYearChange={yearChnageHandler}
        />
        <ExpensesChart expenses={filteredExpense}/>
          <ExpenseList items={filteredExpense}/>

        {/* {filteredExpense.length === 0 && <p>No Expenses Found</p>}
        {filteredExpense.length > 0 &&  filteredExpense.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}
        {/* {filteredExpense.length === 0 ? (
          <p>No Expense Found </p>
        ) : (
          filteredExpense.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}
      </Card>
    </li>
  );
};

export default Expenses;
