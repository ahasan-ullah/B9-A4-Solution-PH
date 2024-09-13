function password(obj){
  if(obj.name===undefined || obj.birthYear===undefined || obj.siteName===undefined || obj.birthYear.toString().length!==4){
    return "Invalid";
  }
  let passwordString=obj.siteName[0].toUpperCase()+obj.siteName.slice(1)+'#'+obj.name+'@'+obj.birthYear;
  return passwordString;
}

console.log(
  password(
    {name: 'kolimuddin',
      birthYear: 1999,
      siteName: 'google'
  })
);