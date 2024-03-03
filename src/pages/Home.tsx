import React, { useState } from "react";
import { CurrentFeeRates } from "../components/currentFeeRates";
import { UtxosDisplay } from "../components/utxosDisplay";
import { useGetBalance, useGetUtxos } from "../hooks/utxos";
// use a component libary for ui components
function Home() {
  const getBalanceQueryRequest = useGetBalance();
  const getUtxosQueryRequest = useGetUtxos();

  const [feeRate, setFeeRate] = useState(1);
  return (
    <div className="mt-4">
      <div className="mt-4 text-red-400"> Welcome to the family wallet </div>
      <p>{getBalanceQueryRequest?.data?.total} sats</p>
      <CurrentFeeRates />
      <button className="border rounded border-black" onClick={() => {}}>
        get utxo fees
      </button>
      <p>fee rate</p>
      <input
        type="number"
        value={feeRate}
        onChange={(e) => setFeeRate(parseInt(e.target.value))}
      />
      {getUtxosQueryRequest.isSuccess ? (
        <UtxosDisplay
          feeRate={feeRate}
          utxos={getUtxosQueryRequest?.data?.utxos}
        />
      ) : null}
    </div>
  );
}

export default Home;
