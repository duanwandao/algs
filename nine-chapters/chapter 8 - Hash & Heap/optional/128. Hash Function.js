// 128. Hash Function
//
// In data structure Hash, hash function is used to convert a string(or any other type) into an integer smaller than hash size and bigger or equal to zero. The objective of designing a hash function is to "hash" the key as unreasonable as possible. A good hash function can avoid collision as less as possible. A widely used hash function algorithm is using a magic number 33, consider any string as a 33 based big integer like follow:
//
//   hashcode("abcd") = (ascii(a) * 33^3 + ascii(b) * 33^2 + ascii(c) *33 + ascii(d)) % HASH_SIZE
//
//     = (97* 33^3 + 98 * 33^2 + 99 * 33 +100) % HASH_SIZE
//
//     = 3595978 % HASH_SIZE
//
// here HASH_SIZE is the capacity of the hash table (you can assume a hash table is like an array with index 0 ~ HASH_SIZE-1).


//   (a* 33^3 + b * 33^2 + c * 33 + c) % HASH_SIZE
// = (33(33(33 * 0 + a) + b ) + c) % HASH_SIZE
// = (33 * accum + currentValue) % HASH_SIZE


const hashCode = function (key, HASH_SIZE) {
  return [...key]
    .map(char => char.charCodeAt(0))
    .reduce((accum, currentValue) => (accum * 33 + currentValue) % HASH_SIZE, 0);
}

console.log(hashCode("abcdefghijklmnopqrstuvwxyz", 2607));
