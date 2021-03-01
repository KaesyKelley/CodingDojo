// 1-255
function countingArr(){
    var arr = [];
    for(var i = 1; i < 256; i++){
        arr.push(i);
    }
    return arr;
}


// Get Even 1000 

function sum_even_numbers(){
    var sum = 0;
    for(var i = 1; i < 1001; i++){
        if(i % 2 === 0){
            sum = sum + i;
        }
    }
    return sum; 
}

// Sum Odd 5000

function sum_odd_numbers(){
    var sum = 0;
    for(var i =1; i <=5000; i++){
        if(i % 2 == 1) {
            sum = sum+ i;
        }
    }
    return sum;
}

// Iterate an array

function iterArr(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
    sum = sum + arr[i];
    }
return sum;
}


// Find Max

function findMax(arr) {
    var max = arr[0];
    for (var i =0; i < arr.length; i++){
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    return max;
}


// Find Average 

function findAvg(arr) {
    var sum = 0
    for(var i =0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    return sum/arr.length;
}

// Array Odd

function oddNumbers (){
    var arr = [];
    for(var i = 1; i <50; i++){
        if(i % 2 ===1){
            arr.push(i);
        }
    }
return arr; 
}

// Greater than Y

function greaterY(arr, Y){
    var count = 0;
    for(var i= 0; i < arr.length; i++){
        if(arr[i]> Y){
            count++;
        }
    }
return count;
}

// Squares

function squareVal(arr) {
    for(var i=0; i<=arr.length; i++){
    arr[i] = arr[i] * arr[i];
    }
    return arr;
}

// Negatives
function neg_num_swap(arr){
    for(var i = 0; i < arr.length; i++){
        id (arr[i] < 0); {
            arr[i] = 0
        }
    }
}

//Max/Min/Average
function maxMinAvg(arr){
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];

    for (var i =1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
        if(arr[i]< min){
            min = arr[i];
        }
        sum = sum + arr[i];
    }
    var avg = sum / arr.length;
    var arrnew = [max, min, avg];
    return arrnew;
}

//swap values
function swap(arr) {
    var temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr/length - 1] = temp;
    return arr;
}

//Number to String
function noNeg(arr){
    for (var i = 0; i < arr.length; i++) 
    if (arr[i] < 0){
        arr[i] = 0
    }
    return arr;
}