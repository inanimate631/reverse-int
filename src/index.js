module.exports = function reverse (n) {
    let number = 0
    if (n > 0) {
        for (let i = 10; n >= 1;) {
            let sum = n % i
            n = (n - sum) / 10
            number += sum.toString()
            if (n < 1) {
                return(+number)
                break
            }
        }
    }else{
        for (let i = 10; Math.abs(n) >= 1;) {
            let sum = Math.abs(n) % i
            n = (Math.abs(n) - sum) / 10
            number += sum.toString()
            if (Math.abs(n) < 1) {
                return(+number)
                break
            }
        }
    }
}

