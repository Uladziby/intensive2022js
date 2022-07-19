function concatStrings(str, separator = null) {
    let resultStr = '';
    if (!str) { return () => console.log('incoorect input data') }

    function concat(strInner) {
        if (typeof strInner != 'string') {
            return () => resultStr
        }
        typeof separator === 'string' && resultStr.length > 0 ? resultStr += separator + strInner : resultStr += strInner;
        return concat
    }
    return concat(str)
}
class Calculator {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        if (!this.isValid(this.x) || !this.isValid(this.y)) throw new Error('not valid')
    }
    isValid(number) {
        return typeof number === 'number' && isFinite(number) && !isNaN(number) && typeof number !== 'bigint' ? true : false;
    }
    setX(number) {
        if (this.isValid(number)) {
            this.x = number;
        } else throw new Error('number must not be a bigint')
    }
    setY(number) {
        if (this.isValid(number)) {
            this.y = number;
        }else throw new Error('number must not be a bigint')
    }
    logSum() {
        console.log(this.x + this.y);
    }
    logDiv() {
        console.log(this.y, this.x)
        if (this.y === 0) throw new Error('Y cant be equal zero')
        console.log(this.x / this.y);
    }
    logSub() {
        console.log(this.x - this.y);
    }
    logMul() {
        console.log(this.x * this.y);
    }
}
/* const calculator = new Calculator(12, 3);
calculator.logSum(); // 15
calculator.logDiv(); // 4
calculator.setX(15);
const logCalculatorDiv = calculator.logDiv;
calculator.setY(444n); // Ошибка!
calculator.logDiv(); // 5 */