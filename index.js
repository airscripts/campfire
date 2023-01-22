/* Function declaration that takes the item price, cash and cid */
function checkCashRegister(price, cash, cid) {
	/* Change units variable */
	let changeUnits = [0, 0, 0, 0, 0, 0, 0, 0, 0];

	/* Declaring an object where we will store change's infromation. */
  	let cashObj = { status: "", change: [] };

  	/* Declaring a variable that will store the numerical change */
  	let numChange = cash - price;

  	/* Declaring a constant that contains all the values */
  	const moneyValues = { 0: 0.01, 1: 0.05, 2: 0.1, 3: 0.25, 4: 1, 5: 5, 6: 10, 7: 20, 8: 100 }

  	/* Determining the total cash */
  	let totalCash = cid.reduce((acc, item) => (acc + item[1]), 0);
  	totalCash = roundToTwo(totalCash);

 	/* Exception where the total cash is insufficient */
  	if(totalCash < numChange) { cashObj.status = "INSUFFICIENT_FUNDS"; return cashObj; }
  	/* Exception where the total cash is equal to the numChange */
  	if(totalCash == numChange) { cashObj.status = "CLOSED"; }
  	/* Exception where the total cash is above the numChange */
  	if(totalCash > numChange) { cashObj.status = "OPEN"; }

  	/* Determining how much units of each money type we have */
  	let cidUnits = cid.map((item, i) => Math.ceil(item[1] / moneyValues[i]));

  	/* Algorithm used for counting how many coins of a certain type are needed for 
  	   pushing them into change array */
  	for(let i = cid.length; i >= 0; i--) {
  		/* Iterating from the highest value if it is not 0 */
  		while(moneyValues[i] <= numChange && cidUnits[i] != 0) {
  			/* Incrementing the units */
  			changeUnits[i]++;
  			/* And decrementing the units remaining */
  			cidUnits[i]--;

  			numChange = roundToTwo(numChange - moneyValues[i]);
  			if(numChange == 0) { break; }
  		}
  		if(numChange == 0) { break; }
  	}

  	/* Checking if we had funds but not the exactly amount for giving the change */
  	if(numChange != 0) { cashObj.status = "INSUFFICIENT_FUNDS"; return cashObj; }

  	/* Converting the units into money */
  	for(let i = cid.length-1; i >= 0; i--) {
  		/* If they're not 0 we're pushing them */
  		if(changeUnits[i] != 0) {
  			cid[i][1] = changeUnits[i] * moneyValues[i];
  		}
  		/* Otherwise we check if the status is not closed so we can remove the zero-valued elements */
  		else {
  			if(cashObj.status != "CLOSED") {
  				/* Cuts the zero-valued off */
  				cid.splice(i, 1);
  			}
  		}
  	}
  	
  	/* If the status is not closed, we reverse the order from the highest to the lower */
  	if(cashObj.status != "CLOSED") {
  		cashObj.change = cid.reverse();
  	} 
  	/* Otherwise things remain the same */
  	else {
  		cashObj.change = cid;
  	}

  	/* Result output */
  	return cashObj;
}

/* Function utilized to round up the first two decimal numbers */
function roundToTwo(num) {    
    return +(Math.round(num + "e+2") + "e-2");
}

/* Function call */
console.log(`Outcome: ${checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])}`);
