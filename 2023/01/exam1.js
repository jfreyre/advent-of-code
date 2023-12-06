import { data as sample } from './data.js';

function extractFirstAndLastNumbers(line) {
    const numbers = line.match(/\d/g);
    
    if (!numbers) {
        return [];
    }
    
    // Extract first and last
    const first = parseInt(numbers[0], 10);
    const last = parseInt(numbers[numbers.length - 1], 10);
    
    let r =  first * 10 + last;
    console.log(first, last, r);
    return r;
}

let sum = 0;
sample.forEach(line => {
    
    const res = extractFirstAndLastNumbers(line)
    
    sum += res;
    
});

console.log(sum);