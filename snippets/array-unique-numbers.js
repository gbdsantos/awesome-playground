const numbers = [1, 1, 2, 3, 3, 3, 4, 4, 5]

const uniqueNumbers = [...new Set(numbers)]

console.log(uniqueNumbers)
// Output: [1, 2, 3, 4, 5]
