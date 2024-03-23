let arr = [1,2,3,4, 5]
function add(arr, i) {
  if (i >= arr.length) return 0;
  return arr[i] + add(arr, ++i)
}

console.log(add(arr, 0));

function add1(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + add1(arr.slice(1))
}

console.log(add1(arr));