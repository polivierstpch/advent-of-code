const fs = require('fs');

const inputFile = 'input.txt';
const inputs = fs.readFileSync(inputFile, 'utf-8').split('\n');

function getAmountsOfBitsForPosition(inputs, position) {
    let amountOfOnes = 0;
    let amountOfZeroes = 0;

    for (let j = 0; j < inputs.length; j += 1)
    {
        if (inputs[j][position] === '1')
            amountOfOnes += 1;
        else
            amountOfZeroes += 1;
    }

    return [amountOfOnes, amountOfZeroes];
}

function calculatePowerConsumption(inputs) {
    let gammaRate = '';
    let epsilonRate = '';

    const length = inputs[0].length;

    for (let pos = 0; pos < length; pos += 1) {
        const [amountOfOnes, amountOfZeroes] = getAmountsOfBitsForPosition(inputs, pos);

        gammaRate += amountOfOnes >= amountOfZeroes ? '1' : '0';
        epsilonRate += amountOfOnes >= amountOfZeroes ? '0' : '1';
    }

    return parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);
}

function reduceValueRatingInput(inputs, position, getMostCommonBit = true) {
    if(inputs.length === 1)
        return inputs;
    
    const [amountOfOnes, amountOfZeroes] = getAmountsOfBitsForPosition(inputs, position);
    
    let bitToUse;
    if (getMostCommonBit)
        bitToUse = amountOfOnes >= amountOfZeroes ? '1' : '0';
    else 
        bitToUse = amountOfOnes < amountOfZeroes ? '1' : '0';
    
    const newInputs = inputs.filter(line => line[position] === bitToUse);

    const newPosition = (position + 1) % inputs[0].length;

    return reduceValueRatingInput(newInputs, newPosition, getMostCommonBit);
}

function calculateLifeSupportRating(inputs) {

    const oxygenGenInputs = [...inputs];
    const co2ScrapperInputs = [...inputs];

    const [oxygenGeneratorRating] = reduceValueRatingInput(oxygenGenInputs, 0);
    const [co2ScrapperRating] = reduceValueRatingInput(co2ScrapperInputs, 0, false);
    console.log(oxygenGeneratorRating);
    console.log(co2ScrapperRating);

    return parseInt(oxygenGeneratorRating, 2) * parseInt(co2ScrapperRating, 2);
}

console.log(calculatePowerConsumption(inputs));
console.log(calculateLifeSupportRating(inputs));
