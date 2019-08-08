/*second*/
function numsOfStringAndNumber(arr = []) {
    if (Array.isArray(arr)){
        let numOfStr = arr.filter(function (value) {
            return typeof value === "string";
        });
        let numOfNum = arr.filter(function (value) {
            return typeof value === "number";
        });
        console.log(`Numbers : ${numOfNum.length}` , `Strings : ${numOfStr.length}`);
    }
}

/*third*/
function sumOfArrItems(arr) {
    let newArr = [];
    if (Array.isArray(arr)){
        for (let elem of arr){
            if (Array.isArray(elem)){
                let sumOfArrElem = elem.reduce((a, b) => a + b);
                newArr.push(sumOfArrElem);

            }
        }
    }
    return 	newArr;
}

sumOfArrItems([[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]]);


                /*fourth*/
function removeEvenAndMultiplyLength(arr) {
    let oddArr = arr.filter(function (value) {
        return Math.abs(value) % 2 === 1;
    });
    let multiplyWithLength = oddArr.map(function (value) {
        return value * oddArr.length;
    });

    return multiplyWithLength;
}


removeEvenAndMultiplyLength([5, 4, 78, 0, -3, 7]);


/*fifth*/

/* with for loop*/
function removeRepeatNums(arr){
    let accumArr = [];
    for (let elem of arr){
        if (!accumArr.includes(elem)){
            accumArr.push(elem);
        }
    }
    return accumArr;
}

removeRepeatNums([1, 2, 3, 3, 2, 5]);

/*    with method
 Please say what is wrong here?*/
let initialArr = [1, 2, 3, 3, 2, 5];
debugger;
let onceElem = [];
onceElem = initialArr.filter(function(currentValue) {
    return !onceElem.includes(currentValue);
});

console.log(onceElem);

/* sixth*/
let multipliedArr = [];
function multiplyNeighbours(arr = [], i = 0){
    if (i < arr.length - 1){
        let firstTwoElem = [arr[i], arr[i + 1]];
        let lastArr = firstTwoElem.reduce(function(accum, currentValue){
            return accum * currentValue;
        });
        multipliedArr.push(lastArr);
        return multiplyNeighbours(arr, i+1);
    }
    console.log(multipliedArr);
    return multipliedArr;
}

multiplyNeighbours([3, 7, 12, 5, 20]);
