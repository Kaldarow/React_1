import React, { useState } from "react";

const Task_1 = () => {
  const [txt, setTxt] = useState("Hello");
  function inputChange(e) {
    setTxt(e.target.value);
  }
  return (
    <div>
      <input type="text" onChange={inputChange} value={txt} />
      <p>{txt}</p>
    </div>
  );
};

export default Task_1;
