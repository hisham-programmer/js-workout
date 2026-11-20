let text = "javascript";

let letterCount = {};

for (let char of text) {
    if (letterCount[char]) {
        letterCount[char]++;
    } else {
        letterCount[char] = 1;
    }
}

console.log(letterCount);