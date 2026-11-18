import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home/Home';
import TakeOrder from './pages/TakeOrder/takeOrder';
import './App.css';

function App() {
  // APIのURL
  // const url = "https://calories.jp/api/search?q=さんま&lang=ja&limit=5";
  const url = "https://calories.jp/api/analyze-dish?dish=親子丼&lang=ja";

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      
    }
    getData();
  }, []);

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
