import { useState, useEffect } from 'react'
import * as C from '../App.styles';
import { Item } from '../types/Item';
import { categories } from '../data/categories';
import { items } from '../data/items';
import { getCurrentMonth, filterListByMonth } from '../helpers/dateFilter';
import { TableArea } from '../components/TableArea';
import { InfoArea } from '../components/InfoArea';
import { InputArea } from '../components/InputArea';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Form = () => {
  const[list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setexpense] = useState(0);


  useEffect(() => {
    setFilteredList( filterListByMonth(list, currentMonth));
  }, [list, currentMonth])

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for(let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setexpense(expenseCount);


  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }

  return (

        <C.Container>
            <C.Body>
                <Routes>
                  <Route path='/' element={<InfoArea currentMonth={currentMonth} onMonthChange={handleMonthChange} income={income} expense={expense} />}/>
                </Routes>
                <Routes>
                   <Route path='/' element={<InputArea onAdd={handleAddItem} />}/>
                </Routes>  
               <Routes>
                  <Route path='/' element={<TableArea list={filteredList} />}/>
               </Routes>
            </C.Body>
          </C.Container>
     
  );
}

export default Form;