import { useState } from 'react';
import './App.css';
import Table from './components/Table/Table';

export function App() {

    const [inputValue, setInputValue] = useState();
    const [swimmer, setSwimmer] = useState();

    const onInputChange = (event) => {
        setInputValue(event.target.value);
      };
    
    const saveSwimmer = () => {
        setSwimmer(inputValue);
        setInputValue("");
    }

  return (
    <div className="App">
      <input onChange={onInputChange} type="text" value={inputValue}></input>
      <button onClick={saveSwimmer}>Cargar nadador</button>
      <Table swimmer={swimmer}/>
    </div>
  );
}
