function solution(arr1, arr2) {
  let concatArr = arr1.concat(arr2);

  let orderedArr = concatArr.sort();
  let arrLen = orderedArr.length;

  if (arrLen % 2 === 1) {
    let middle = orderedArr[(arrLen - 1) / 2];
    return middle;
  }
  //   else if(arrLen%2===0){
  //     let middle = orderedArr
  //   }

  //   for (let i = 0; i < arrLen; i++) {
  //     return middle;
  //   }
}

const arr1 = [1, 2, 7, 8];
const arr2 = [3, 4, 9, 6, 5];

const output1 = solution(arr1, arr2);
console.log(output1); //result 5
