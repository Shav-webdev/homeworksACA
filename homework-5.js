//first
const zeroToTwenty = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
];

const twentyToNinety = {
    1: " ten ",
    2: " twenty ",
    3: " thirty ",
    4: " forty ",
    5: " fifty ",
    6: " sixty ",
    7: " seventy ",
    8: " eighty ",
    9: " ninety "
};

const hundred = " hundred ";
const thousand = " thousand ";
const numsArr = [zeroToTwenty, twentyToNinety, hundred, thousand];


function spellNumberInEnglish(num) {
    if (num === undefined){
        return "Invalid argument"
    }
    if (num >= 0 && num <= 20) {
        return zeroToTwenty[num];
    } else if (num > 20 && num < 100) {
        let prop = (Math.floor(num / 10)) + "";
        return twentyToNinety[prop] + spellNumberInEnglish(num % 10);
    }else if(num >= 100 && num <= 999){
        let prop = (Math.floor(num / 100)) + "";
        return zeroToTwenty[prop] + hundred + spellNumberInEnglish(num % 100);
    }else if (num > 999 && num < 19999){
        let prop = (Math.floor(num / 1000)) + "";
        return zeroToTwenty[prop] + thousand + spellNumberInEnglish(num % 1000);
    }else if (num > 19999 && num <99999){
        let prop = (Math.floor(num / 10000)) + "";
        if (num % 10000 === 0){
            return twentyToNinety[prop] + thousand;
        }else{
            if(num % 10000 < 1000){
                return twentyToNinety[prop] + thousand + spellNumberInEnglish(Number(num % 10000));
            }else {
                return twentyToNinety[prop] + spellNumberInEnglish(Number(num % 10000));
            }
        }
    }else if (num > 99999 && num < 999999){
        let prop = (Math.floor(num / 100000)) + "";
        if (num % 100000 === 0){
            return zeroToTwenty[prop] + hundred + thousand;
        }else if(num % 100000 < 100000){
            return zeroToTwenty[prop] + hundred + spellNumberInEnglish(Number(num % 100000));
        }else if(num % 100000 < 10000){
            return  twentyToNinety[prop] + spellNumberInEnglish(Number(num % 10000));
        }else if(num % 10000 < 1000){
            return twentyToNinety[prop] + thousand + spellNumberInEnglish(Number(num % 1000));
        }else {
            return twentyToNinety[prop] + spellNumberInEnglish(Number(num % 10000));
        }
    }
}

spellNumberInEnglish(675711);


//second

function getAllPossibleSubsets(arr = []){
    debugger;
    let subsetsArr = [];

    for(let i = 0; i < arr.length; i++ ) {
        for(let j = i + 1; j < arr.length; j++ ) {
            for(let k = j + 1; k < arr.length; k++ ) {
                let subsetsNestedArr = [];
                subsetsNestedArr.push(arr[i], arr[j], arr[k]);
                subsetsArr.push(subsetsNestedArr);

            }
        }
    }
    return subsetsArr;
}

getAllPossibleSubsets([5, 9, 23, 0, -2, -1]);


//third this one is not correct work
function getCorrectSublist(string = "", arr = []){
    debugger;
    let subsetsArr;
    let matchesArr;
    let strArr = Array.from(string);
    subsetsArr = arr.filter((currentValue, index, arr) => {
        return currentValue.length === strArr.length;
    });
    matchesArr = subsetsArr.filter((el) => {
        return strArr.map((item) => {
            if(el.includes(item)){
                return el;
            }
        });
    });

    return matchesArr;
}
getCorrectSublist("listen", ["enlists", "google", "inlets", "banana"]);