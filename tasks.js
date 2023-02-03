// Assignment (Mathematical Shapes)
// 2a

let sides = 9
const diagonal = Math.sqrt(sides ** 2 + sides ** 2)

console.log(diagonal)

// 2b
// lengths of the sides are represented by a, b and c
// s = Semi perimeter

const a = 5
const b = 6
const c = 7
const s = (a + b + c) / 2
const area = Math.sqrt(s * (s - a) * (s - b) * (s - c))

console.log(area)

// 2c

let radius = 4
let circumference = 2 * Math.PI * radius
let surfaceArea = Math.PI * (radius ** 2)

console.log(circumference)
console.log(surfaceArea)


// Assignment (Conditional Statements & Loops)
// 3a

const largerNum = (num1, num2) => {
    if (num1 > num2) {
        return num1
    } else if (num1 < num2) {
        return num2
    } else {
        return 'They are EQUAL'
    }
}

// 3b

const numType = (num) => {
    return num % 2 === 0 
    ? `${num} is even` 
    : `${num} is odd`
}