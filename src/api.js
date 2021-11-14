import { API_URL } from "./constants";


const getLast30Prices = async (time) => {
  return await (await fetch(`${API_URL}/api/v1/en/crypto-coin/chart/candles/${time.type}?aggregate=${time.count}&e=CCCAGG&fsym=BTC&tsym=usd&limit=30`)).json();
};

export {
  getLast30Prices
};
