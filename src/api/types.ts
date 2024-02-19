export type GetUtxosResponseType = {
  utxos: Utxo[];
};

export type Utxo = {
  amount: number;
  txid: string;
  vout: number;
};

export type GetBalanceResponseType = {
  confirmed: number;
  spendable: number;
  total: number;
};
