const compose = (...funcs) => funcs.reduce((accum, fn) => (...args) => accum(fn(...args), x => x));
const qv = x => x * x;
const sc = x => x + 1;

const result = compose(qv, sc)(5)
const result2 = compose(sc, qv)(5)

console.log(`result: ${result}\nresult2: ${result2}`)