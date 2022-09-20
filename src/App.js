import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Navs from "./components/Navs";
import Table from "./components/Table/Table";
import Table1 from "./components/Table/Table1";

export function App() {
  const [inputValue, setInputValue] = useState();
  const [swimmer, setSwimmer] = useState();

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const saveSwimmer = () => {
    setSwimmer(inputValue);
    setInputValue("");
  };

  return (
    <div className="App">
      <Navs />
      <NavBar />
      <input onChange={onInputChange} type="text" value={inputValue}></input>
      <button onClick={saveSwimmer}>Cargar nadador</button>
      <Table swimmer={swimmer} />
      <Table1 />
    </div>
  );
}
