function range(start, end){
    if (start === end) {
        return [start];
    }
    let rangeArr = [start];

    return rangeArr.concat(range(start + 1, end));
}

function sumRec(arr) {
    if (arr.length === 1) {
        return arr[0];
    }
    sum = arr.pop() + sumRec(arr);
    return sum;
}

function exponent2(b, exp) {
    if (exp === 1) {
        return b
    }

    return b * exponent2(b, exp - 1);
}

function exponent(b, exp) {
    if (exp === 1) {
        return b
    }

    if (exp % 2 === 0 ) {
        return b * exponent(b, exp - 1);
    } else {
        return b * (exponent(b, (exp - 1) / 2) ** 2);
    }
}

function fibonacci(n) {
    if (n === 2) {
        return [1, 1];
    } else if (n === 1) {
        return [1];
    }
    
    let prevFib = fibonacci(n-1);
    let nextFibEl = prevFib[prevFib.length - 1] + prevFib[prevFib.length - 2];
    prevFib.push(nextFibEl);
    return prevFib;
}


function deepDup(arr) {

    if ( 1 === arr.length) {
        return [arr[0]];
    }

         let dupedArr = [];

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
            if ( Array.isArray(arr[index]) ) {
                dupedArr.push( deepDup(arr[index]) );
            } else {
                dupedArr.push(arr[index]);
            }
    }

    return dupedArr;
}
const a = [1, 2, [3, 4, 5, [6]]];
const b = Array.from(a);
b.push(8);
b[2].push(7);
console.log(b);
console.log(a);