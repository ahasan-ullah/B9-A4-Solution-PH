function monthlySavings(arr,livingCost){
  if(!Array.isArray(arr) || typeof livingCost!=='number'){
    return "Invalid";
  }
  let totalIncome=0;
  for(const payment of arr){
    if(payment>=3000){
      let tax=payment*0.2;
      totalIncome+=payment-tax;
    }
    else{
      totalIncome+=payment;
    }
  }
  let savings=totalIncome-livingCost;
  if(savings>=0){
    return savings;
  }
  else{
    return "Earn More"
  }
}

console.log(monthlySavings([1000,2000,3000],5400));
console.log(monthlySavings([1000,2000,2500],5000));
console.log(monthlySavings([9000,2700,3400],10000));
console.log(monthlySavings(100,[900,2700,3400]));