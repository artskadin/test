function power(a) {
    return (b) => {
        return b ** a
    }
}

const res = power(2)
const res2 = power(3)

console.log(res(5))
console.log(res2(5))