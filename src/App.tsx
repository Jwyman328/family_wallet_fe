import React, { useState } from "react";
import { ApiClient } from "./api/api";

// use a component libary for ui components
function App() {
  const getBalance = async () => {
    const handleError = () => {
      console.log("error");
    };
    const response = await ApiClient.getBalance(handleError);
    setCurrentBalance(response.total);
  };
  const getUxtos = async () => {
    const handleError = () => {
      console.log("error");
    };
    const response = await ApiClient.getUtxos(handleError);
  };
  const getUxtoFees = async () => {
    const handleError = () => {
      console.log("error");
    };
    const response = await ApiClient.getUtxoFee(handleError);
  };
  const [currentBalance, setCurrentBalance] = useState(0);
  return (
    <div className="mt-4">
      <div className="mt-4 text-red-400"> Welcome to the family wallet </div>
      <button onClick={getBalance}>get utxo balance</button>
      <p>{currentBalance} sats</p>

      <button onClick={getUxtos}>get utxos</button>
      <button onClick={getUxtoFees}>get utxo fees</button>
    </div>
  );
}

export default App;
