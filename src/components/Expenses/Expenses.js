import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2019");
  const yearChnageHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
    console.log(selectedYear);
    
  };
  const filteredExpense = props.items.filter(expense=>{return expense.date.getFullYear().toString() === selectedYear })

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          yearSelected={selectedYear}
          onYearChange={yearChnageHandler}
        />
        {filteredExpense.map((expense) => (

          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
