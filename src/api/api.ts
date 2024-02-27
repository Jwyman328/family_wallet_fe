import { GetUtxosResponseType, GetBalanceResponseType } from "./types";
async function fetchHandler(url: string, method = "GET", body?: any) {
  const response = await fetch(url, {
    method: method,
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response;
}

export type UtxoRequestParam = {
  id: string;
  vout: number;
};

export class ApiClient {
  static async getBalance() {
    const response = await fetchHandler("http://localhost:5011/balance");

    const data = await response.json();
    return data as GetBalanceResponseType;
  }
  static async getUtxos() {
    const response = await fetchHandler("http://localhost:5011/utxos");

    const data = await response.json();

    return data as GetUtxosResponseType;
  }
  static async createTxFeeEstimation(utxos: UtxoRequestParam[], feeRate: number = 1) {
    const response = await fetchHandler(
      `http://localhost:5011/utxos/fees?feeRate=${feeRate}`,
      "POST",
      utxos,
    );

    const data = await response.json();
    return data;
  }
}
