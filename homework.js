/* fourth-demo*/
anyArr = [-155, -9, 87, -23, 56, 0, 55, 1];
sortedArr = anyArr.sort();

function minPositiveNum(anyArr) {
debugger;
    if (anyArr[0] < 0) {
        let spliceArray = anyArr.splice(0, 1);
        minPositiveNum(anyArr);
    }
    return anyArr[0];
}

minPositiveNum(sortedArr);


/* third-demo*/
function isNumberAllDigitsOdd(num) {
debugger;
    if (num % 10 % 2 === 0){
        return false;
    }
    else {
        let stringNum = String(num).slice(0, -1);
        isNumberAllDigitsOdd(stringNum);

    }
}
isNumberAllDigitsOdd(123);

/*third*/
function isNumberAllDigitsOdd(num) {
    if (num % 2 === 1 && num !== undefined){
        let stringNum = String(num);
        for (let i = 0; i < stringNum.length;){
            if (stringNum[i] % 2 === 1) {
                i++;
                isNumberAllDigitsOdd(stringNum[i]);
            }
            else return false;
        }
        return true;
    }
    return false;
}

isNumberAllDigitsOdd(123);


/* second*/
function rangeEvenNumbers(num1, num2) {
    let rangeOfEvenElements = [];
    if (num1 < num2) {
        outer: for (let i = num1; i <= num2; i++) {
            let num2string = String(i);
            inner: for (let j = 0; j < num2string.length; j++){
                if (num2string[j] % 2 === 1) {
                    continue outer;
                }
                else if (num2string[j] % 2 === 0) {
                    continue inner;
                }
            }
            rangeOfEvenElements.push(num2string);
        }
    }
    return (rangeOfEvenElements.length === 0) ? "Such values do not exist." : rangeOfEvenElements.toString();
}

rangeEvenNumbers( 87, 112);




/* first*/
function getLargerElements(myArray, number) {
    let largerElements = [];
    if (myArray.length !== 0 && typeof number === "number") {
        for (let i = 0; i < myArray.length; i++) {
            if (myArray[i] > number){
                largerElements.push(myArray[i]);
            }
        }
    }
    return (largerElements.length === 0) ? "Such values do not exist." : largerElements;
}

getLargerElements([-7, 20, 0, 4, 6, 15, 30, 25, 19], 17);
