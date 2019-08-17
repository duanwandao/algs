//康托展开
//X=a[n]*(n-1)!+a[n-1]*(n-2)!+...+a[i]*(i-1)!+...+a[1]*0!

//计算 34152的康托展开值。

// 首位是3，则小于3的数有两个，为1和2，a[5]=2，则首位小于3的所有排列组合为 a[0]*(5-1)!
// 第二位是4，则小于4的数有两个，为1和2，注意这里3并不能算，因为3已经在第一位，所以其实计算的是在第二位之后小于4的个数。因此a[4]=2
// 第三位是1，则在其之后小于1的数有0个，所以a[3]=0
// 第四位是5，则在其之后小于5的数有1个，为2，所以a[2]=1
// 最后一位就不用计算啦，因为在它之后已经没有数了，所以a[1]固定为0
// 根据公式：
// X = 2 * 4! + 2 * 3! + 0 * 2! + 1 * 1! + 0 * 0!
//   = 2 * 24 + 2 * 6 + 1
//   = 61

const permutationIndex = function (A) {
  let sum = 0;
  for (let i = 0; i < A.length; i ++) {
    let smaller = 0;
    for (let j = i + 1; j < A.length; j ++) {
      if (A[i] > A[j]) {
        smaller ++;
      }
    }
    sum += smaller * factorial(A.length - 1 - i);
  }
  return sum + 1;
}

const factorial = (i) => {
  if (i <= 1) {
    return 1;
  }
  return i * factorial(i - 1);
}
