const coins [
13
{name: "Bitcoin", ticker: "BTC", value: 9685, change: 2.83),
{ name: "Ethereum", ticker: "ETH", value: 210.5, change: 6.17), { name: "Ripple", ticker: "XRP", value: 8.2812, change: 2.47], (name: "Bitcoin Cash", ticker: "BCH", value: 441.4, change: 5.01), {name: "Bitcoin SV", ticker: "BSV", value: 383.17, change: 5.53), { name: "Litecoin", ticker: "LTC", value: 74.935, change: 4.25 }, { name: "Tether", ticker: "USDT", value: 8.9994, change: -1.7), { name: "EOS", ticker: "EOS", value: 4.6161, change: 3.15), (name: "Binance Coin", ticker: "BNB", value: 19.824, change: -3.82), (name: "Cardano", ticker: "ADA", value: 0.060389, change: 2.93), { name: "Tezos", ticker: "XTZ", value: 2.1247, change: 6.12}, { name: "Ethereum Classic", ticker: "ETC", value: 12.5988, change: 4.09}, (name: "Stellar", ticker: "XLM", value: 8.07034, change: -4.18 (name: "Monero", ticker: "XMR", value: 79.523, change: 3.45), { name: "TRON", ticker: "TRX", value: 8.820881, change: 5.21)
let table document.createElement("table");
table.className = "table";
document.body.appendChild(table);
let header document.createElement("tr");
header.innerHTML =
<th>Name</th>
<th>Ticker</th>
<th>Price</th>
<th>Change</th>
table.appendChild(header);
coins.forEach(item"> {
let tr document.createElement("tr");
tr.innerHTML-
<td>${item.name}</td>
<td>${item.ticker}</td>
<td>${item.value}</td>
<td class="${item.change? "positive": "negative"}">
${item.change}%
</td>
table.appendChild(tr);
});
const coins = [     



{ name: "Bitcoin", ticker: "BTC", value: 9685, change: 2.83 },
