import { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import AppRouter from './router/AppRouter';

function App() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState('');

  const handleClick = () => setToggle(prev => !prev);

  useEffect(() => {
    setTimeout(() => {
      setData({})
    }, 300)
  }, [])

  return (
    <div className="App">
      <h1>Hello world</h1>
      <h2 data-testid='value-elem'>{value}</h2>
      {data && <div>text div</div>}
      {toggle === true && <div data-testid='toggle-elem'>toggle</div>}
      <button data-testid='toggle-btn' onClick={handleClick}>Click</button>
      <input onChange={(e) => setValue(e.target.value)} type='text' placeholder='text...' />
      <div>
        <Navbar />
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
