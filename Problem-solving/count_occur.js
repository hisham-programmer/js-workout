function countSubstring(str, sub) {
  return str.split(sub).length - 1;
}

console.log(countSubstring("hello world hello", "hello"));   // 2