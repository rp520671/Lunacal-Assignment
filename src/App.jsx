import { useState } from 'react';
import './App.css';
import Home from './components/Home';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div 
        className='p-4 w-full' 
        style={{
          background: "linear-gradient(180deg, #373E44 -100%, #191B1F 100%)", 
          minHeight: "100vh", 
          borderRadius: "28px", 
          overflow: "hidden"
        }}
      >
        <Home />
      </div>
    </>
  );
}

export default App;
