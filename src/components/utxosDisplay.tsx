import React from "react";
import { Utxo } from "../api/types";
import { useGetUtxoFee } from "../hooks/utxos";

type UtxosDisplayProps = {
  utxos: Utxo[];
  feeRate: number;
};
export const UtxosDisplay = ({ utxos, feeRate }: UtxosDisplayProps) => {
  const UtxoDisplay = (utxo: Utxo) => {
    const getUtxoFeeQueryRequest = useGetUtxoFee(utxo.txid, utxo.vout, feeRate);
    const fee = getUtxoFeeQueryRequest?.data?.fee;
    const percentOfTxFee = fee && utxo?.amount ? (fee / utxo.amount) * 100 : 0;
    return (
      <div>
        <p className="text-red-600">txid: {utxo.txid}</p>
        <p className="text-red-600">txvout: {utxo.vout} </p>
        <p className="text-red-600">
          amount: {(utxo.amount / 100000000).toFixed(8)}
        </p>
        <p className="text-red-600">
          fee estimate: {(fee / 100000000).toFixed(8) || "pending"}
        </p>

        <p className="text-red-600">
          % of tx fee: {percentOfTxFee.toFixed(2)}%
        </p>
      </div>
    );
  };
  return (
    <div>
      <p className="text-red-600">utxos display</p>
      {utxos.map((utxo) => {
        return UtxoDisplay(utxo);
      })}
    </div>
  );
};