function checkCashRegister(price, cash, cid) {
  let changeUnits = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let cashObj = { status: "", change: [] };
  let numChange = cash - price;

  const moneyValues = {
    0: 0.01,
    1: 0.05,
    2: 0.1,
    3: 0.25,
    4: 1,
    5: 5,
    6: 10,
    7: 20,
    8: 100
  }

  let totalCash = cid.reduce((acc, item) => (acc + item[1]), 0);
  totalCash = roundToTwo(totalCash);

  if (totalCash < numChange) {
    cashObj.status = "INSUFFICIENT_FUNDS";
    return cashObj;
  }

  if (totalCash == numChange) cashObj.status = "CLOSED";
  if (totalCash > numChange) cashObj.status = "OPEN";

  let cidUnits = cid.map((item, i) => Math.ceil(item[1] / moneyValues[i]));

  for (let i = cid.length; i >= 0; i--) {
    while (moneyValues[i] <= numChange && cidUnits[i] != 0) {
      changeUnits[i]++;
      cidUnits[i]--;
      numChange = roundToTwo(numChange - moneyValues[i]);
      if (numChange == 0) break;
    }

    if (numChange == 0) break;
  }

  if (numChange != 0) {
    cashObj.status = "INSUFFICIENT_FUNDS";
    return cashObj;
  }

  for (let i = cid.length - 1; i >= 0; i--) {
    if (changeUnits[i] != 0) cid[i][1] = changeUnits[i] * moneyValues[i];
    else if (cashObj.status != "CLOSED") cid.splice(i, 1);
  }

  if (cashObj.status != "CLOSED") cashObj.change = cid.reverse();
  else cashObj.change = cid;
  return cashObj;
}

function roundToTwo(num) {
  return +(Math.round(num + "e+2") + "e-2");
}

console.log(checkCashRegister(
  19.5,
  20,
  [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ]
));