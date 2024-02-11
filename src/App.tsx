import React, { useState } from "react";
import { ApiClient } from "./api/api";

function App() {
  const getBalance = async () => {
    const handleError = () => {
      console.log("error");
    };
    const response = await ApiClient.getBalance(handleError);
    console.log("right before setting",response.total);
    setCurrentBalance(response.total);
    console.log(response);
  };
  const [currentBalance, setCurrentBalance] = useState(0);
  return (
    <div className="mt-4">
      <div className="mt-4 text-red-400"> Welcome to the family wallet </div>
      <button onClick={getBalance}>Click me</button>
      <p>{currentBalance} sats</p>
    </div>
  );
}

export default App;
