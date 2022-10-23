import React,{useState} from 'react';
import './ExpenseFilter.css';



const ExpenseFilter = () => {
    const [selectedYear, setSelectedYear] = useState('2020');

    const filterByYearHandler = (event) =>{
        setSelectedYear(event.target.value);
        console.log(event.target.value);
    }
return(
<div className='expenses-filter'>
<div className='expenses-filter__control'>
    <label>Expense Filter by Year</label>
    <select onChange={filterByYearHandler}>
        <option value='2022'>2022</option>
        <option value='2021'>2021</option>
        <option value='2019'>2019</option>
        <option value='2018'>2018</option>
    </select>
</div>
</div>
);
}

export default ExpenseFilter;