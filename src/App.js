import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('COMPONENT');
  }, [count]);

  const handleIncrement = (event) => {
    setCount(count + 1);
  }

  const handleIncrementKeyUp = (event) => {
    console.log('UP');
  }

  const handleIncrementKeyDown = (event) => {
    console.log('DOWN');
  }

  const handleInputChange = (event) => {
    console.log(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('SUBMIT');
  }

  const handleBlur = (event) => {
    console.log('BLUR');
  }
  
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <button onKeyUp={handleIncrementKeyUp} 
      onKeyDown={handleIncrementKeyDown} 
      onClick={handleIncrement}>Increment</button>

      <input onChange={handleInputChange} onBlur={handleBlur} />
      </form>
    </div>
  );
}

export default App;
