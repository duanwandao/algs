const deepCopy = (arr) => {
  const copy = [];

  arr.forEach(elem => {
    if(Array.isArray(elem)) {
      copy.push(deepCopy(elem))
    } else {
      copy.push(elem)
    }
  })

  return copy;
}


console.log(deepCopy([3, [2, [1, [4, 6]]]]));
