import { ApiClient, UtxoRequestParam } from "../api/api";
import { useMutation, useQuery } from "react-query";

const queryKeys = {
  getBalance: ["getBalance"],
  getUtxos: ["getUtxos"],
};

export function useGetBalance() {
  return useQuery(queryKeys.getBalance, () => ApiClient.getBalance());
}
export function useGetUtxos() {
  return useQuery(queryKeys.getUtxos, () => ApiClient.getUtxos());
}
export function useCreateTxFeeEstimate(
  utxos: UtxoRequestParam[],
  feeRate: number,
) {
  return useMutation(() => ApiClient.createTxFeeEstimation(utxos, feeRate));
}
