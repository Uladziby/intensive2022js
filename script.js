const country = {
    name: 'USA',
    states: [{ name: 'Alabama', area: 135767 }, { name: 'Arizona', area: 295234 }, { name: 'Louisiana', area: 135650 }],
    population: 331893745,

};

function makeObjectDeepCopy(obj) {
    const deepCopy = [];
    if (!obj) return obj
    if (typeof obj !== 'object') return obj;

    if (Array.isArray(obj)) {
        const copyArr = [];
        obj.forEach(item => copyArr.push(makeObjectDeepCopy(item)));
        return copyArr;
    }

    Object.keys(obj).forEach((key) => {
        deepCopy[key] = makeObjectDeepCopy(obj[key]);
    });
    return deepCopy;
};

makeObjectDeepCopy(country);

function selectFromInterval(arrNumbers, firstNum, secondNum) {
    if (!Array.isArray(arrNumbers)) throw new Error(`This is not array!`);

    const resultArr = [];
    const from = firstNum < secondNum ? firstNum : secondNum;
    const to = firstNum > secondNum ? firstNum : secondNum;

    for (let i = 0; i < arrNumbers.length; i++) {
        if (typeof arrNumbers[i] === 'number') {
            if (arrNumbers[i] >= from && arrNumbers[i] <= to) resultArr.push(arrNumbers[i]);
        } else {
            throw new Error(`element ${arrNumbers[i]} is not number!`)
        }
    }
    return resultArr;
}


let myIterable = {
    from: 1,
    to: 5
};

myIterable[Symbol.iterator] = function () {
    if (typeof this.from !== 'number') throw new Error('From must be  a number');
    if (typeof this.to !== 'number') throw new Error('To must be  a number')
    if (this.from > this.to) throw new Error('From cannot less than To')
  
    return {
        current: this.from,
        last: this.to,
        next() {
            if (this.current <= this.last) {
                return { done: false, value: this.current++ };
            } else {
                return { done: true };
            }
        }
    };
};
