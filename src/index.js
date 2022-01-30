module.exports = function reverse (n) {
    if (n < 0) {
        return Number(String(n).split('').slice(1, String(n).length).reverse().join(''))
    }
    return Number(String(n).split('').reverse().join(''))
}
