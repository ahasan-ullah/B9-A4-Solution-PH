function calculateMoney(ticketSale){
  if(ticketSale<0 || typeof ticketSale!=="number"){
    return "Invalid Number";
  }
  return ticketSale*120-(500+8*50);
}

console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(-130));