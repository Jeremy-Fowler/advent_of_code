let input = require('./input.json')

for (let i = 0; i < input.length; i++) {
  let num1 = input[i]
  for (let j = i + 1; j < input.length; j++) {
    let num2 = input[j]
    if (num1 + num2 == 2020) {
      console.log('2 number result: ', num1 * num2);
    }
    for (let k = j + 1; k < input.length; k++) {
      let num3 = input[k]
      if (num1 + num2 + num3 == 2020) {
        console.log('3 number result: ', num1 * num2 * num3);
      }
    }
  }
}
