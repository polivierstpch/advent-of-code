const fs = require('fs');

const filepath = 'input.txt';

const text = fs.readFileSync(filepath, 'utf-8')
               .split('\n');


function sumMeasurements(measurements, steps)
{
    const sums = [];
    for (let idx = 0; idx < measurements.length - steps; idx += 1) {
        let sum = 0;
        for (let jdx = 0; jdx < steps; jdx += 1) {
            sum += parseInt(measurements[idx + jdx]);
        }
        sums.push(sum);
    }

    return sums;
}

function countLargerThanPreviousMeasurements(measurements) {
    let count = 0;

    if(measurements.length <= 1)
        return count;

    for (let idx = 1; idx < measurements.length; idx += 1) {
        if (measurements[idx - 1] < measurements[idx])
            count += 1;
    }

    return count;
}

const sums = sumMeasurements(text, 3);

console.log(countLargerThanPreviousMeasurements(sums));

