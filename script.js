const arr = [ 5, 7, [ 4, [2], 8, [1,3], 2 ], [ 9, [] ], 1, 8 ];

function treeSum(arr) {
  return arr.reduce((acc, cur) => acc + (Array.isArray(cur) ? treeSum(cur) : cur), 0)
}

console.log(treeSum(arr));

