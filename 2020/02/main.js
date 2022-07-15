let input = require('./input.json')

let count = 0

// ANCHOR part 1

// for (let i = 0; i < input.length; i++) {
//   let amount = 0
//   let str = input[i];
//   let [rules, password] = str.split(': ')
//   let [values, char] = rules.split(' ')
//   let [min, max] = values.split('-')
//   for (let i = 0; i < password.length; i++) {
//     const letter = password[i];
//     if (letter == char) {
//       amount++
//     }
//   }
//   if (amount >= parseInt(min) && amount <= parseInt(max)) {
//     count++
//   }
// }

// ANCHOR part 2

for (let i = 0; i < input.length; i++) {
  let amount = 0
  let str = input[i]
  let [rules, password] = str.split(': ')
  let [values, char] = rules.split(' ')
  let [one, two] = values.split('-')
  if (password[parseInt(one) - 1] == char) {
    amount++
  }
  if (password[parseInt(two) - 1] == char) {
    amount++
  }
  if (amount == 1) {
    count++
  }
}
console.log(count);