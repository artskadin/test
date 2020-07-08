const mixin = function() {
    return this * this
}

console.log(mixin.call(5))