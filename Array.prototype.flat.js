const myFlat = (array, n = 1) => {

  const flatAll = (array) => {
    return array.reduce((previous, current) => previous.concat(Array.isArray(current) ? flatAll(current) : current), [])
  }

  return n === Infinity
  ? flatAll(array)
  : n === 1
  ? [].concat(...array)
  : array.reduce((previous, current) => previous.concat(Array.isArray(current) ? myFlat(current, n - 1) : current), []);
}

console.log(myFlat([1, [4, 6, 8], [2, 3, [8, 9]], 11], Infinity));
