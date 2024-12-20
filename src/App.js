import React from 'react';
import './App.css';
import { Search } from './Components/Search'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Routes } from 'react-router-dom';
import { MealDetails } from './Components/MealDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element = {<Search />}></Route>
        <Route path = "/:mealid" element={<MealDetails/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
