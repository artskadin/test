console.log(
    (
        f => x => x < 2 ? 1 : x * f(f)(x - 1)
    )(
        f => x => x < 2 ? 1 : x * f(f)(x - 1)
    )(10)
);

// Это отражает идею Y-combinator