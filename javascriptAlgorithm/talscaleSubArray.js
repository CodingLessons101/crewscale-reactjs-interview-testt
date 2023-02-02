function solution(n, arr, modulo) {
  let maxValue = 0;
  let subArrOfArr = [];
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n; j++) {
      let subArr = arr.slice(i, j + 1);
      if (subArr.length != 0) {
        subArrOfArr.push(subArr);
      }
    }
  }

  for (let i = 0; i < subArrOfArr.length; i++) {
    let total = 0;
    for (let j = 0; j < subArrOfArr[i].length; j++) {
      total += subArrOfArr[i][j];
      let mod = total % modulo;
      if (maxValue < mod) {
        maxValue = mod;
      }
    }
  }
  return maxValue;
}
let arr = [3, 3, 9, 9, 5];
console.log(solution(5, arr, 7));
