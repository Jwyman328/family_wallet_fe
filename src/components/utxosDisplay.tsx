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
    const isSpendable: boolean = getUtxoFeeQueryRequest?.data?.spendable;
    return (
      <div>
        <p className="text-black">txid: {utxo.txid}</p>
        <p className="text-black">txvout: {utxo.vout} </p>
        <p className="text-black">
          amount: {(utxo.amount / 100000000).toFixed(8)}
        </p>

        {isSpendable ? (
          <div>
            <p className="text-black">
              fee estimate: {(fee / 100000000).toFixed(8) || "pending"}
            </p>
            <p className="text-black">
              % of tx fee: {percentOfTxFee.toFixed(5).replace(/\.?0+$/, "")}%
            </p>
          </div>
        ) : (
          <p className="text-red-600">not spendable</p>
        )}
      </div>
    );
  };
  return (
    <div>
      <p className="text-blue-600">utxos display</p>
      {utxos.map((utxo) => {
        return UtxoDisplay(utxo);
      })}
    </div>
  );
};
