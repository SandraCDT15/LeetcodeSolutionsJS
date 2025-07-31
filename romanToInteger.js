// Given a roman numeral, convert it to an integer

// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

function romanToInt(str) {
  const symbol = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  const value = [1,5,10,50,100,500,1000];
  const arr = [...str];
  let num = 0;

  const valuesArr = arr.map(element => {
      return value[symbol.indexOf(element)];
  });

  for(let i = 0; i < valuesArr.length; i++){
    if(valuesArr[i+1]){
      if(valuesArr[i] >= valuesArr[i+1]){
        num += valuesArr[i];
      }else if(valuesArr[i] < valuesArr[i+1]){
        num -= valuesArr[i]
      }
    } else {
      num += valuesArr[i];
  } 
  }
  return num;
};