import React, { useState } from "react";
import Task_1 from "./components/Task_1";
import Boxes from "./components/Boxes";
import Card from "./components/Card";
import Avatar from "./components/Avatar";
import Counter from "./components/Counter";

const App = () => {
  let stylesArr = [
    { width: "300px", height: "150px", backgroundColor: "red" },
    { width: "300px", height: "150px", backgroundColor: "black" },
    { width: "300px", height: "150px", backgroundColor: "green" },
  ];

  let [state, setState] = useState(0);
  const increment = () => {
    setState(state + 1);
  }
  const dicrement = () => {
    setState(state - 1)
  }
  return (
    <div>
      <Task_1 />
      <Boxes st={stylesArr}/>
      <Card><Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRohKTZ_uKPMqfLcsdFE73v1HmpNAa4S7iIrg&usqp=CAU" /></Card>
      <Counter state={state} increment={increment} dicrement={dicrement} />
    </div>
  );
};

export default App;
