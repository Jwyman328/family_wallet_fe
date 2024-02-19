import { GetUtxosResponseType, GetBalanceResponseType } from "./types";
async function fetchHandler(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response;
}

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
  static async getUtxoFee(txId: string, vout: number, feeRate: number = 1) {
    const response = await fetchHandler(
      `http://localhost:5011/utxos/fees/${txId}/${vout}?feeRate=${feeRate}`,
    );

    const data = await response.json();
    return data;
  }
}
