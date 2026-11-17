function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

const lcm = (a, b) => (a / gcd(a, b)) * b;

console.log(gcd(12, 18));  // 6
console.log(lcm(12, 18));  // 36
