import { ApiClient } from "../api/api";
import { useQuery } from "react-query";

const queryKeys = {
  getBalance: ["getBalance"],
  getUtxos: ["getUtxos"],
  getUtxoFee: (txId: string, vout: number, feeRate: number) => [
    "getUtxoFee",
    txId,
    vout,
    feeRate,
  ],
};

export function useGetBalance() {
  return useQuery(queryKeys.getBalance, () => ApiClient.getBalance());
}
export function useGetUtxos() {
  return useQuery(queryKeys.getUtxos, () => ApiClient.getUtxos());
}

export function useGetUtxoFee(txId: string, vout: number, feeRate: number) {
  return useQuery(queryKeys.getUtxoFee(txId, vout, feeRate), () =>
    ApiClient.getUtxoFee(txId, vout, feeRate),
  );
}
