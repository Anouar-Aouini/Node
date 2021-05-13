let Sum = 0
let i=2

do {
    Sum += Number(process.argv[i])
    i++
} while(i < process.argv.length)

console.log(Sum)