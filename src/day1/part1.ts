const file = Bun.file("./input.txt");
const data = await file.text();

let sum = 0;
const digits = data.split("").map(Number);

for (let i = 0; i < digits.length; i++) {
  const currDigit = digits[i];
  const nextDigit = digits[(i + 1) % digits.length];

  if (currDigit === nextDigit) sum += currDigit;
}

console.log(sum);
