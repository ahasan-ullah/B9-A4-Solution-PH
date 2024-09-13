function deleteInvalids(array){
  let numberArray=[];
  for(const element of array){
    if(!Array.isArray(array)){
      return "Invalid";
    }
    if(typeof element==='number' && isNaN(element)===false){
      numberArray.push(element);
    }
  }
  return numberArray;
}