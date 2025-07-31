// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

function longgestCommonPrefix(strs){
  const word = strs[0];
  let str = '';
  for(let i = 0; i < word.length ; i++){
    for(let j = i + 1; j <= word.length; j++ ){
      if(strs.every(s => s.startsWith(word.slice(i,j))) && word.slice(i,j).length > str.length){
        str = word.slice(i,j);
      }
    }
  }
  return str;
}