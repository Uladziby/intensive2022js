Array.prototype.myFilter = function myFilter(cbCheckELement, thisArg) {
    const resultArr = [];
    let context = this;
    if (arguments.length > 1) {
        context = thisArg;
    }
    if (typeof cbCheckELement !== "function") {
        throw new Error("Callback is not a function");
    }

    for (let index = 0; index < this.length; index++) {
        let array = context;
        let element = array[index]
        if (cbCheckELement.call(context, element, index, array)) {
            resultArr.push(element);
        }
    }
    console.log(resultArr)
    return resultArr;
}

const cbCheckELement = (element, index, array) => {
    if (element < 10) return true
}

[4, 6, 8, 9, 12, 53, -17, 2, 5, 7, 31, 97, -1, 17].myFilter(cbCheckELement);


const log100 = () => console.log(100);
const debounceLog100 = createDebounceFunction(log100, 1000);
const debounceLog1001 = createDebounceFunction(log100, 5000);
debounceLog100();
debounceLog1001();

function createDebounceFunction(cb, delay) {
    let timerId = null;
    return () => {
        if (timerId !== null) {
            clearTimeout(timerId);
        }
        timeId = setTimeout(() => {
            cb()
        }, delay);
    }
}