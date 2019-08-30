/*first*/
function getLargestMultiplyOfPairElem(arr = []) {
    let multipliedElements = arr.map((value, index) => value * arr[index + 1]);
    multipliedElements.pop();
    return Math.max(...multipliedElements);
}

getLargestMultiplyOfPairElem([5, 1, 3, 8, 5]);


/*second*/
function findMissingNumsCount(arr = "Invalid argument") {
    let countOfNums = [];
    if (arr.length === 0){
        return "Invalid argument"
    }else{
        arr.sort((a, b) => a - b);
        for (let i = 0; i < arr.length - 1; i++) {
            let count = arr[i + 1] - arr[i];
            if (count === 1){
                continue;
            }
            else {
                --count;
                countOfNums.push(count);
            }
        }
    }

    return countOfNums.reduce((previousValue, currentValue) => previousValue + currentValue);
}


findMissingNumsCount([1, 4, 7, 8, 13, 15, 16, 17]);

/*third*/
function convertToAcronym(str = "") {
    let acronym = "";
    if (str.length === 0){
        return "Invalid argument"
    }else{
        let args = str.split(" ");
        for(let arg of args){
            acronym = acronym + arg[0].toUpperCase();
        }
    }
    return acronym;
}

convertToAcronym("Prisoner of War");

/*forth*/
function getContiguousSubstrings(str, n) {
    let subStr = [];
    if (str.length === 0){
        return "Invalid argument"
    }else {
        for (let i = 0; i <= str.length - n; i++) {
            subStr.push(str.slice(i, n + i));
        }
    }
    return subStr.toString();
}

getContiguousSubstrings("495215", 3);

/*sixth*/
let arr = [
    { book: "Catcher in the Rye", readStatus: true, percent: 40},
    { book: "Animal Farm", readStatus: true, percent: 20},
    { book: "Solaris", readStatus: false, percent: 90 },
    { book: "The Fall", readStatus: true, percent: 50 },
    { book: "White Nights", readStatus: false, percent: 60 } ,
    { book: "After Dark", readStatus: true, percent: 70 }
];

function sortByPercent(arr){
    let sortedArr =[];
    let filteredArr;
    sortedArr = arr.sort((a, b) => b.percent - a.percent);
    filteredArr = sortedArr.filter((currentValue) => currentValue.readStatus === true);
    return filteredArr;
}

sortByPercent(arr);