// import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home/Home';
import TakeOrder from './pages/TakeOrder/takeOrder';
import './App.css';

function App() {
  // APIのURL
  // const url = "https://food-ingredients.pons-llc.com/index.json";
  // const url = `https://food-ingredients.pons-llc.com/data/${code}.json`;
  // const url = "https://food-ingredients.pons-llc.com/data/01001.json";

  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     // console.log(data);
  //     // console.log(data.name);
  //     // console.log(data.general.CA.value);
  //     // console.log(data.general.VITC.value);
      
  //     // const result = data.filter((food) => food.name.includes("バナナ"));
  //     // console.log(result);
      
  //   }
  //   getData();
  // }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/takeOrder' element={<TakeOrder />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
