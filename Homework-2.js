/* third*/
function sumOfDigits(num = 0) {
	let result = 0;
 	let strNum = num.toString();
    if (strNum.length > 1){
        for (let i = 0; i <strNum.length; i++){
            result += parseInt(strNum[i]);
        }
        num = result;
       return sumOfDigits(num);
    }
    return num;
}

sumOfDigits(45125874);



/* second demo*/
let numsArr = [];

function concatNestedArrays(arr = [], i = 0) {
    if (i < arr.length){
        if (Array.isArray(arr[i])){
            return concatNestedArrays(arr[i], 0);
        }else {
            numsArr.push( arr[i] );
            return concatNestedArrays(arr, i +1);
        }

    }
    return numsArr;
}
console.log(concatNestedArrays([14, [1, [[[3, []]], 1], 0]]));

/* first with recursion*/
function removeFirstElementOfArray(arr = [], i = 0) {
    if (i < arr.length -1){
        arr[i] = arr[i+1];
        return removeFirstElementOfArray(arr, i = i +1);
    }
    arr.pop();
    return arr;
}

removeFirstElementOfArray([-5, 0, 16, 47,]);

/*first with for loop*/
function removeFirstElementOfArray(arr = []) {
    for (let i = 0; i < arr.length -1; i++){
        arr[i] = arr[i+1];
    }
    arr.pop();
    return arr;
}

console.log(removeFirstElementOfArray([-155, -99, -87, -23]));
