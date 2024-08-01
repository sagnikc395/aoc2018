const file = Bun.file("./input.txt");
const data = await file.text();

let sum = 0;
const digits = data.trim().split("").map(Number);
const halfLength = digits.length / 2;

for (let i = 0; i < digits.length; i++) {
  const currDigit = digits[i];
  const halfwayDigit = digits[(i + halfLength) % digits.length];

  if (currDigit === halfwayDigit) sum += currDigit;
}

console.log(sum);