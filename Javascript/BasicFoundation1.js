// 1-255
function get_array(){
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
            sum += i;
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

