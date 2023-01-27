function equalizeArray(arr) {
  let count = {};

  for(let i=0; i<arr.length; i++){
    if(count[arr[i]] === undefined){
        count[arr[i]] = 1;
    }else{
        count[arr[i]]++
    }
  }
  let maxFreq = 0
  for(let key in count){
    maxFreq = Math.max(maxFreq, count[key]);
  }
  return arr.length - maxFreq;

}

console.log(equalizeArray([3, 3, 2, 1, 3]));
