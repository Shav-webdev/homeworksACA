function findIndexByBinarySearch(arr = [], el = 0) {
    debugger;
    let start = 0;
    let end = arr.length - 1;
    while (start <= end){
        let mid = Math.floor((start + end)/2);
        if (arr[mid] < el){
            start = mid + 1;
        }else if (arr[mid] > el){
            end = mid - 1;
        }else {
            return mid;
        }
    }

}

findIndexByBinarySearch([2, 4, 5, 8, 9, 12, 16, 18, 21, 23], 21);


/*second*/
/*it works with only arrays with length of 3, I will try to finish it*/

function getFactorialOfTheNumber(num = 0) {
    if (num <= 1){
        return num;
    }else{
        return num * getFactorialOfTheNumber(num - 1);
    }
}


function getAllPossibleSubsets(arr = [], num) {
    let arrLength = arr.length;
    let subsetsArr = [];
    let count = getFactorialOfTheNumber(arrLength)/(getFactorialOfTheNumber(num) * getFactorialOfTheNumber(arrLength - num));
    for (let i = 0; i < count; i++) {
        if (arr[i + 2] === undefined){
            break;
        }else{
            let subsetsArrItem = [];

            subsetsArrItem.push(arr[i], arr[i + 1], arr[i + 2]);
            subsetsArr.push(subsetsArrItem);
        }
    }
    return subsetsArr;
}

getAllPossibleSubsets([1, 2, 3, 4, 6], 3);