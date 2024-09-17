#!/usr/bin/env node

console.log("Welcome to Victor CLI");
// console.log(process.argv)

function add(a, b) {
    return a + b
}

const functionName = process.argv[2]
const a = parseInt(process.argv[3])
const b = parseInt(process.argv[4])

if (functionName === "add") {
    console.log(add(a, b))
}

if (functionName === "printName") {
    console.log("Victor")
}